import Link from 'next/link';
import { Github, Twitter, Disc, Book, Code, Box } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">AI</span>
            </div>
            <span className="text-white">Skill Store</span>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed">
            The design brain for your AI coding agents. Install themes, generate beautiful UI, and stop shipping generic code.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-bold text-white mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="#themes" className="hover:text-white transition-colors">Browse Themes</Link></li>
            <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h4 className="font-bold text-white mb-6">Developers</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="/docs" className="hover:text-white transition-colors flex items-center gap-2"><Book size={14} /> Documentation</Link></li>
            <li><Link href="/docs/api" className="hover:text-white transition-colors flex items-center gap-2"><Code size={14} /> API Reference</Link></li>
            <li><Link href="/docs/cli" className="hover:text-white transition-colors flex items-center gap-2"><Box size={14} /> CLI Tool</Link></li>
            <li><Link href="https://github.com" className="hover:text-white transition-colors flex items-center gap-2"><Github size={14} /> Open Source</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-bold text-white mb-6">Community</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="https://twitter.com" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter</Link></li>
            <li><Link href="https://discord.com" className="hover:text-white transition-colors flex items-center gap-2"><Disc size={14} /> Discord</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>&copy; 2026 AI Skill Store. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
