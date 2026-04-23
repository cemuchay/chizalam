import { motion } from 'framer-motion';
import ProjectImage from '../ProjectImage/ProjectImage';
import Link from 'next/link';


interface Project {
  title: string;
  description: string;
  liveLink: string;
  githubLink?: string; // Optional GitHub link
  tags?: string[];
  image?: string;
  caseStudy?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isPrivate = project.liveLink === 'N/A';
  const hasGithub = project.githubLink && project.githubLink !== 'N/A';
  const hasCaseStudy = project.caseStudy

  return (
    <motion.div
      whileHover={!isPrivate ? { y: -8 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group flex flex-col h-full bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
    >
      {/* Project Preview Area */}
      <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
        {project.image ? (
          <ProjectImage src={project.image} alt={project.title} />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <span className="text-slate-600 text-xs font-mono uppercase tracking-widest">No Preview</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags?.map((tag) => (
            <span key={tag} className="px-2 py-1 text-[10px] font-medium bg-white/5 text-slate-300 rounded-md border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-6">
          {isPrivate ? (
            <div className="inline-flex items-center text-xs font-medium text-slate-500 uppercase tracking-wider">
              <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Private Architecture
            </div>
          ) : (
            <>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                Live Demo <span className="text-cyan-400 ml-1">→</span>
              </a>

              {hasGithub && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  Source <span className="ml-1 opacity-50 group-hover:opacity-100">↗</span>
                </a>
              )}


              {hasCaseStudy && (
                <Link href={project.caseStudy as string} passHref legacyBehavior>
                  <a
                    className="text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center"
                  >
                    Case Sudy <span className="ml-1 opacity-50 group-hover:opacity-100">↗</span>
                  </a>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;