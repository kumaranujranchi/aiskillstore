'use client';

import { useState } from 'react';
import { MousePointer2, ChevronRight, LayoutDashboard, Settings, User, Bell } from 'lucide-react';

export function ShowcaseSection() {
  const [position, setPosition] = useState(50);

  return (
    <section id="showcase" className="py-24 px-6 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">See the Difference</h2>
          <p className="text-xl text-white/50">One prompt. Two very different results.</p>
        </div>

        {/* Comparison Slider */}
        <div 
          className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-ew-resize select-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
            setPosition((x / rect.width) * 100);
          }}
          onTouchMove={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
             setPosition((x / rect.width) * 100);
          }}
        >
            {/* "With Theme" Image (Skill Store Theme) - Background */}
            <div className="absolute inset-0 bg-[#050505] flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-[240px_1fr] overflow-hidden">
                    {/* Sidebar */}
                    <div className="bg-[#0A0A0A] border-r border-white/5 p-6 flex flex-col gap-6">
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20" />
                            <div className="font-bold text-white tracking-tight">NexusAI</div>
                        </div>
                        <div className="space-y-1">
                            {[
                                { icon: LayoutDashboard, label: 'Overview', active: true },
                                { icon: Bell, label: 'Notifications', active: false },
                                { icon: User, label: 'Customers', active: false },
                                { icon: Settings, label: 'Settings', active: false }
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? 'bg-blue-500/10 text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                    <item.icon size={18} />
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-8 bg-[#050505]">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
                                <p className="text-zinc-500 text-sm">Welcome back, Admin</p>
                            </div>
                            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition-colors">
                                Export Data <ChevronRight size={14} />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {[
                                { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up' },
                                { title: 'Active Users', value: '+2350', change: '+180.1%', trend: 'up' },
                                { title: 'Sales', value: '+12,234', change: '-4.5%', trend: 'down' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                                    <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">{stat.title}</div>
                                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>{stat.change} from last month</div>
                                </div>
                            ))}
                        </div>

                         <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 h-full">
                            <div className="h-4 w-32 bg-zinc-800/50 rounded mb-6" />
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-zinc-900" />
                                            <div>
                                                <div className="h-3 w-24 bg-zinc-800 rounded mb-1.5" />
                                                <div className="h-2 w-16 bg-zinc-900 rounded" />
                                            </div>
                                        </div>
                                        <div className="h-3 w-12 bg-zinc-900 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-6 right-6 bg-blue-600/20 border border-blue-500/30 text-blue-400 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 animate-in fade-in zoom-in duration-500">
                             ✨ With Theme
                        </div>
                    </div>
                </div>
            </div>

            {/* "Before" Image (Standard AI) */ }
            <div 
                className="absolute inset-0 bg-white flex items-center justify-center border-r-[3px] border-white z-20"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                 <div className="w-full h-full bg-[#f0f2f5] p-8 grid grid-cols-[200px_1fr] gap-0 font-serif text-black">
                     {/* Ugly Sidebar */}
                     <div className="bg-gray-300 p-4 flex flex-col gap-4 border-r border-gray-400">
                         <div className="text-xl font-bold bg-blue-200 p-2 text-center text-blue-800">LOGO</div>
                         <div className="space-y-2">
                             <div className="bg-white p-2 border border-black cursor-pointer">Home</div>
                             <div className="bg-white p-2 border border-black cursor-pointer">About</div>
                             <div className="bg-white p-2 border border-black cursor-pointer">Contact</div>
                         </div>
                     </div>

                     {/* Main Content */}
                     <div className="p-8 block">
                         <h1 className="text-4xl text-blue-700 underline mb-4">Dashboard Page</h1>
                         <button className="bg-green-500 text-white p-2 rounded-none border border-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                             Download Report
                         </button>

                         <div className="flex gap-4 mb-8">
                             <div className="bg-white border-2 border-gray-400 p-4 w-1/3">
                                 <h3 className="text-lg font-bold">Stat 1</h3>
                                 <p className="text-3xl text-gray-600">1000</p>
                             </div>
                             <div className="bg-white border-2 border-gray-400 p-4 w-1/3">
                                 <h3 className="text-lg font-bold">Stat 2</h3>
                                 <p className="text-3xl text-gray-600">500</p>
                             </div>
                             <div className="bg-white border-2 border-gray-400 p-4 w-1/3">
                                 <h3 className="text-lg font-bold">Stat 3</h3>
                                 <p className="text-3xl text-gray-600">100</p>
                             </div>
                         </div>

                         <div className="bg-white border border-black p-4">
                             <h3 className="text-xl mb-4">User List</h3>
                             <ul className="list-disc pl-5 space-y-2">
                                 <li>User 1 - active</li>
                                 <li>User 2 - inactive</li>
                                 <li>User 3 - active</li>
                             </ul>
                         </div>
                     </div>
                      <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-30">
                        ❌ Without Theme
                    </div>
                 </div>
            </div>

            {/* Handle */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
                style={{ left: `${position}%` }}
            >
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-black">
                    <MousePointer2 size={16} className="rotate-90" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
