import { NextResponse } from 'next/server';
import { MEMBERS, Member } from '@/data/mockMembers';

// Simulating in-memory database persistence for the server lifecycle
let members = [...MEMBERS];

export async function GET() {
    return NextResponse.json(members);
}

export async function POST(request: Request) {
    const body = await request.json();

    const newMember: Member = {
        id: Date.now(), // Simple ID generation
        name: body.name,
        role: body.role,
        email: body.email,
        status: "Active",
        joinedDate: new Date().toISOString().split('T')[0]
    };

    members.push(newMember);
    return NextResponse.json(newMember, { status: 201 });
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const idToDelete = body.id;

    members = members.filter(m => m.id !== idToDelete);

    return NextResponse.json({ success: true });
}
