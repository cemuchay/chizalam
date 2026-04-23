import CaseStudyTemplate from '../../components/CaseStudyTemplate/CaseStudyTemplate';
import { CaseStudyProps } from '../../types/projects';

const atcData: CaseStudyProps = {
    title: "Air Traffic Controller Simulator",
    subtitle: "A real-time system for simulating aircraft movement and optimizing routing.",
    role: "Full-Stack Developer",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    focus: ["Algorithms", "Simulation", "Visualization"],
    problem: {
        overview: "Managing multiple aircraft within constrained airspace while ensuring safe distances.",
        challenge: "Dynamically computing optimal paths while avoiding conflicts in real time."
    },
    solution: "A real-time simulation system that models aircraft movement and uses graph-based pathfinding to compute optimal routes.",
    technicalImplementation: {
        title: "Pathfinding Algorithm",
        formula: "d(u,v) = \\min_{p \\in P_{u,v}} \\sum_{e \\in p} w(e)",
        description: "Implemented Dijkstra’s approach to determine the most efficient route between waypoints.",
        features: [
            { title: "Simulation Engine", description: "Time-based loop updating positions at regular intervals." },
            { title: "Conflict Detection", description: "Logic to detect unsafe proximity and trigger recalculations." }
        ]
    },
    challenges: [
        { issue: "Simultaneous updates breaking state", resolution: "Batching updates in a structured simulation loop." }
    ],
    impact: "Demonstrates how real-time systems combine algorithms and visualization for complex coordination.",
    improvements: ["Introduce A* algorithm", "Add predictive collision avoidance"],
    demoLink: "https://atc-simulator.vercel.app/",
    repoLink: "https://github.com/cemuchay/atc-simulator"
};

export default function Page() {
    return <CaseStudyTemplate data={atcData} />;
}