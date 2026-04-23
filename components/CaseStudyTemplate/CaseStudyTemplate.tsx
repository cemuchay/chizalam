'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CaseStudyProps } from '../../types/projects';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function CaseStudyTemplate({ data }: { data: CaseStudyProps }) {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 py-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* 1. Hero */}
                <motion.section {...fadeIn} className="mb-20">
                    <Link href="/projects" className="text-cyan-400 text-sm font-mono mb-8 inline-block hover:underline tracking-widest">
                        ← BACK TO PROJECTS
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">{data.title}</h1>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed">{data.subtitle}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-2xl bg-slate-900/50 border border-white/5 shadow-2xl">
                        <div>
                            <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">Role</h4>
                            <p className="text-white font-medium">{data.role}</p>
                        </div>
                        <div>
                            <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">Stack</h4>
                            <p className="text-white font-medium">{data.stack.join(', ')}</p>
                        </div>
                        <div>
                            <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">Focus</h4>
                            <p className="text-white font-medium">{data.focus.join(', ')}</p>
                        </div>
                    </div>
                </motion.section>

                {/* 2. Problem */}
                <motion.section {...fadeIn} className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="text-cyan-500 mr-4 font-mono text-lg">01</span> The Problem
                    </h2>
                    <div className="space-y-4 text-lg border-l-2 border-cyan-500/20 pl-6">
                        <p>{data.problem.overview}</p>
                        <p className="text-slate-400 italic">{data.problem.challenge}</p>
                    </div>
                </motion.section>

                {/* 3. Solution */}
                <motion.section {...fadeIn} className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="text-cyan-500 mr-4 font-mono text-lg">02</span> The Solution
                    </h2>
                    <p className="text-lg leading-relaxed">{data.solution}</p>
                </motion.section>

                {/* 4. Technical Implementation */}
                <motion.section {...fadeIn} className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="text-cyan-500 mr-4 font-mono text-lg">03</span> Implementation
                    </h2>
                    <div className="space-y-10">
                        <div className="p-6 bg-slate-900 rounded-xl border border-white/5">
                            <h3 className="text-white font-bold text-xl mb-4">{data.technicalImplementation.title}</h3>
                            {data.technicalImplementation.formula && (
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 my-6 flex justify-center items-center">
                                    <div className="text-cyan-400 text-xl md:text-2xl">
                                        <BlockMath math={data.technicalImplementation.formula}   errorColor="#ff0000"
 />
                                    </div>
                                </div>
                            )}
                            <p className="text-slate-400">{data.technicalImplementation.description}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {data.technicalImplementation.features.map((feat, i) => (
                                <div key={i} className="p-6 bg-slate-900/30 rounded-xl border border-white/5 border-t-cyan-500/30">
                                    <h4 className="text-white font-bold mb-2">{feat.title}</h4>
                                    <p className="text-sm text-slate-400">{feat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 5. Challenges */}
                <motion.section {...fadeIn} className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="text-cyan-500 mr-4 font-mono text-lg">04</span> Challenges
                    </h2>
                    <div className="grid gap-4">
                        {data.challenges.map((item, i) => (
                            <div key={i} className="p-6 rounded-xl bg-slate-900/20 border border-white/5 group hover:border-cyan-500/30 transition-all">
                                <div className="flex gap-4">
                                    <div className="text-red-400 font-mono text-sm shrink-0 mt-1">ERR_</div>
                                    <div>
                                        <p className="text-white font-medium mb-2">{item.issue}</p>
                                        <p className="text-slate-400 text-sm"><span className="text-cyan-500 font-mono">FIX: </span>{item.resolution}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 6 & 7. Impact & Improvements */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div {...fadeIn}>
                        <h2 className="text-xl font-bold text-white mb-4">Results & Impact</h2>
                        <p className="text-slate-400 leading-relaxed">{data.impact}</p>
                    </motion.div>
                    <motion.div {...fadeIn}>
                        <h2 className="text-xl font-bold text-white mb-4">What I&apos;d Improve</h2>
                        <ul className="space-y-2">
                            {data.improvements.map((imp, i) => (
                                <li key={i} className="flex items-center text-slate-400 text-sm">
                                    <span className="text-cyan-500 mr-2">→</span> {imp}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* 8. Links */}
                <motion.section {...fadeIn} className="flex flex-wrap gap-6 pt-10 border-t border-white/10">
                    <a href={data.demoLink} target="_blank" rel="noreferrer" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-transform hover:-translate-y-1">
                        Live Demo
                    </a>
                    <a href={data.repoLink} target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-transform hover:-translate-y-1">
                        Source Code
                    </a>
                </motion.section>

            </div>
        </main>
    );
}