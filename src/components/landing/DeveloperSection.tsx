'use client';

import { Copy, Check, Terminal } from 'lucide-react';
import { useState } from 'react';

export function DeveloperSection() {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install @skillstore/cli -g";

  const copyCmd = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Terminal size={14} />
            <span>Developer First</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Control. <br/>
            <span className="text-white/50">Zero Magic.</span>
          </h2>
          <p className="text-xl text-white/50 mb-8 leading-relaxed">
            Our themes aren&apos;t just CSS files. They are structured JSON schemas that define every aspect of your design system, fully type-safe and version controlled.
          </p>

          <div className="space-y-6">
             <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">1</div>
                <div>
                    <h4 className="font-bold text-white">CLI Automation</h4>
                    <p className="text-sm text-white/60">Install themes directly into your project workflow.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-1">2</div>
                <div>
                    <h4 className="font-bold text-white">JSON Architecture</h4>
                    <p className="text-sm text-white/60">Extend or override any token using standard JSON patches.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-1">3</div>
                <div>
                    <h4 className="font-bold text-white">Git Integration</h4>
                    <p className="text-sm text-white/60">Commit your design system as code. Rollback anytime.</p>
                </div>
             </div>
          </div>

          <div className="mt-10">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-4 flex items-center justify-between group hover:border-white/30 transition-colors">
                <code className="font-mono text-sm text-green-400">
                    &gt; {installCmd}
                </code>
                <button 
                    onClick={copyCmd}
                    className="text-white/40 hover:text-white transition-colors"
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
            </div>
            <p className="text-xs text-white/30 mt-2">Requires Node.js 18+</p>
          </div>
        </div>

        {/* Right: Code Block */}
        <div className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                <div className="ml-2 text-xs text-white/30">theme.json</div>
            </div>
            <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                    <span className="text-purple-400">{"{"}</span><br/>
                    &nbsp;&nbsp;<span className="text-yellow-400">"name"</span>: <span className="text-green-400">"ucam-design"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-yellow-400">"version"</span>: <span className="text-blue-400">2.1.0</span>,<br/>
                    &nbsp;&nbsp;<span className="text-yellow-400">"tokens"</span>: <span className="text-purple-400">{"{"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"colors"</span>: <span className="text-purple-400">{"{"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"primary"</span>: <span className="text-green-400">"#ED1D24"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"surface"</span>: <span className="text-green-400">"#000000"</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"}"}</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"typography"</span>: <span className="text-purple-400">{"{"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"h1"</span>: <span className="text-green-400">"Orbitron, 700"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"body"</span>: <span className="text-green-400">"Public Sans, 400"</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">{"}"}</span><br/>
                    &nbsp;&nbsp;<span className="text-purple-400">{"}"}</span>,<br/>
                    &nbsp;&nbsp;<span className="text-yellow-400">"components"</span>: <span className="text-purple-400">{"["}</span>...<span className="text-purple-400">{"]"}</span><br/>
                    <span className="text-purple-400">{"}"}</span>
                </pre>
            </div>
        </div>

      </div>
    </section>
  );
}
