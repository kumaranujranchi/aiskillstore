'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Loader2, Lock } from 'lucide-react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface BuyButtonProps {
  skillSlug: string;
  skillTitle: string;
  price: string;
}

export function BuyButton({ skillSlug, skillTitle, price }: BuyButtonProps) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Convert price string (e.g. "$49") to number
  const amount = parseFloat(price.replace(/[^0-9.]/g, '')) || 0;

  const handlePurchase = async () => {
    if (!session) {
      signIn('google');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skillSlug, skillTitle, amount }),
      });

      const data = await response.json();

      if (response.ok) {
        setPurchased(true);
        // Refresh to show updated UI if needed, or redirect
        setTimeout(() => router.push('/dashboard'), 2000);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  if (purchased) {
    return (
      <div className="flex flex-col gap-2">
        <button disabled className="w-full bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
          <Check size={20} /> Purchased Successfully!
        </button>
        <p className="text-xs text-green-400 text-center">Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm text-center">
          {error}
        </div>
      )}

      <button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl shadow-white/5 disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : !session ? (
          <><Lock size={18} /> Login to Buy</>
        ) : (
          <><ShoppingCart size={18} /> Buy Now for {price}</>
        )}
      </button>

      <p className="text-zinc-500 text-xs text-center">
        Secure mock payment. One-time purchase for lifetime access.
      </p>
    </div>
  );
}
