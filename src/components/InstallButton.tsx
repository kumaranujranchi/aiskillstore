'use client';

import { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';

interface InstallButtonProps {
  slug: string;
}

export function InstallButton({ slug }: InstallButtonProps) {
  const [copied, setCopied] = useState(false);
  const command = `npx @skillstore/cli install ${slug}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black/50 border border-white/10 rounded-lg p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 font-mono text-sm text-white/80">
        <Terminal size={16} className="text-white/40" />
        <span>{command}</span>
      </div>
      <button
        onClick={copyCommand}
        className="p-2 hover:bg-white/10 rounded-md transition-colors text-white/60 hover:text-white"
        title="Copy to clipboard"
      >
        {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
      </button>
    </div>
  );
}
