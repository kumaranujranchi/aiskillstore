import { getSkillBySlug } from '@/lib/skills';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  // Mock Authentication Check
  const token = request.headers.get('Authorization');
  if (!token || !token.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const skill = getSkillBySlug(slug);

  if (!skill) {
    return NextResponse.json({ error: 'Skill not found' }, { status: 404 });
  }

  // Return the raw content for CLI consumption
  return NextResponse.json({
    slug: skill.slug,
    content: skill.content,
  });
}
