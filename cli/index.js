#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { extractTheme } from './extract.js';

const program = new Command();

program
  .name('skill-store-cli')
  .description('Install AI coding skills from the Skill Store')
  .version('1.0.0');

program
  .command('extract <url>')
  .description('Extract design tokens from a live URL and generate a skill')
  .option('-o, --output <path>', 'Output file path', 'extracted-skill.md')
  .action(async (url, options) => {
    console.log(chalk.blue(`Extracting theme from: ${url}...`));
    const skillContent = await extractTheme(url);
    
    if (skillContent) {
        fs.writeFileSync(options.output, skillContent);
        console.log(chalk.green(`\nSkill generated successfully at: ${options.output}`));
        console.log(chalk.dim('\nYou can now install this skill manually or submit it to the store!'));
    }
  });

program
  .command('install <slug>')
  .description('Install a skill by its slug')
  .action(async (slug) => {
    console.log(chalk.blue(`Installing skill: ${slug}...`));

    // 1. Mock Authentication
    const { token } = await inquirer.prompt([
      {
        type: 'password',
        name: 'token',
        message: 'Enter your License Key:',
        mask: '*',
      },
    ]);

    const spinner = ora('Fetching skill...').start();

    try {
      // 2. Fetch from API (Assuming local dev server for now)
      const response = await fetch(`http://localhost:3000/api/skill/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
            spinner.fail(chalk.red('Unauthorized: Invalid token.'));
        } else if (response.status === 404) {
            spinner.fail(chalk.red(`Skill "${slug}" not found.`));
        } else {
            spinner.fail(chalk.red(`Error: ${response.statusText}`));
        }
        return;
      }

      const data = await response.json();

      // 3. Determine installation path
      // Try to detect .cursor/rules, otherwise use current directory
      let installDir = path.join(process.cwd(), '.cursor/rules');
      if (!fs.existsSync(installDir)) {
        // If .cursor/rules doesn't exist, try just .cursor
         installDir = path.join(process.cwd(), '.cursor');
         if (!fs.existsSync(installDir)) {
             // Fallback to current directory
             installDir = process.cwd();
         }
      }
      
      // Ensure directory exists
      if (!fs.existsSync(installDir)) {
          fs.mkdirSync(installDir, { recursive: true });
      }

      const filePath = path.join(installDir, `${slug}.md`);

      // 4. Write file
      fs.writeFileSync(filePath, data.content);

      spinner.succeed(chalk.green(`Skill installed successfully!`));
      console.log(chalk.dim(`Location: ${filePath}`));
      console.log(chalk.yellow('\nNext steps:'));
      console.log(`1. Open your AI editor (Cursor, Windsurf).`);
      console.log(`2. The rule file shoud be automatically detected.`);
      console.log(`3. Start coding with your new skill!`);

    } catch (error) {
      spinner.fail(chalk.red('Failed to install skill.'));
      console.error(error);
    }
  });

program.parse(process.argv);
