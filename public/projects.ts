const projects = [
   {
      id: 5,
      title: "Air Traffic Controller Simulator",
      description: `A real time air traffic control simulator designed to model aircraft movement and optimize routing within constrained airspace. Implemented pathfinding using Dijkstra’s algorithm to dynamically calculate the most efficient routes while avoiding conflicts between aircraft.
Built an interactive visualization layer to simulate live flight paths, enabling real time monitoring and decision making similar to real world ATC systems`,
      image: "/images/atc-simulator.webp",
      tags: ["React", "Vite", "Tailwind CSS"],
      liveLink: "https://atc-simulator.vercel.app/",
      githubLink: "https://github.com/cemuchay/atc-simulator",
      highlights: [
         `Implemented Dijkstra’s algorithm for route optimization`,
         `Real-time simulation of multiple aircraft states`,
         `Conflict detection and resolution logic`,
         `Interactive visualization of airspace and flight paths`,
      ],
      caseStudy:"/case-study/air-traffic-simulator"
   },
   {
      id: 6,
      title: "Frontend Load Balancer",
      description: `A TypeScript-based simulation of a frontend load balancing system that distributes traffic across multiple services while maintaining system stability under varying loads. Designed to model real-world load balancing strategies including failover handling and request distribution.

Integrated observability features to monitor system performance and simulate how modern distributed systems respond to traffic spikes and service degradation.`,
      image: "/images/frontend-load-balancer.webp",
      tags: ["React", "Vite", "Express", "Tailwind CSS"],
      liveLink: "https://frontend-load-balancer-backend.vercel.app/",
      githubLink: "https://github.com/cemuchay/frontend-load-balancer",
      highlights: [
         `Simulated load distribution strategies (e.g. round-robin or custom logic)`,
         `Implemented failover and resilience mechanisms`,
         `Built real-time monitoring/observability layer`,
         `Modeled traffic spikes and system behavior under stress`,
      ],
      caseStudy:"/case-study/load-balancer"
   },
   {
      id: 1,
      title: "Hospital Management Software",
      description: `A full-stack hospital management platform built to streamline patient data handling, staff coordination, and operational workflows. Designed with a focus on secure data access and modular architecture to support multiple hospital roles and use cases.

Implemented backend services and database structures to manage patient records, appointments, and administrative processes efficiently.`,
      image: "/images/hms.webp",
      tags: ["Next.js", "Tailwind CSS", "MongoDB"],
      liveLink: "N/A",
      highlights: [
         `Role-based access control for different hospital users
Scalable API design using Next.js backend capabilities
Structured data modeling with MongoDB
Focus on data integrity and workflow efficiency`,
      ],
      caseStudy:"",
   },
   {
      id: 4,
      title: "📊 Smart Dashboard Builder",
      description: `A dynamic dashboard builder that allows users to construct and customize data-driven interfaces using flexible rule-based configurations. Developed a custom query engine supporting conditional logic (AND/OR) to filter and visualize data in real time.

Focused on building a highly reusable and extensible system for generating dashboards without hardcoding layouts or logic.`,
      image: "/images/smart-dashboard-builder.webp",
      tags: ["TypeScript", "Next.js"],
      liveLink: "https://smart-dashboard-builder.vercel.app/",
      githubLink: "https://github.com/cemuchay/smart-dashboard-builder",
      highlights: [
         `Built a custom rule engine with AND/OR logic support
Dynamic UI generation based on user-defined configurations
Real-time data filtering and visualization
Modular and extensible component architecture`,
      ],
   },
   // {
   //    id: 2,
   //    title: "Sparkles In The Ruffles Movie",
   //    description:
   //       "A cinematic web experience for film promotion, featuring online ticket purchasing and media galleries.",
   //    image: "/images/sparkles-in-the-ruffles.webp",
   //    tags: ["Next.js", "Flutterwave", "Paypal", "Framer Motion", "Stripe"],
   //    liveLink: "https://sparkles-in-the-ruffles-movie-zeta.vercel.app/",
   // },
   {
      id: 3,
      title: "INEC Polling Unit Finder",
      description: `A civic-tech tool designed to help Nigerian voters quickly locate their polling units using structured search inputs. Built to simplify access to electoral information and improve voter readiness through a fast and intuitive interface.

Focused on optimizing search performance and ensuring accurate mapping between user queries and polling unit data.`,
      image: "/images/INEC-PU.webp",
      tags: ["TypeScript", "Next.js"],
      liveLink: "https://inec-polling-unit-finder.vercel.app/",
      githubLink:
         "https://github.com/cemuchay/inec-polling-unit-finder---NEXTJS-Typescript",
      highlights: [
         `Optimized search and filtering for large datasets
Designed for real-world usability and accessibility
Structured data handling for accurate results
Lightweight and responsive frontend experience`,
      ],
   },
];

export default projects;
