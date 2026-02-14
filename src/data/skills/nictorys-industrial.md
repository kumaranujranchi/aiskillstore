---
title: Nictorys Industrial Theme
description: Bold industrial design with vibrant orange accents and condensed typography. Perfect for construction, engineering, and manufacturing websites.
author: AI Skill Store Team
price: $39
preview:
  colors: ["#ff5e14", "#020d26", "#ffffff", "#191919", "#777777"]
  typography:
    headings: Barlow Condensed
    body: Open Sans
  image: /images/themes/nictorys-preview.svg
  # demoUrl: "https://nictorys-demo.vercel.app"
---

# Nictorys Industrial Theme Design System

This skill provides the design tokens and rules for the Nictorys industrial theme. Use these specifications when generating code to ensure consistency with the theme's bold, professional aesthetic.

## 1. Color Palette

- **Primary Action**: `#ff5e14` (Vibrant Orange) - Used for primary buttons, icons, selection underlines, and all call-to-action elements.
- **Dark Background**: `#020d26` (Midnight Blue) - Used for footer, navigation elements, and dark-themed sections.
- **Main Background**: `#ffffff` (White) - The core page background for maximum readability.
- **Heading Color**: `#191919` (Near Black) - Used for all headings and important text.
- **Body Text**: `#777777` (Medium Grey) - Used for paragraph text and descriptions.
- **Light Text**: `#ffffff` (White) - Used on dark backgrounds (footer, dark sections).

## 2. Typography

- **Headings**:
  - **Font Family**: `Barlow Condensed`, sans-serif (Bold, condensed, industrial feel).
  - **Weight**: 700 (Bold) for maximum impact.
  - **Sizes**:
    - H1: `60px` (Hero titles)
    - H2: `48px` (Section titles)
    - H3: `32px` (Subsection titles)
  - **Style**: Uppercase for major headings to enhance the industrial aesthetic.

- **Body Text**:
  - **Font Family**: `Open Sans`, sans-serif (Clean, highly readable).
  - **Weight**: 400 (Regular).
  - **Size**: `16px` (Base).
  - **Line Height**: `1.8` for excellent readability.

## 3. Component Styles

### Buttons

- **Primary Button (`.theme-btn`)**:
  - Background: `#ff5e14`
  - Text: `#ffffff`
  - Border Radius: `60px` (Pill-shaped for distinctive look)
  - Padding: `14px 40px`
  - Font: `Open Sans`, 600 weight
  - Hover Effect: Darken to `#e54d0a` or add subtle shadow

- **Secondary Button**:
  - Background: Transparent
  - Border: `2px solid #ff5e14`
  - Text: `#ff5e14`
  - Border Radius: `60px`
  - Hover: Fill with `#ff5e14`, text becomes white

### Cards & Sections

- **Background**: `#ffffff` (White cards on white background).
- **Border**: None or very subtle `1px solid #f0f0f0`.
- **Shadow**: `0 10px 30px rgba(0, 0, 0, 0.08)` (Soft, professional).
- **Padding**: `40px` for content sections.
- **Hover**: Slight lift with increased shadow.

### Navigation

- **Background**: `#ffffff` (White) or `#020d26` (Dark variant).
- **Link Color**: `#191919` on light, `#ffffff` on dark.
- **Active/Hover**: `#ff5e14` underline or text color change.
- **Font**: `Open Sans`, 600 weight.

### Footer

- **Background**: `#020d26` (Midnight Blue).
- **Text**: `#ffffff` (White) for headings, `rgba(255, 255, 255, 0.7)` for body.
- **Accent**: `#ff5e14` for links and underlines.
- **Padding**: `80px 0` (Generous spacing).

## 4. Animations & Motion Design

### Transitions

- **Standard Duration**: `0.3s`.
- **Easing**: `ease-in-out`.
- **Usage**: All hover states, button interactions, card lifts.

### Hover Effects

- **Buttons**: Background color darkens, subtle scale (`transform: scale(1.05)`).
- **Cards**: Lift effect with shadow increase.
- **Links**: Orange underline expands from left to right.

## 5. Layout & Spacing

- **Container Max Width**: `1200px`.
- **Section Padding**: `100px 0` (Vertical), `15px` (Horizontal).
- **Grid Gap**: `30px` between cards/items.
- **White Space**: Generous - let content breathe.

## 6. Implementation Rules

1.  **Use Barlow Condensed for ALL headings** - This is the signature of the industrial aesthetic.
2.  **Orange is the hero** - Use `#ff5e14` sparingly but strategically for maximum impact.
3.  **High contrast** - Dark text on white, white text on dark blue. No mid-tones.
4.  **Pill-shaped buttons** - Always use `border-radius: 60px` for primary CTAs.
5.  **Bold typography** - Headings should be large, bold, and often uppercase.
6.  **Professional spacing** - Don't crowd elements. Use generous padding and margins.
7.  **Midnight blue for grounding** - Use `#020d26` for footer and accent sections to create visual anchors.

## 7. Best Practices

- **Accessibility**: Ensure sufficient contrast ratios (orange on white passes WCAG AA).
- **Mobile**: Reduce heading sizes by 30-40% on mobile devices.
- **Performance**: Use system fonts as fallbacks (`sans-serif`).
- **Consistency**: Stick to the defined color palette - don't introduce new colors.

---

**Design Philosophy**: This theme embodies strength, reliability, and professionalism. The vibrant orange creates energy and urgency, while the condensed typography and midnight blue convey industrial power and trustworthiness.
