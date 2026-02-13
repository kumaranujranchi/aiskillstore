import { Check } from 'lucide-react';
import Link from 'next/link';

export function PricingSection() {
  const tiers = [
    {
      name: "Core",
      price: "Free",
      description: "Essential themes for indie hackers.",
      features: [
        "Access to 3 Core Themes",
        "Community Support",
        "Basic Color Tokens",
        "Standard Typography"
      ],
      cta: "Install Now",
      pinned: false
    },
    {
      name: "Pro Pack",
      price: "$29",
      period: "/month",
      description: "Advanced design systems for serious builders.",
      features: [
        "Access to All 50+ Themes",
        "Priority Support",
        "Advanced Animation Tokens",
        "Figma Source Files",
        "Private NPM Registry"
      ],
      cta: "Start Free Trial",
      pinned: true
    },
    {
      name: "Agency",
      price: "$99",
      period: "/month",
      description: "Custom branding for client work.",
      features: [
        "Unlimited Projects",
        "White-label Themes",
        "Custom Domain Support",
        "Dedicated Success Manager",
        "SSO Integration"
      ],
      cta: "Contact Sales",
      pinned: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-white/50">Pay for the design, not the code.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
                <div 
                    key={tier.name} 
                    className={`relative p-8 rounded-2xl border ${
                        tier.pinned 
                            ? "bg-zinc-900/50 border-blue-500/50 shadow-2xl shadow-blue-500/10 z-10 scale-105" 
                            : "bg-black border-white/10"
                    }`}
                >
                    {tier.pinned && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Most Popular
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                        {tier.period && <span className="text-white/50">{tier.period}</span>}
                    </div>
                    <p className="text-sm text-white/50 mb-8">{tier.description}</p>

                    <ul className="space-y-4 mb-8">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                                <Check size={16} className={tier.pinned ? "text-blue-400" : "text-white/40"} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link 
                        href="#" 
                        className={`block w-full py-3 rounded-lg text-center font-bold transition-all ${
                            tier.pinned 
                                ? "bg-white text-black hover:bg-gray-200" 
                                : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                    >
                        {tier.cta}
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
