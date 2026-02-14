---
title: Windsor Editorial
description: Elegant, serif-focused design for blogs and portfolios. Sophisticated and clean.
author: AI Skill Store Team
price: $19
preview:
  colors: ["#F9F9F9", "#1A1A1A", "#D4AF37"]
  typography:
    headings: Playfair Display
    body: Lato
  image: /images/themes/windsor-preview.svg
---

# Windsor Editorial Design System

This skill provides the design tokens and rules for the Windsor Editorial theme. Use these specifications when generating code to ensure consistency with the theme's classic, sophisticated aesthetic.

## 1. Color Palette

- **Primary Action**: `#1A1A1A` (Jet Black) - Used for primary buttons, active states, and heavy accents.
- **Secondary/Background**: `#F9F9F9` (Off White) - The core page background for readability.
- **Accent**: `#D4AF37` (Gold) - Used for subtle highlights, active links, or borders.
- **Text Primary**: `#1A1A1A` (Jet Black) - Headings, primary body text.
- **Text Secondary**: `#666666` (Dark Gray) - Subtitles, description text.
- **Borders/Dividers**: `#E5E5E5` (Light Gray) - Subtle separators.

## 2. Typography

- **Headings**:
  - **Font Family**: `Playfair Display`, serif (Classic, elegant).
  - **Weight**: 700 (Bold) or 400 (Regular).
  - **Sizes**:
    - H1: `48px`
    - H2: `36px`
    - H3: `24px`
- **Body Text**:
  - **Font Family**: `Lato`, sans-serif (Clean, humanist).
  - **Weight**: 400 (Regular).
  - **Size**: `18px` (Base - slightly larger for readability).

## 3. Component Styles

### Buttons

- **Global**: 2px border-radius (slightly softened corners), mixed case text.
- **Primary Button (`.btn-primary`)**:
  - Background: `#1A1A1A`
  - Text: `#FFFFFF`
  - Padding: `12px 24px`
  - Hover Effect: Opacity change or slight lift.
- **Secondary Button (`.btn-secondary`)**:
  - Background: Transparent
  - Border: `1px solid #1A1A1A`
  - Text: `#1A1A1A`
  - Hover: Fills with black, text becomes white.

### Cards (`.article-card`)

- **Background**: `#FFFFFF` (White).
- **Border**: `1px solid #E5E5E5`.
- **Shadow**: `0 4px 6px rgba(0,0,0,0.05)` (very subtle).
- **Padding**: `32px`.
- **Hover**: Shadow deepens (`0 10px 15px rgba(0,0,0,0.1)`).

### Inputs

- **Style**: Minimalist box.
- **Background**: `#FFFFFF`.
- **Border**: `1px solid #E5E5E5`.
- **Text**: `#1A1A1A`.
- **Focus**: Border color changes to Black `#1A1A1A`.

## 4. Animations & Motion Design

### Transitions

- **Standard Duration**: `0.3s`.
- **Easing**: `ease-out`.
- **Usage**: Hover states, fade-ins.

### Hover Effects

- **Underline**: Links have an underline that expands from left to right on hover.
- **Image Zoom**: Images inside cards scale up slightly (`scale(1.05)`) within their container.

## 5. Implementation Rules

1.  **Prioritize whitespace**: Give content plenty of breathing room.
2.  **Use serif for all headings**: `Playfair Display` is key to the identity.
3.  **Keep it minimal**: Avoid unnecessary decorations or heavy shadows.
