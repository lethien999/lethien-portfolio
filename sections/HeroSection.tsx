'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
        >
            {/* Background gradient orbs */}
            <div className="bg-gradient-orb w-[600px] h-[600px] bg-purple-500/20 top-[-200px] left-[-200px]" />
            <div className="bg-gradient-orb w-[400px] h-[400px] bg-blue-500/20 bottom-[-100px] right-[-100px]" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern" />

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Open to Work
                        </span>
                    </motion.div>

                    {/* Main heading with gradient */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        <span className="text-text-primary">Hi, I&apos;m </span>
                        <span className="gradient-text">Thiện</span>
                    </h1>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 text-xl sm:text-2xl text-text-secondary font-light max-w-2xl"
                    >
                        Software Engineer building{' '}
                        <span className="text-purple-400">reliable</span> and{' '}
                        <span className="text-blue-400">scalable</span> systems
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-base text-text-muted"
                    >
                        Fullstack Developer → Backend → DevOps & Infrastructure
                    </motion.p>

                    {/* Tech highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 flex flex-wrap gap-3 justify-center"
                    >
                        {['React', 'Node.js', 'TypeScript', 'Docker', 'MongoDB'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 border border-zinc-700 text-text-secondary font-semibold text-sm rounded-lg hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Let&apos;s Talk
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
