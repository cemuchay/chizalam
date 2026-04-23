import CaseStudyTemplate from '../../components/CaseStudyTemplate/CaseStudyTemplate';
import { CaseStudyProps } from '../../types/projects';

const loadBalancerCaseStudy: CaseStudyProps = {
    title: "Frontend Load Balancer Simulator",

    subtitle:
        "A TypeScript-based system that simulates load distribution, failover handling, and real-time observability in distributed frontend architectures.",

    role: "Full-Stack Developer",

    stack: ["React", "TypeScript", "Node.js", "Express", "Tailwind"],

    focus: ["System Design", "Resilience", "Observability"],

    problem: {
        overview:
            "Modern applications rely on distributing traffic across multiple services to maintain performance and reliability. However, understanding how load balancers behave under different conditions is often abstract and difficult to visualize.",

        challenge:
            "The core challenge was simulating real-world traffic distribution, handling service failures gracefully, and maintaining system stability under dynamic load conditions."
    },

    solution:
        "I built a frontend-driven load balancer simulation that models how requests are distributed across multiple services. The system dynamically routes traffic, detects service failures, and redistributes load in real time while exposing system metrics through an observability layer.",

    technicalImplementation: {
        title: "Dynamic Load Distribution Engine",

        formula: "R_{i} = \\frac{C_{i}}{\\sum_{j=1}^{n} C_{j}}",

        description:
            "Designed a request distribution engine that assigns incoming traffic to services based on load balancing strategies. Each service maintains a dynamic load state, allowing the system to make informed routing decisions and simulate real-world balancing behavior.",

        features: [
            {
                title: "Load Distribution Strategies",
                description:
                    "Implemented traffic routing strategies such as round-robin and adaptive distribution based on current service load."
            },
            {
                title: "Failover Handling",
                description:
                    "Built logic to detect service downtime and automatically reroute traffic to healthy instances without disrupting the system."
            },
            {
                title: "Real-Time Observability",
                description:
                    "Developed a monitoring layer to visualize request flow, service health, and load distribution in real time."
            },
            {
                title: "Traffic Simulation Engine",
                description:
                    "Simulated varying traffic patterns, including spikes, to test system resilience under stress conditions."
            }
        ]
    },

    challenges: [
        {
            issue:
                "Ensuring consistent state updates while multiple services receive traffic simultaneously",
            resolution:
                "Centralized load state management and controlled update cycles to prevent race conditions and inconsistent routing decisions"
        },
        {
            issue:
                "Handling service failures without breaking the flow of requests",
            resolution:
                "Implemented failover logic that dynamically excludes unhealthy services and redistributes traffic in real time"
        },
        {
            issue:
                "Visualizing system behavior without impacting performance",
            resolution:
                "Optimized rendering by decoupling simulation logic from UI updates and minimizing unnecessary re-renders"
        }
    ],

    impact:
        "This project demonstrates a practical understanding of how distributed systems manage traffic, maintain availability, and recover from failure. It provides a visual and interactive way to explore core system design concepts such as load balancing, resilience, and observability.",

    improvements: [
        "Introduce weighted load balancing for more realistic traffic distribution",
        "Implement advanced strategies like least connections or IP hashing",
        "Add latency simulation between services",
        "Scale simulation to support a larger number of services",
        "Persist metrics for historical analysis and replay"
    ],

    demoLink: "https://frontend-load-balancer-backend.vercel.app/",
    repoLink: "https://github.com/cemuchay/frontend-load-balancer"
};

export default function Page() {
    return <CaseStudyTemplate data={loadBalancerCaseStudy} />;
}