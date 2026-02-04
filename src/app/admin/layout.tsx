import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-950 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
                <div className="text-2xl font-bold tracking-tighter text-white mb-10">
                    TECH<span className="text-accent">ADMIN</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link href="/admin" className="block px-4 py-3 rounded-lg bg-accent/10 text-accent font-medium">
                        Member Management
                    </Link>
                    <div className="px-4 py-3 rounded-lg text-slate-500 cursor-not-allowed">
                        Job Postings (Soon)
                    </div>
                    <div className="px-4 py-3 rounded-lg text-slate-500 cursor-not-allowed">
                        Analytics (Soon)
                    </div>
                </nav>

                <Link href="/" className="mt-auto flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <span>← Back to Platform</span>
                </Link>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-auto">
                {children}
            </main>
        </div>
    );
}
