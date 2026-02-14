import { getSkillBySlug } from '@/lib/skills';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Authentication Check
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');
  const masterKey = process.env.SKILL_STORE_API_KEY;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized: License Key missing' }, { status: 401 });
  }

  // 1. Check for Master Key (Demo/Admin)
  let isAuthorized = masterKey && token === masterKey;

  // 2. Check for Real Purchase in DB
  if (!isAuthorized) {
    const purchase = await prisma.purchase.findUnique({
      where: { licenseKey: token }
    });

    // License exists and belongs to the requested skill
    if (purchase && purchase.skillSlug === slug && purchase.status === 'succeeded') {
      isAuthorized = true;
    }
  }

  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized: Invalid License Key for this theme' }, { status: 401 });
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
