import Link from 'next/link';
import { ArrowRight, Type } from 'lucide-react';
import { getAllSkills } from '@/lib/skills';
import { Skill } from '@/types';

export async function ThemesMarketplace() {
  const skills: Skill[] = getAllSkills();

  return (
    <section id="themes" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Themes Marketplace</h2>
                <p className="text-xl text-white/50">Hand-crafted design systems for every use case.</p>
             </div>
             <Link href="/themes" className="text-white hover:text-blue-400 flex items-center gap-2 transition-colors">
                View All Themes <ArrowRight size={18} />
             </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
                <div key={skill.slug} className="group bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1">
                    {/* Preview Area */}
                    <div className="aspect-video bg-black relative p-6 flex flex-col justify-between">
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                         
                         <div className="relative z-10 flex gap-2">
                             {skill.preview?.colors?.map((color) => (
                                 <div key={color} className="w-8 h-8 rounded-full border border-white/10 shadow-lg" style={{ backgroundColor: color }} />
                             ))}
                         </div>
                         
                         <div className="relative z-10">
                            <div className="text-xs text-white/50 uppercase tracking-widest mb-1 flex items-center gap-1">
                                <Type size={10} /> Typography
                            </div>
                            <div className="text-sm font-medium text-white">
                              {skill.preview?.typography?.headings} / {skill.preview?.typography?.body}
                            </div>
                         </div>
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{skill.title}</h3>
                            <span className="bg-white/10 px-2 py-1 rounded text-xs font-medium text-white/80">{skill.price}</span>
                        </div>
                        <p className="text-sm text-white/60 mb-6 leading-relaxed h-10 line-clamp-2">
                            {skill.description}
                        </p>
                        <Link href={`/skill/${skill.slug}`} className="block w-full text-center bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
