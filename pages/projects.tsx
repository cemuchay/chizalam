import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import projects from '../public/projects'; 
import ProjectImage from '../components/ProjectImage/ProjectImage';

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            My <span className="text-cyan-400">Works.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl leading-relaxed"
          >
            A collection of digital products I&apos;ve built, ranging from healthcare platforms 
            to utility web applications and cinematic experiences.
          </motion.p>
        </header>

        {/* Projects List - One Per Row */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => {
            const isPrivate = project.liveLink === 'N/A';
            const isReversed = index % 2 !== 0;

           return (
  <motion.section
    key={project.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`flex flex-col lg:items-center gap-12 ${
      isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}
  >
    {/* Visual Side */}
    <div className="w-full lg:w-3/5 group">
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-white/5 group-hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl">
        {project.image ? (
          <ProjectImage src={project.image} alt={project.title} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm uppercase tracking-widest bg-slate-900">
            Proprietary System
          </div>
        )}
      </div>
    </div>

    {/* Content Side */}
    <div className="w-full lg:w-2/5 space-y-6">
      <div className="space-y-3">
        <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase block">
          Featured Project
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {project.title}
        </h3>
      </div>

      <p className="text-slate-400 text-lg leading-relaxed">
        {project.description}
      </p>

      {/* Key Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <ul className="space-y-2 py-2">
          {project.highlights.map((highlight: string, idx: number) => (
            <li key={idx} className="flex items-start text-sm text-slate-300">
              <span className="text-cyan-500 mr-3 mt-1">▹</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags?.map((tag: string) => (
          <span key={tag} className="px-3 py-1 text-[11px] font-bold bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-6 pt-4">
        {isPrivate ? (
          <span className="flex items-center text-sm font-semibold text-slate-500 uppercase tracking-widest cursor-not-allowed">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Private Source
          </span>
        ) : (
          <>
            <Link href={project.liveLink} passHref legacyBehavior>
              <a target="_blank" rel="noreferrer" className="group/link flex items-center text-white font-bold text-lg hover:text-cyan-400 transition-colors">
                Live Demo
                <span className="ml-2 transition-transform group-hover/link:translate-x-2">→</span>
              </a>
            </Link>
            
            {project.githubLink && (
              <Link href={project.githubLink} passHref legacyBehavior>
                <a target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white font-medium transition-colors">
                  Source Code ↗
                </a>
              </Link>
            )}
          </>
        )}

        {/* Case Study Link */}
        {project.caseStudy && (
          <Link href={project.caseStudy} passHref legacyBehavior>
            <a className="text-cyan-400/80 hover:text-cyan-400 text-sm font-semibold uppercase tracking-wider underline underline-offset-8 decoration-cyan-500/30 hover:decoration-cyan-500 transition-all">
              View Case Study
            </a>
          </Link>
        )}
      </div>
    </div>
  </motion.section>
);
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;