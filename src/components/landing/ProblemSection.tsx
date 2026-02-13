import { AlertTriangle, ShieldCheck } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            AI Can Code. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">But It Can&apos;t Design.</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Without strict design tokens, AI models guess. And they usually guess wrong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* THE PROBLEM: Bad AI Design */}
          <div className="group relative rounded-3xl bg-[#f0f0f0] border-4 border-red-500/20 p-2 overflow-hidden hover:border-red-500/40 transition-colors">
            
            {/* Header Badge */}
            <div className="absolute top-6 left-6 z-10 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                <AlertTriangle size={14} className="fill-white" /> Typical AI Output
            </div>

            <div className="h-full bg-white rounded-2xl overflow-hidden text-black font-serif relative">
                {/* Simulated Browser Bar */}
                <div className="bg-gray-200 border-b border-gray-400 p-3 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-600" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600" />
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-600" />
                    <div className="ml-4 bg-white border border-gray-400 px-2 text-xs flex items-center w-2/3 text-gray-400">localhost:3000</div>
                </div>

                {/* Ugly Content */}
                <div className="p-8 font-serif">
                    <div className="flex justify-between items-center bg-blue-700 text-white p-4 mb-4">
                        <span className="text-xl font-bold">App Title</span>
                        <div className="space-x-4 underline text-sm">
                            <a href="#" className="text-yellow-300">Home</a>
                            <a href="#" className="text-white">About</a>
                        </div>
                    </div>

                    <h1 className="text-4xl text-black mb-2">Welcome User!</h1>
                    <p className="text-gray-600 text-lg mb-6">Enter your details below to continue.</p>

                    <div className="border-[3px] border-black p-6 bg-gray-100 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                        <label className="block font-bold mb-1">Email Address:</label>
                        <input type="text" className="border border-blue-500 w-full p-1 mb-4" placeholder="email@example.com" />
                        
                        <label className="block font-bold mb-1">Password:</label>
                        <input type="password" className="border border-blue-500 w-full p-1 mb-6" />

                        <button className="bg-green-500 text-red-900 font-bold text-xl px-8 py-2 rounded-full border-2 border-red-900 cursor-pointer hover:bg-green-400">
                            SUBMIT FORM
                        </button>
                    </div>

                    <div className="mt-8 text-center text-red-600 font-bold border border-red-600 p-2 bg-red-100">
                        Error: Session expired.
                    </div>
                </div>
                
                {/* Chaos Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/5 mix-blend-multiply" />
            </div>
          </div>

          {/* THE SOLUTION: Skill Store Theme */}
          <div className="group relative rounded-3xl bg-zinc-900 border-4 border-blue-500/20 p-2 overflow-hidden hover:border-blue-500/40 transition-colors shadow-2xl shadow-blue-900/20">
            
            {/* Header Badge */}
             <div className="absolute top-6 left-6 z-10 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                <ShieldCheck size={14} className="fill-white" /> Skill Store Theme
            </div>

            <div className="h-full bg-black rounded-2xl overflow-hidden font-sans relative flex flex-col">
                {/* Simulated Browser Bar */}
                <div className="bg-[#111] border-b border-white/5 p-3 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>

                {/* Beautiful Content */}
                <div className="p-8 flex-1 bg-[#050505] flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-8 text-center">
                            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl mx-auto mb-4 shadow-lg shadow-blue-500/20" />
                            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome back</h1>
                            <p className="text-zinc-500 text-sm">Please sign in to your dashboard.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-zinc-400 ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    placeholder="name@company.com" 
                                    value="alex@nexus.ai"
                                    readOnly
                                />
                            </div>
                            
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-zinc-400 ml-1">Password</label>
                                <input 
                                    type="password" 
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                                    value="••••••••••••"
                                    readOnly
                                />
                            </div>

                            <button className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 mt-4">
                                Sign In
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-px bg-white/5 flex-1" />
                            <span className="text-xs text-zinc-600 uppercase font-medium">Or continue with</span>
                            <div className="h-px bg-white/5 flex-1" />
                        </div>
                    </div>
                </div>

                {/* Glass Overlay Effect */}
                 <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
