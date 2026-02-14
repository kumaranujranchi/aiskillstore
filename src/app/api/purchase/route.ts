import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized: Please sign in to purchase.' }, { status: 401 });
  }

  try {
    const { skillSlug, skillTitle, amount } = await request.json();

    // 1. Check if already purchased
    const existing = await prisma.purchase.findFirst({
      where: {
        userId: session.user.id,
        skillSlug
      }
    });

    if (existing) {
      return NextResponse.json({ error: 'You have already purchased this theme.' }, { status: 400 });
    }

    // 2. Mock Payment Processing
    // In a real app, you'd use Stripe/Razorpay here
    const paymentId = `MOCK-PAY-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    // 3. Generate License Key
    // Format: PRO-XXXX-XXXX-XXXX
    const licenseKey = `PRO-${crypto.randomBytes(4).toString('hex').toUpperCase()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    // 4. Create Purchase Record
    const purchase = await prisma.purchase.create({
      data: {
        userId: session.user.id,
        skillSlug,
        skillTitle,
        amount,
        paymentId,
        licenseKey,
        status: 'succeeded'
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Purchase successful!',
      licenseKey: purchase.licenseKey
    });

  } catch (error) {
    console.error('Purchase error:', error);
    return NextResponse.json({ error: 'Failed to process purchase.' }, { status: 500 });
  }
}
