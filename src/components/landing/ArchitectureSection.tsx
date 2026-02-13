import { Palette, Type, Box, Zap } from 'lucide-react';

export function ArchitectureSection() {
  const architecture = [
    {
      icon: <Palette className="text-blue-400" />,
      title: "Design Tokens",
      features: ["Color Variables", "Spacing Units", "Radius Scale", "Shadow System"],
      gradient: "from-blue-500/10 to-blue-500/5"
    },
    {
      icon: <Type className="text-purple-400" />,
      title: "Typography Rules",
      features: ["Heading Hierarchy", "Font Pairing", "Responsive Scaling", "Line Heights"],
      gradient: "from-purple-500/10 to-purple-500/5"
    },
    {
      icon: <Box className="text-pink-400" />,
      title: "Component Guidelines",
      features: ["Button States", "Form Structures", "Cards & Modals", "Navigation Patterns"],
      gradient: "from-pink-500/10 to-pink-500/5"
    },
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Motion & Interaction",
      features: ["Transition Durations", "Hover Rules", "Animation Presets", "Micro-interactions"],
      gradient: "from-yellow-500/10 to-yellow-500/5"
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Theme Architecture</h2>
          <p className="text-xl text-white/50">Built for developers who care about details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecture.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all group`}>
              <div className="mb-6 bg-black/40 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
