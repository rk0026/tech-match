export interface Job {
    id: number;
    company: string;
    role: string;
    stack: string[];
    match: number;
    location: string;
    salary: string;
    description: string;
}

export const JOBS: Job[] = [
    {
        id: 1,
        company: "Orbital AI",
        role: "Senior Distributed Systems Engineer",
        stack: ["Rust", "Kubernetes", "gRPC"],
        match: 98,
        location: "Remote / Menlo Park",
        salary: "$180k - $250k",
        description: "Design and implement high-throughput, low-latency distributed systems using Rust."
    },
    {
        id: 2,
        company: "NeuralPulse",
        role: "Machine Learning Infrastructure Architect",
        stack: ["PyTorch", "CUDA", "C++"],
        match: 92,
        location: "Taipei, TW",
        salary: "$150k - $220k",
        description: "Scale large-scale model training infrastructure and optimize CUDA kernels."
    },
    {
        id: 3,
        company: "VaultShield",
        role: "Security Research Engineer (Blockchain)",
        stack: ["Solidity", "Go", "EVM"],
        match: 85,
        location: "Singapore",
        salary: "$130k - $200k",
        description: "Audit smart contracts and research zero-knowledge proofs for L2 scaling."
    },
    {
        id: 4,
        company: "DataMesh",
        role: "Backend Lead",
        stack: ["Go", "PostgreSQL", "Kafka"],
        match: 78,
        location: "Berlin, DE",
        salary: "€90k - €130k",
        description: "Build scalable event-driven architectures for real-time analytics."
    }
];
