---
title: Minimal Core
description: The ultimate startup starter pack. Clean grays, blue accents, and perfect spacing.
author: AI Skill Store Team
price: Free
preview:
  colors: ["#FFFFFF", "#3B82F6", "#64748B"]
  typography:
    headings: Inter
    body: Inter
  image: /images/themes/minimal-preview.jpg
---

# Minimal Core Design System

This skill provides the design tokens and rules for the Minimal Core theme. Use these specifications when generating code to ensure consistency with the theme's clean, modern SaaS aesthetic.

## 1. Color Palette

- **Primary Action**: `#3B82F6` (Blue 500) - Used for primary buttons, links, and key indicators.
- **Secondary/Background**: `#FFFFFF` (White) - The core page background.
- **Surface**: `#F3F4F6` (Gray 100) - Used for card backgrounds, secondary sections.
- **Text Primary**: `#111827` (Gray 900) - Headings, primary body text.
- **Text Secondary**: `#6B7280` (Gray 500) - Subtitles, description text.
- **Borders/Dividers**: `#E5E7EB` (Gray 200) - Subtle separators.

## 2. Typography

- **Headings**:
  - **Font Family**: `Inter`, sans-serif (Clean, geometric).
  - **Weight**: 600 (Semi-Bold) to 800 (Extra-Bold).
  - **Sizes**:
    - H1: `3rem` (48px)
    - H2: `2.25rem` (36px)
    - H3: `1.5rem` (24px)
- **Body Text**:
  - **Font Family**: `Inter`, sans-serif.
  - **Weight**: 400 (Regular).
  - **Size**: `1rem` (16px).

## 3. Component Styles

### Buttons

- **Global**: 6px border-radius (rounded corners).
- **Primary Button (`.btn-primary`)**:
  - Background: `#3B82F6`
  - Text: `#FFFFFF`
  - Padding: `0.75rem 1.5rem`
  - Hover Effect: Darken slightly (`bg-blue-600`).
- **Secondary Button (`.btn-secondary`)**:
  - Background: `#FFFFFF`
  - Border: `1px solid #E5E7EB`
  - Text: `#374151`
  - Hover: `bg-gray-50`.

### Cards

- **Background**: `#FFFFFF`.
- **Border**: `1px solid #E5E7EB`.
- **Shadow**: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)` (Sm).
- **Padding**: `1.5rem`.
- **Hover**: Shadow md (`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`).

### Inputs

- **Style**: Rounded box.
- **Background**: `#FFFFFF`.
- **Border**: `1px solid #D1D5DB`.
- **Text**: `#111827`.
- **Focus**: Ring with Primary Color (`#3B82F6`).

## 4. Animations & Motion Design

### Transitions

- **Standard Duration**: `0.15s`.
- **Easing**: `ease-in-out`.
- **Usage**: Checkboxes, buttons, links.

### Hover Effects

- **Simple Color Change**: Most elements simply change color or background shade on hover.
- **No transform scaling**: Keep it grounded and professional.

## 5. Implementation Rules

1.  **Use Tailwind CSS utilities**: This theme maps directly to standard Tailwind colors and spacing.
2.  **Focus on hierarchy**: Use font weight and color (gray-900 vs gray-500) to establish hierarchy.
3.  **Consistency**: Use consistent padding (p-4, p-6) throughout.
