export interface Member {
    id: number;
    name: string;
    role: string;
    email: string;
    status: "Active" | "Inactive";
    joinedDate: string;
}

// Initial mock data
export let MEMBERS: Member[] = [
    {
        id: 1,
        name: "Alex Chen",
        role: "Full Stack Engineer",
        email: "alex.c@example.com",
        status: "Active",
        joinedDate: "2023-11-15"
    },
    {
        id: 2,
        name: "Sarah Jones",
        role: "DevOps Specialist",
        email: "sarah.j@example.com",
        status: "Active",
        joinedDate: "2024-01-20"
    },
    {
        id: 3,
        name: "Mike Wang",
        role: "Frontend Architect",
        email: "mike.w@example.com",
        status: "Inactive",
        joinedDate: "2023-08-05"
    }
];
