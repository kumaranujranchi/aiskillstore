import { getSkillBySlug, getAllSkills } from '@/lib/skills';
import { InstallButton } from '@/components/InstallButton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ThemeDemo } from '@/components/skill/ThemeDemo';
import { BuyButton } from '@/components/skill/BuyButton';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



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

  const session = await getServerSession(authOptions);
  const purchase = session ? await prisma.purchase.findFirst({
    where: { userId: session.user.id, skillSlug: slug }
  }) : null;

  const isFree = skill.price.toLowerCase() === 'free';
  const showBuy = !isFree && !purchase;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 md:px-16 md:py-28 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{skill.title}</h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">{skill.description}</p>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {showBuy ? 'Unlock this theme' : 'Installation'}
              </p>

              {showBuy ? (
                <BuyButton skillSlug={skill.slug} skillTitle={skill.title} price={skill.price} />
              ) : (
                <div className="space-y-4">
                  <InstallButton slug={skill.slug} />
                  {purchase && (
                    <div className="p-4 bg-zinc-900 border border-white/5 rounded-lg flex flex-col gap-1">
                      <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Your License Key</span>
                      <code className="text-blue-400 font-mono text-sm">{purchase.licenseKey}</code>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-8 mt-12 border-t border-white/10 pt-8">

              <div>
                <p className="text-sm text-zinc-500 mb-1">Price</p>
                <p className="text-lg font-semibold">{skill.price}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Author</p>
                <p className="text-lg font-semibold">{skill.author}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Version</p>
                <p className="text-lg font-semibold">1.0.0</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-semibold mb-4">What is included?</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Complete color palette
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Typography system
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Button & Input styles
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Shadows & Effects
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ThemeDemo skill={skill} />


      </div>
    </main>
  );
}
