import { getSkillBySlug, getAllSkills } from '@/lib/skills';
import { InstallButton } from '@/components/InstallButton';
import Link from 'next/link';
import { ArrowLeft, Palette, Type } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const skills = getAllSkills();
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16">
      <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Preview */}
        <div className="space-y-8">
            <div className="aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 relative p-8 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-8 w-full h-full">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-white/50 uppercase tracking-widest">
                            <Palette size={14} /> Color Palette
                        </div>
                         <div className="space-y-2">
                            {skill.preview.colors.map(color => (
                                <div key={color} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded shadow-lg border border-white/10" style={{ backgroundColor: color }}></div>
                                    <span className="font-mono text-sm text-white/70">{color}</span>
                                </div>
                            ))}
                         </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-white/50 uppercase tracking-widest">
                            <Type size={14} /> Typography
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs text-white/40 mb-1">Headings</div>
                                <div className="text-2xl font-bold" style={{ fontFamily: skill.preview.typography.headings }}>
                                    {skill.preview.typography.headings}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-white/40 mb-1">Body</div>
                                <div className="text-lg" style={{ fontFamily: skill.preview.typography.body }}>
                                    {skill.preview.typography.body}
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-lg font-bold mb-4">Installation</h3>
                <p className="text-white/60 text-sm mb-4">
                    Install this skill to your AI assistant to generate code matching this design system.
                </p>
                <InstallButton slug={skill.slug} />
            </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
            <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30 mb-4">
                    {skill.price}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{skill.title}</h1>
                <p className="text-xl text-white/70 leading-relaxed">
                    {skill.description}
                </p>
            </div>

            <div className="pt-8 border-t border-white/10">
                <h3 className="text-white/50 uppercase tracking-widest text-sm mb-4">Usage Instructions</h3>
                <div className="prose prose-invert prose-sm max-w-none text-white/80">
                    <p>
                        Once installed, you can ask your AI assistant (Cursor, Windsurf, etc.):
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-white/5 rounded-r italic my-4">
                        &quot;Generate a landing page using the <strong>{skill.title}</strong>.&quot;
                    </blockquote>
                    <p>
                        The AI will automatically access the design tokens for colors, typography, component styles, and animations defined in this skill.
                    </p>
                </div>
            </div>

             <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                     <div className="text-xs text-white/40 mb-1">Author</div>
                     <div className="font-medium">{skill.author}</div>
                </div>
             </div>
        </div>
      </div>
    </main>
  );
}
