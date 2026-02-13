'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Code, Terminal, Layers, Star } from 'lucide-react';

const docsNav = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/docs', icon: Book },
      { name: 'Installation', href: '/docs#installation', icon: Terminal },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { name: 'Project Structure', href: '/docs#structure', icon: Layers },
      { name: 'Particle System', href: '/docs#particles', icon: Star },
      { name: 'Showcase Component', href: '/docs#showcase', icon: Code },
    ],
  },
  {
    title: 'Guides',
    items: [
      { name: 'Customization', href: '/docs#customization', icon: Layers },
      { name: 'Adding Skills', href: '/docs#adding-skills', icon: Code },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r border-white/10 h-[calc(100vh-80px)] sticky top-20 hidden md:block overflow-y-auto bg-black/50 backdrop-blur-xl">
      <div className="p-6 space-y-8">
        {docsNav.map((section) => (
          <div key={section.title}>
            <h5 className="mb-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {section.title}
            </h5>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={16} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
