# AI Skill Store - Developer Documentation

Welcome to the technical documentation for the AI Skill Store. This project is a Next.js application designed to showcase and sell "Design Skills" for AI agents.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1.  **Clone/Navigate to the project:**

    ```bash
    cd skill-store
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    The site will be running at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
skill-store/
├── src/
│   ├── app/                 # Next.js App Router (Pages & API)
│   │   ├── page.tsx         # Landing Page (Home)
│   │   ├── layout.tsx       # Root Layout
│   │   └── api/             # Backend API Routes
│   ├── components/
│   │   ├── landing/         # Landing Page Sections (Hero, Showcase, etc.)
│   │   ├── layout/          # Global Layout Components (Header, Footer)
│   │   └── ui/              # Reusable UI Components
│   └── lib/                 # Utilities and Helper functions
├── public/                  # Static Assets (Images, Icons)
└── cli/                     # The CLI Tool for installing skills
```

---

## ✨ Features & Components

### 1. Magnetic Particle Background (`ParticleBackground.tsx`)

This is the core visual feature of the landing page. It creates an interactive, space-like background.

- **Location:** `src/components/layout/ParticleBackground.tsx`
- **Behavior:**
  - **Drift:** Particles drift slowly and randomly when idle.
  - **Repulsion:** Particles are pushed away from the mouse cursor within a 150px radius.
  - **Recovery:** Particles smoothly return to their original flow after interaction.
- **Configuration:**
  You can tweak the physics constant inside the file:
  ```typescript
  const particleCount = 450; // Number of particles
  const magneticRadius = 150; // Radius of influence
  const forceMultiplier = 15; // Strength of repulsion
  const returnSpeed = 20; // Speed of recovery (lower is faster)
  ```

### 2. High-Fidelity Showcase (`ShowcaseSection.tsx`)

A visual comparison tool that lets users slide between "Before" (Basic AI Output) and "After" (Skill Store Theme).

---

## 🛠️ Customization

### Changing Brand Colors

The project uses Tailwind CSS. You can customize colors in `tailwind.config.ts` or directly in the components.

- **Primary Brand Color:** Indigo/Purple/Blue gradients.
- **Background:** Deep Black (`#050505`) to allow particles to pop.

### Adding New Skills

To add a new skill to the store:

1.  Create a markdown file in `src/data/skills/`.
2.  Update `src/lib/skills.ts` to include the new skill metadata.

---

## 📦 Deployment

This is a standard Next.js application.

**Vercel / Netlify:**

1.  Push your code to GitHub.
2.  Import the project into Vercel/Netlify.
3.  It will automatically detect Next.js and build settings.

**Docker:**
Use the provided `Dockerfile` (if applicable) or standard Next.js Docker setup.

---

## ❓ Troubleshooting

**"Particles not showing up?"**

- Ensure the component is mounted in `src/app/page.tsx`.
- Check that `z-index` is set correctly (Particles should be `z-0`).
- Verify `pointer-events-none` is on the canvas so it doesn't block clicks.

**"CLI not working?"**

- Ensure you ran `npm install` inside the `cli/` folder separately if testing locally.
- Check permissions: `chmod +x cli/index.js`.
