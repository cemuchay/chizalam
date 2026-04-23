export interface CaseStudyProps {
  title: string;
  subtitle: string;
  role: string;
  stack: string[];
  focus: string[];
  problem: {
    overview: string;
    challenge: string;
  };
  solution: string;
  technicalImplementation: {
    title: string;
    formula?: string;
    description: string;
    features: { title: string; description: string }[];
  };
  challenges: { issue: string; resolution: string }[];
  impact: string;
  improvements: string[];
  demoLink: string;
  repoLink: string;
}