"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Job {
  id: number;
  company: string;
  role: string;
  stack: string[];
  match: number;
  location: string;
  salary: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJobs = async (search = "") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/jobs?q=${search}`);
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchJobs(query);
  };

  return (
    <div className="min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            TECH<span className="text-accent">MATCH</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 items-center">
            <Link href="/" className="hover:text-accent transition-colors">Jobs</Link>
            <Link href="#" className="hover:text-accent transition-colors">Stack Insights</Link>
            <Link href="#" className="hover:text-accent transition-colors">Developer Profile</Link>
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            <Link href="/admin" className="px-4 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-bold hover:bg-accent/20 transition-all">
              ADMIN PANEL
            </Link>
          </div>
          <Link href="/login" className="px-5 py-2 rounded-full border border-accent text-accent text-xs font-bold hover:bg-accent/10 transition-all">
            Login
          </Link>
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

          <form onSubmit={handleSearch} className="max-w-3xl mx-auto glass-card rounded-2xl p-2 flex items-center shadow-2xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Rust + Kubernetes + Distributed Systems"
              className="flex-1 bg-transparent border-none focus:ring-0 text-white px-6 py-4 placeholder:text-slate-600 outline-none"
            />
            <button type="submit" className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all">
              {loading ? "SEARCHING..." : "FIND IMPACT"}
            </button>
          </form>
        </div>

        {/* Job Board */}
        <section className="mt-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold">Top Engineered Matches</h2>
            <div className="text-xs text-slate-500">Showing {jobs.length} results</div>
          </div>

          <div className="grid gap-6">
            {!loading && jobs.map((job: Job) => (
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
                    {job.stack.map((tech: string) => (
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
            {loading && <div className="text-center py-10 text-slate-500">Loading infrastructure...</div>}
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5 text-slate-600 text-xs">
        &copy; 2026 TechMatch. Full-Stack Next.js Implementation.
      </footer>
    </div>
  );
}
