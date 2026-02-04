import Image from "next/image";

const JOBS = [
  {
    id: 1,
    company: "Orbital AI",
    role: "Senior Distributed Systems Engineer",
    stack: ["Rust", "Kubernetes", "gRPC"],
    match: 98,
    location: "Remote / Menlo Park",
    salary: "$180k - $250k"
  },
  {
    id: 2,
    company: "NeuralPulse",
    role: "Machine Learning Infrastructure Architect",
    stack: ["PyTorch", "CUDA", "C++"],
    match: 92,
    location: "Taipei, TW",
    salary: "$150k - $220k"
  },
  {
    id: 3,
    company: "VaultShield",
    role: "Security Research Engineer (Blockchain)",
    stack: ["Solidity", "Go", "EVM"],
    match: 85,
    location: "Singapore",
    salary: "$130k - $200k"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -active">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            TECH<span className="text-accent">MATCH</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-accent transition-colors">Jobs</a>
            <a href="#" className="hover:text-accent transition-colors">Stack Insights</a>
            <a href="#" className="hover:text-accent transition-colors">Developer Profile</a>
          </div>
          <button className="px-5 py-2 rounded-full border border-accent text-accent text-xs font-bold hover:bg-accent/10 transition-all">
            Login
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
            Built for <span className="text-white italic underline decoration-accent underline-offset-8">Engineers</span>.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Ditch the keyword spam. Filter by tech stacks, code integrity, and architectural impact.
          </p>

          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-2 flex items-center shadow-2xl">
            <input 
              type="text" 
              placeholder="e.g. Rust + Kubernetes + Distributed Systems"
              className="flex-1 bg-transparent border-none focus:ring-0 text-white px-6 py-4 placeholder:text-slate-600"
            />
            <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all">
              FIND IMPACT
            </button>
          </div>
        </div>

        {/* Job Board */}
        <section className="mt-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold">Top Engineered Matches</h2>
            <div className="text-xs text-slate-500">Showing matches based on your tech stack</div>
          </div>

          <div className="grid gap-6">
            {JOBS.map((job) => (
              <div 
                key={job.id} 
                className="glass-card rounded-2xl p-6 glow-hover group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">{job.company}</span>
                    <span className="h-1 w-1 bg-slate-700 rounded-full" />
                    <span className="text-slate-500 text-xs">{job.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map(tech => (
                      <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-mono text-slate-300 uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Match Score</div>
                      <div className="text-xl font-mono text-accent">{job.match}%</div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-slate-800 flex items-center justify-center relative overflow-hidden">
                      <div 
                        className="absolute inset-x-0 bottom-0 bg-accent/20" 
                        style={{ height: `${job.match}%` }}
                      />
                      <div className="text-[10px] z-10 font-bold">{job.match}</div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{job.salary}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5 text-slate-600 text-xs">
         &copy; 2026 TechMatch. Developed with BMAD-Method. Glassmorphic UI Engineering.
      </footer>
    </div>
  );
}
