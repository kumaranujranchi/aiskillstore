#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { extractTheme } from './extract.js';

const program = new Command();

// IMPORTANT: Localhost URL for testing, can be overridden by env
const API_BASE_URL = 'http://localhost:3000';

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
    }
  });

program
  .command('install <slug>')
  .description('Install a skill by its slug')
  .option('-k, --key <key>', 'License Key')
  .action(async (slug, options) => {
    console.log(chalk.blue(`\n🚀 UI-UX PRO MAX: Installing ${slug}...`));

    let token = options.key;

    if (!token) {
        const answers = await inquirer.prompt([
            {
                type: 'password',
                name: 'key',
                message: 'Enter your License Key:',
                mask: '*',
            },
        ]);
        token = answers.key;
    }

    const spinner = ora('Connecting to Skill Store...').start();

    try {


      const response = await fetch(`${API_BASE_URL}/api/skill/${slug}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
            spinner.fail(chalk.red('Unauthorized: Invalid or missing License Key.'));
        } else if (response.status === 404) {
            spinner.fail(chalk.red(`Skill "${slug}" not found.`));
        } else {
            spinner.fail(chalk.red(`Server Error: ${response.statusText}`));
        }
        return;
      }

      const data = await response.json();
      spinner.text = 'Writing skill files...';

      // DETERMINE INSTALLATION PATH
      let installDir = process.cwd();
      
      // Check for .cursor/rules or .windsurf/rules
      const potentialDirs = [
        path.join(process.cwd(), '.cursor', 'rules'),
        path.join(process.cwd(), '.windsurf', 'rules')
      ];

      for (const dir of potentialDirs) {
          if (fs.existsSync(path.dirname(dir))) {
              installDir = dir;
              break;
          }
      }

      if (!fs.existsSync(installDir)) {
          fs.mkdirSync(installDir, { recursive: true });
      }

      const filePath = path.join(installDir, `${slug}.md`);
      fs.writeFileSync(filePath, data.content);

      spinner.succeed(chalk.green(`Successfully installed ${slug}!`));
      console.log(chalk.cyan(`\n📂 Downloaded to: `) + chalk.white(filePath));
      
      console.log(chalk.yellow('\n✨ Next Steps:'));
      console.log(chalk.white(`1. Open your AI editor (Cursor/Windsurf).`));
      console.log(chalk.white(`2. Ask your AI to use this theme rules.`));
      console.log(chalk.white(`3. Design like a Pro! 🚀\n`));

    } catch (error) {
      spinner.fail(chalk.red('Failed to connect to the Skill Store.'));
      console.log(chalk.yellow('Make sure "npm run dev" is running in your main project folder.\n'));
    }
  });

program.parse(process.argv);
