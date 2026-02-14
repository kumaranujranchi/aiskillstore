import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Package, Key, ExternalLink } from 'lucide-react';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const purchases = await prisma.purchase.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 md:px-16 md:py-28 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Dashboard</h1>
            <p className="text-zinc-500 text-lg">Manage your purchased themes and license keys.</p>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
            {session.user.image && (
              <img src={session.user.image} className="w-10 h-10 rounded-full" alt={session.user.name || ''} />
            )}
            <div>
              <p className="text-sm font-bold">{session.user.name}</p>
              <p className="text-xs text-zinc-500">{session.user.email}</p>
            </div>
          </div>
        </div>

        {purchases.length === 0 ? (
          <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-16 text-center">
            <Package size={48} className="mx-auto text-zinc-700 mb-6" />
            <h2 className="text-2xl font-bold mb-4">No purchases yet</h2>
            <p className="text-zinc-500 mb-8 max-w-md mx-auto">You haven't purchased any premium themes yet. Explore our marketplace to find the perfect design system for your next project.</p>
            <Link href="/#themes" className="inline-flex px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
              Browse Themes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purchases.map((purchase) => (
              <div key={purchase.id} className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors uppercase tracking-tight">{purchase.skillTitle}</h3>
                    <p className="text-xs text-zinc-500 mt-1">Purchased on {new Date(purchase.createdAt).toLocaleDateString()}</p>
                  </div>
                  <Link href={`/skill/${purchase.skillSlug}`} className="text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </Link>
                </div>

                <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                    <Key size={10} /> PRO License Key
                  </div>
                  <code className="text-lg font-mono text-blue-400 select-all">{purchase.licenseKey}</code>
                </div>

                <div className="mt-6 flex justify-between items-center text-xs">
                  <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">Paid {purchase.amount}</span>
                  <span className="text-zinc-600">ID: {purchase.paymentId}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
