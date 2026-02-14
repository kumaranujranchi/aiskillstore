import { getSkillBySlug } from '@/lib/skills';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Authentication Check
  const token = request.headers.get('Authorization');
  const validKey = process.env.SKILL_STORE_API_KEY;

  // If no key is set on the server, we might want to fail open or closed. 
  // For security, let's fail closed and log an error.
  if (!validKey) {
    console.error("SKILL_STORE_API_KEY is not set in environment variables.");
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  if (!token || token !== `Bearer ${validKey}`) {
    return NextResponse.json({ error: 'Unauthorized: Invalid License Key' }, { status: 401 });
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
