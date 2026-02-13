import Link from 'next/link';
import { Skill } from '@/types';
import { Palette, Type } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Link href={`/skill/${skill.slug}`} className="block group">
      <div className="border border-white/10 bg-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1">
        {/* Preview Area */}
        <div className="aspect-video bg-black relative flex items-center justify-center p-4">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
             {/* Color Palette Preview */}
             <div className="flex flex-col gap-2">
                <div className="text-xs text-white/50 uppercase tracking-widest flex items-center gap-1">
                  <Palette size={12} /> Palette
                </div>
                <div className="flex gap-1 h-8">
                  {skill.preview.colors.map((color) => (
                    <div
                      key={color}
                      className="h-full flex-1 first:rounded-l-md last:rounded-r-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
             </div>

             {/* Typography Preview */}
             <div className="flex flex-col gap-2">
                <div className="text-xs text-white/50 uppercase tracking-widest flex items-center gap-1">
                  <Type size={12} /> Type
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold text-white truncate" style={{ fontFamily: skill.preview.typography.headings }}>
                    Aa Big
                  </div>
                  <div className="text-sm text-white/70 truncate" style={{ fontFamily: skill.preview.typography.body }}>
                    The quick brown fox...
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              {skill.title}
            </h3>
            <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full border border-white/5">
              {skill.price}
            </span>
          </div>
          <p className="text-sm text-white/60 line-clamp-2">
            {skill.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-white/40">
            <span>By {skill.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
