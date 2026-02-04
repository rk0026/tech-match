"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register attempt", { name, email, password });
        // In a real app, you would call an auth API here
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-md p-8 relative z-10">
                <Link href="/login" className="inline-flex items-center text-slate-500 hover:text-white transition-colors mb-8 group">
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                    Return to Auth
                </Link>

                <div className="glass-card rounded-3xl p-8 shadow-2xl border border-white/5">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-extrabold tracking-tighter text-white mb-2">
                            JOIN <span className="text-accent">TECHMATCH</span>
                        </h1>
                        <p className="text-slate-400 text-sm">Initialize your developer profile today.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Full Legal String (Name)
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                                placeholder="Linus Torvalds"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Developer Identity (Email)
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                                placeholder="git@techmatch.io"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Secret Key (Password)
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                                placeholder="••••••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2 px-1">
                            <input type="checkbox" id="terms" required className="rounded border-white/10 bg-white/5 text-accent focus:ring-accent ring-offset-background" />
                            <label htmlFor="terms" className="text-[10px] text-slate-500 uppercase tracking-tighter">
                                I agree to the <span className="text-accent cursor-pointer">Deployment Protocols</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-accent/20"
                        >
                            DEPLOY ACCOUNT
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            Already initialized?{" "}
                            <Link href="/login" className="text-accent hover:underline font-bold">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
