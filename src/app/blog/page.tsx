export default function BlogPage() {
    const posts = [
        { title: "Best AI Coding Tools for 2026", date: "April 10, 2026" },
        { title: "How to Make Cursor Generate Better UI", date: "April 05, 2026" },
        { title: "Design Tokens for AI Agents", date: "March 28, 2026" },
    ];
  
    return (
      <main className="min-h-screen bg-black text-white p-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">Blog</h1>
          <div className="grid gap-8">
            {posts.map((post) => (
                <div key={post.title} className="p-8 border border-white/10 rounded-2xl hover:bg-zinc-900 transition-colors">
                    <span className="text-sm text-white/40 block mb-2">{post.date}</span>
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
