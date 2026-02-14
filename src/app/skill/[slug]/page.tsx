import { getSkillBySlug, getAllSkills } from '@/lib/skills';
import { InstallButton } from '@/components/InstallButton';
import Link from 'next/link';
import { ArrowLeft, Palette, Type } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ThemeDemo } from '@/components/skill/ThemeDemo';

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
    <main className="min-h-screen bg-black text-white px-6 py-24 md:px-16 md:py-28">
      {/* ... existing content ... */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* ... Left and Right columns ... */}
      </div>

      {/* Live Preview Section */}
      <ThemeDemo skill={skill} />
    </main>
  );
}
