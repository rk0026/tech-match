"use client";

import { useState, useEffect } from "react";

interface Member {
    id: number;
    name: string;
    role: string;
    email: string;
    status: string;
    joinedDate: string;
}

export default function AdminMembers() {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: "", role: "", email: "" });

    const fetchMembers = async () => {
        const res = await fetch('/api/members');
        const data = await res.json();
        setMembers(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure?")) return;
        await fetch('/api/members', {
            method: 'DELETE',
            body: JSON.stringify({ id })
        });
        fetchMembers();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/members', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        setFormData({ name: "", role: "", email: "" });
        fetchMembers();
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Member Management</h1>
                <div className="text-sm text-slate-400">Total Members: {members.length}</div>
            </div>

            {/* Add Member Form */}
            <div className="glass-card p-6 rounded-xl">
                <h2 className="text-lg font-bold text-white mb-4">Add New Talent</h2>
                <form onSubmit={handleSubmit} className="flex gap-4 items-end">
                    <div className="flex-1 space-y-1">
                        <label className="text-xs text-slate-500">Full Name</label>
                        <input
                            required
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-accent outline-none"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="flex-1 space-y-1">
                        <label className="text-xs text-slate-500">Role</label>
                        <input
                            required
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-accent outline-none"
                            value={formData.role}
                            onChange={e => setFormData({ ...formData, role: e.target.value })}
                        />
                    </div>
                    <div className="flex-1 space-y-1">
                        <label className="text-xs text-slate-500">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-accent outline-none"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="bg-accent text-white px-6 py-2.5 rounded-lg font-bold hover:bg-cyan-600 transition-colors">
                        Add Member
                    </button>
                </form>
            </div>

            {/* Members Table */}
            <div className="glass-card rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-900/50 text-slate-400">
                        <tr>
                            <th className="p-4 font-medium">Name</th>
                            <th className="p-4 font-medium">Role</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium">Joined</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {members.map(member => (
                            <tr key={member.id} className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-4">
                                    <div className="font-bold text-white">{member.name}</div>
                                    <div className="text-xs text-slate-500">{member.email}</div>
                                </td>
                                <td className="p-4 text-slate-300">{member.role}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${member.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {member.status}
                                    </span>
                                </td>
                                <td className="p-4 text-slate-400 text-sm">{member.joinedDate}</td>
                                <td className="p-4 text-right">
                                    <button
                                        onClick={() => handleDelete(member.id)}
                                        className="text-red-400 hover:text-red-300 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {loading && <div className="p-8 text-center text-slate-500">Loading directory...</div>}
            </div>
        </div>
    );
}
