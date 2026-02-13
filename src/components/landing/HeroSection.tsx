'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Generate a futuristic dashboard for a crypto app using the Ucam Design System.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Sparkles size={14} />
            <span>Now compatible with Cursor & Windsurf</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Install a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Design Brain</span> into your AI Coding Tool.
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A structured design language that AI agents use to generate visually consistent, production-ready websites. Stop shipping generic AI code.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              href="#themes"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Install Theme <ArrowRight size={18} />
            </Link>
            <Link
              href="#showcase"
              className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              View Live Demo
            </Link>
          </div>
        </div>

        {/* Right: Animated Demo */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30" />
          <div className="relative bg-black border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Window Controls */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 text-xs text-white/40 font-mono">cursor — ai-agent-window</div>
            </div>

            {/* Chat Interface */}
            <div className="space-y-6 font-mono text-sm max-h-[400px] overflow-hidden">
               {/* User Message */}
               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <span className="text-xs">U</span>
                 </div>
                 <div className="space-y-2">
                    <div className="text-white/50 text-xs">User</div>
                    <div className="text-white">
                        {typedText}
                        <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse" />
                    </div>
                 </div>
               </div>

               {/* AI Response (Simulated) */}
               {typedText.length === fullText.length && (
                  <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center shrink-0">
                        <Terminal size={14} className="text-white" />
                    </div>
                    <div className="space-y-2 w-full">
                        <div className="text-blue-400 text-xs">AI Agent</div>
                        <div className="bg-white/5 border border-white/10 rounded p-4 text-green-400">
                            Reading Ucam Design System... <br/>
                            Processing Color Tokens... <br/>
                            Applying Orbitron Typography... <br/>
                            <span className="text-white/60">Generating Dashboard UI...</span>
                        </div>
                        {/* Preview Card Mockup */}
                        <div className="mt-4 border border-white/10 rounded-lg p-4 bg-slate-900/50">
                             <div className="flex justify-between items-center mb-4">
                                <div className="h-4 w-24 bg-white/10 rounded" />
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 rounded bg-red-600" />
                                    <div className="h-8 w-8 rounded-full bg-white/10" />
                                </div>
                             </div>
                             <div className="grid grid-cols-3 gap-4">
                                <div className="h-24 bg-white/5 rounded border border-white/5" />
                                <div className="h-24 bg-white/5 rounded border border-white/5" />
                                <div className="h-24 bg-white/5 rounded border border-white/5" />
                             </div>
                        </div>
                    </div>
                  </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
