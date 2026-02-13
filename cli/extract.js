import chalk from 'chalk';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

export async function extractTheme(url) {
  console.log(chalk.blue(`\n🎨 Extracting theme from: ${url}...\n`));

  try {
    console.log('📡 Fetching HTML...');
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    console.log('🔍 Analyzing styles...');
    
    const colors = new Set();
    const fontFamilies = new Set();
    
    // Extract from style tags and inline styles
    const styleContent = $('style').text() + ' ' + $('[style]').map((i, el) => $(el).attr('style')).get().join(' ');
    
    // Extract hex colors
    const hexColors = styleContent.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/g) || [];
    hexColors.forEach(c => colors.add(c.toUpperCase()));
    
    // Extract RGB colors and convert to hex
    const rgbMatches = styleContent.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g) || [];
    rgbMatches.forEach(rgb => {
      const [r, g, b] = rgb.match(/\d+/g);
      const hex = "#" + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1).toUpperCase();
      colors.add(hex);
    });
    
    // Extract font families
    const fontMatches = styleContent.match(/font-family:\s*([^;{}]+)/gi) || [];
    fontMatches.forEach(f => {
      const font = f.replace(/font-family:\s*/i, '').trim().split(',')[0].replace(/['"]/g, '').trim();
      if (font && font !== 'inherit') {
        fontFamilies.add(font);
      }
    });
    
    // Extract border radius values
    const radii = new Set();
    const radiusMatches = styleContent.match(/border-radius:\s*([^;{}]+)/gi) || [];
    radiusMatches.forEach(r => {
      const value = r.replace(/border-radius:\s*/i, '').trim();
      if (value && value !== '0' && value !== '0px') {
        radii.add(value);
      }
    });

    // Basic typography guessing from DOM
    const headings = {};
    ['H1', 'H2', 'H3'].forEach(tag => {
      const el = $(tag.toLowerCase()).first();
      if (el.length) {
        headings[tag] = {
          fontFamily: Array.from(fontFamilies)[0] || 'System Sans',
          fontSize: tag === 'H1' ? '48px' : tag === 'H2' ? '36px' : '24px',
          fontWeight: 'bold'
        };
      }
    });

    if (Object.keys(headings).length === 0) {
      headings['H1'] = { fontFamily: Array.from(fontFamilies)[0] || 'System Sans', fontSize: '48px', fontWeight: 'bold' };
    }

    console.log(chalk.green('✅ Extraction complete!\n'));
    console.log(chalk.dim(`Found ${colors.size} colors, ${fontFamilies.size} fonts\n`));

    return formatSkill(url, {
      colors: Array.from(colors).slice(0, 10),
      fonts: Array.from(fontFamilies).slice(0, 3),
      headings,
      body: { 
        fontFamily: Array.from(fontFamilies)[1] || Array.from(fontFamilies)[0] || 'System Sans', 
        fontSize: '16px',
        fontWeight: 'normal'
      },
      radii: Array.from(radii).slice(0, 3),
      shadows: []
    });

  } catch (error) {
    console.error(chalk.red('❌ Extraction failed:'));
    console.error(chalk.dim(error.message));
    return null;
  }
}

function formatSkill(url, data) {
  const domain = new URL(url).hostname.replace('www.', '');
  const title = domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1) + ' Theme';
  
  return `---
title: ${title}
description: Auto-generated theme extracted from ${url}
author: Skill Store Extractor
price: Free
preview:
  colors: ${JSON.stringify(data.colors)}
  typography:
    headings: "${data.headings.H1?.fontFamily || 'System Sans'}"
    body: "${data.body.fontFamily || 'System Sans'}"
  image: /images/placeholder-theme.jpg
---

# ${title} Design System

**Extracted**: ${new Date().toISOString()}  
**Source**: ${url}

## 1. Color Palette

${data.colors.length > 0 ? data.colors.map(c => `- \`${c}\``).join('\n') : '- No colors detected'}

## 2. Typography

- **Headings**:
  - **Family**: ${data.headings.H1?.fontFamily || 'System Sans'}
  - **H1 Size**: ${data.headings.H1?.fontSize || '48px'} (${data.headings.H1?.fontWeight || 'bold'})
  - **H2 Size**: ${data.headings.H2?.fontSize || '36px'} (${data.headings.H2?.fontWeight || 'bold'})

- **Body**:
  - **Family**: ${data.body.fontFamily || 'System Sans'}
  - **Size**: ${data.body.fontSize || '16px'}
  - **Weight**: ${data.body.fontWeight || 'normal'}

## 3. Component Styles

### Border Radius
${data.radii.length > 0 ? data.radii.map(r => `- ${r}`).join('\n') : '- 0px (Sharp corners)'}

### Shadows
${data.shadows.length > 0 ? data.shadows.map(s => `- \`${s}\``).join('\n') : '- None (Flat design)'}

## 4. Implementation Rules

1.  Use the extracted color palette for all primary elements.
2.  Prioritize **${data.headings.H1?.fontFamily || 'sans-serif'}** for headers.
3.  Maintain consistent border radius: **${data.radii[0] || '0px'}**.
4.  Follow the typography hierarchy defined above.

---

*This theme was automatically extracted. You may need to refine the values based on your specific needs.*
`;
}
