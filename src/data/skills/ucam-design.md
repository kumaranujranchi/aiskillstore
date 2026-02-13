---
title: "Ucam Design System"
description: "A futuristic, high-contrast CCTV and security theme with sharp edges and tech-inspired typography."
author: "Designesia"
price: "Free"
preview:
  colors: ["#ED1D24", "#1A2331", "#010A1A", "#FFFFFF"]
  typography:
    headings: "Orbitron"
    body: "Public Sans"
  image: "/images/ucam-preview.png"
---

# Ucam Theme Design System

This skill provides the design tokens and rules for the Ucam theme. Use these specifications when generating code to ensure consistency with the theme's futuristic, high-contrast aesthetic.

## 1. Color Palette

- **Primary Action**: `#ED1D24` (Bright Red) - Used for primary buttons, active states, and accents.
- **Secondary/Dark Background**: `#1A2331` (Dark Slate Blue) - Used for card backgrounds, secondary sections.
- **Main Background**: `#010A1A` (Very Dark Blue/Black) - The core page background.
- **Text Primary**: `#FFFFFF` (White) - Headings, primary body text.
- **Text Secondary**: `rgba(255, 255, 255, 0.6)` - Subtitles, description text.
- **Borders/Dividers**: `rgba(255, 255, 255, 0.1)` - Subtle separators.
- **Input Borders**: `rgba(255, 255, 255, 0.3)` - Form field underlines.

## 2. Typography

- **Headings**:
  - **Font Family**: `Orbitron`, sans-serif (Futuristic, geometric).
  - **Weight**: 700 (Bold).
  - **Sizes**:
    - H1: `52px`
    - H2: `38px`
    - H3: `24px`
- **Body Text**:
  - **Font Family**: `Public Sans`, sans-serif (Clean, modern).
  - **Weight**: 400 (Regular).
  - **Size**: `17px` (Base).

## 3. Component Styles

### Buttons

- **Global**: 0px border-radius (sharp corners), uppercase text, `Orbitron` font for labels.
- **Primary Button (`.btn-main`)**:
  - Background: `#ED1D24`
  - Text: `#FFFFFF`
  - Padding: `3px 20px` (Compact height, wide width)
  - Hover Effect: Slide animation (color swipe).
- **Secondary Button (`.btn-line`)**:
  - Background: Transparent
  - Border: `1px solid rgba(255, 255, 255, .5)`
  - Text: `#FFFFFF`
  - Hover: Fills with white or primary color.

### Cards (`.de-item`, `.feature-box`)

- **Background**: `#1A2331` (Dark Slate).
- **Border Radius**: `0px`.
- **Shadow**: None (flat design) or very subtle.
- **Padding**: `40px`.
- **Hover**: Slight background lighten or scale effect.

### Inputs (`.form-underline`)

- **Style**: Underlined only (no box).
- **Background**: Transparent.
- **Border Bottom**: `1px solid rgba(255, 255, 255, 0.3)`.
- **Text**: White.
- **Focus**: Border color changes to Primary `#ED1D24`.

## 4. Animations & Motion Design

### Transitions

- **Standard Duration**: `0.5s`.
- **Easing**: `ease-in-out`.
- **Usage**: All hover states (buttons, links, cards).

### Hover Effects (`.fx-slide`, etc.)

- **Sliding Overlay**: Primary buttons often have a pseudo-element that slides in from the left on hover.
- **Scale**: Cards may scale up slightly (`transform: scale(1.02)`) on hover.
- **Opacity**: Secondary text or images may fade in/out (`opacity: 0.8 -> 1`).

### Scroll Animations (WOW.js / Animate.css)

- **Fade In Up**: Elements slide up and fade in as they enter the viewport (`wow fadeInUp`).
- **Fade In**: Simple fade in for background images or less critical content (`wow fadeIn`).
- **Slide In Left/Right**: Used for dynamic section entrances.

### Keyframes

- **`spinner-border`**: Standard rotating loader.
- **`bounce`**: Subtle attention-grabbing bounce for icons.
- **`flash`**: Rapid opacity change for alerts.

## 5. Implementation Rules

1.  **Always use `Orbitron` for headings** to maintain the "tech" feel.
2.  **Avoid rounded corners** (`border-radius: 0`) unless specifically requested; the theme is sharp and geometric.
3.  **Use high contrast** (White text on Dark background) for all main content.
4.  **Implement hover states** for all interactive elements using the `0.5s ease-in-out` transition.
