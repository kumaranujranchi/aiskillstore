'use client';

export function DocsContent() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-bold text-white mb-6">
        AI Skill Store Documentation
      </h1>
      <p className="text-xl text-zinc-400 mb-12">
        Complete technical reference for building, customizing, and deploying the AI Skill Store platform.
      </p>

      <div className="space-y-16">
        {/* Installation */}
        <section id="installation" className="border-b border-white/10 pb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Installation & Setup</h2>
          <p className="text-zinc-300 mb-4">Follow these steps to set up the development environment:</p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>Node.js 18+ (Required for App Router)</li>
            <li>npm or yarn package manager</li>
            <li>Git for version control</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Quick Start</h3>
          <div className="bg-black border border-white/10 rounded-xl p-6 my-4">
            <pre className="text-sm text-blue-200 font-mono whitespace-pre-wrap">
{`# Clone the repository
git clone https://github.com/your-org/skill-store.git

# Navigate to project
cd skill-store

# Install dependencies
npm install

# Start development server
npm run dev`}
            </pre>
          </div>
          <p className="text-zinc-400">
            The application will start at{' '}
            <a href="http://localhost:3000" className="text-blue-400 hover:underline">
              http://localhost:3000
            </a>
          </p>
        </section>

        {/* Architecture */}
        <section id="structure" className="border-b border-white/10 pb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Project Architecture</h2>
          <p className="text-zinc-300 mb-6">The project follows a standard Next.js App Router structure:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-mono mb-3">src/app/</h4>
              <ul className="space-y-2 text-sm text-zinc-400 font-mono">
                <li>• page.tsx - Landing Page</li>
                <li>• layout.tsx - Root Layout</li>
                <li>• docs/ - Documentation</li>
                <li>• api/ - Backend Routes</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-mono mb-3">src/components/</h4>
              <ul className="space-y-2 text-sm text-zinc-400 font-mono">
                <li>• landing/ - Hero, Showcase</li>
                <li>• layout/ - Header, Footer</li>
                <li>• docs/ - Documentation UI</li>
                <li>• ui/ - Reusable Components</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Particle Engine */}
        <section id="particles" className="border-b border-white/10 pb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Particle Engine</h2>
          <p className="text-zinc-300 mb-4">
            The &quot;Antigravity&quot; effect is powered by a custom HTML5 Canvas engine located in{' '}
            <code className="text-blue-400 bg-zinc-900 px-2 py-1 rounded">
              src/components/layout/ParticleBackground.tsx
            </code>
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">How It Works</h3>
          <ol className="list-decimal list-inside space-y-3 text-zinc-400">
            <li>
              <strong>Initialization:</strong> Creates 450 unique Particle objects with random positions and colors
            </li>
            <li>
              <strong>Animation Loop:</strong> Runs on requestAnimationFrame for 60fps
            </li>
            <li>
              <strong>Physics:</strong> Particles drift automatically and repel from mouse cursor
            </li>
          </ol>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Configuration</h3>
          <div className="bg-black border border-white/10 rounded-xl p-6 my-4">
            <pre className="text-sm text-blue-200 font-mono whitespace-pre-wrap">
{`// Adjust these constants in ParticleBackground.tsx

const particleCount = 450;      // Density
const magneticRadius = 150;     // Interaction range
const forceMultiplier = 15;     // Repulsion strength
const returnSpeed = 20;         // Recovery speed`}
            </pre>
          </div>
        </section>

        {/* Adding Skills */}
        <section id="adding-skills" className="border-b border-white/10 pb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Adding New Skills</h2>
          <p className="text-zinc-300 mb-4">
            Skills are defined as Markdown files in{' '}
            <code className="text-blue-400 bg-zinc-900 px-2 py-1 rounded">src/data/skills/</code>
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Step 1: Create Markdown File</h3>
          <div className="bg-black border border-white/10 rounded-xl p-6 my-4">
            <pre className="text-sm text-blue-200 font-mono whitespace-pre-wrap">
{`---
title: "My New Skill"
description: "Description here"
price: "$49"
tags: ["CSS", "React"]
icon: "Zap"
---

# Skill Rules

1. Rule one
2. Rule two`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Step 2: Auto-Detection</h3>
          <p className="text-zinc-400">
            The system automatically picks up the file via{' '}
            <code className="text-blue-400 bg-zinc-900 px-2 py-1 rounded">src/lib/skills.ts</code>
          </p>
        </section>

        {/* CLI Tool */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">CLI Tool Reference</h2>
          <p className="text-zinc-300 mb-4">
            The project includes a standalone CLI tool in the{' '}
            <code className="text-blue-400 bg-zinc-900 px-2 py-1 rounded">cli/</code> directory.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Testing Locally</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold border border-white/10 shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-white">Navigate to CLI directory</p>
                <code className="text-sm bg-black px-2 py-1 rounded text-zinc-400">cd cli/</code>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold border border-white/10 shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-white">Install dependencies</p>
                <code className="text-sm bg-black px-2 py-1 rounded text-zinc-400">npm install</code>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold border border-white/10 shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-white">Run install command</p>
                <code className="text-sm bg-black px-2 py-1 rounded text-zinc-400">
                  node index.js install ucam-design
                </code>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
            <h4 className="text-yellow-400 font-semibold mb-2">Mock Authentication</h4>
            <p className="text-sm text-zinc-300">
              When prompted for a token, enter{' '}
              <code className="text-yellow-400 bg-zinc-900 px-2 py-1 rounded">secret</code>{' '}
              to simulate a valid user.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
