import { Download, BookOpen, Wand2 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Download size={32} className="text-white" />,
      title: "1. Install Theme",
      description: "Add a robust design system to your AI coding tool with a single command.",
      code: "npx @skillstore/cli install ucam-design",
    },
    {
      icon: <BookOpen size={32} className="text-white" />,
      title: "2. Agent Reads Rules",
      description: "Your AI (Cursor/Windsurf) automatically loads the design tokens and component rules.",
      visual: (
        <div className="bg-black/50 p-3 rounded text-xs font-mono text-green-400 border border-white/10">
          Loaded: colors.json<br/>
          Loaded: typography.md<br/>
          Loaded: components.tsx
        </div>
      ),
    },
    {
      icon: <Wand2 size={32} className="text-white" />,
      title: "3. Generate Beautiful UI",
      description: "Every output now follows your design language automatically. No more guessing.",
      visual: (
        <div className="flex gap-2">
            <div className="h-8 w-8 rounded bg-blue-500 animate-pulse" />
            <div className="h-8 w-24 rounded bg-white/10" />
            <div className="h-8 w-12 rounded bg-white/10" />
        </div>
      )
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-white/50">Turn your AI into a Senior Frontend Engineer in 3 steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-sm font-bold text-white z-10">
                {index + 1}
              </div>

              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-colors pt-12 text-center flex flex-col items-center">
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    {step.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                 <p className="text-white/60 text-sm mb-6">{step.description}</p>
                 
                 <div className="mt-auto w-full">
                    {step.code ? (
                        <div className="bg-black p-3 rounded text-xs font-mono text-white/70 border border-white/10 truncate">
                            {step.code}
                        </div>
                    ) : (
                        step.visual
                    )}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
