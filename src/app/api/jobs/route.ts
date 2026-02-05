export const dynamic = 'force-dynamic'; // 加入這行
import { NextResponse } from 'next/server';
import { JOBS } from '@/data/mockJobs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q')?.toLowerCase();

    if (!q) {
        return NextResponse.json(JOBS);
    }

    const filteredJobs = JOBS.filter(job => {
        const matchesStack = job.stack.some(s => s.toLowerCase().includes(q));
        const matchesRole = job.role.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        return matchesStack || matchesRole || matchesCompany;
    });

    return NextResponse.json(filteredJobs);
}
