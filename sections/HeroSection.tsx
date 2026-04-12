'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="section-shell min-h-screen flex items-center pt-24 md:pt-16 relative overflow-hidden"
        >
            <div className="split-overlay" />

            <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-6 inline-flex"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#f3e8d8] bg-[#121212]/70 border border-white/15 rounded-full tracking-widest uppercase">
                            <span className="w-2 h-2 bg-[#2a9d8f] rounded-full animate-pulse" />
                            Open to Work
                        </span>
                    </motion.div>

                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-[#121212]">
                        <span className="block">Hi, I&apos;m</span>
                        <span className="block gradient-text">Le Anh Thien</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-5 text-base sm:text-xl text-[#303035] max-w-xl leading-relaxed"
                    >
                        Software Engineer creating reliable digital products with a clear
                        backend and infrastructure mindset.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-sm font-mono uppercase tracking-[0.2em] text-[#45454f]"
                    >
                        Fullstack -&gt; Backend -&gt; DevOps
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        {['React', 'Node.js', 'TypeScript', 'Docker', 'MongoDB'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-xs font-semibold text-[#121212] bg-white/60 border border-black/15 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10 flex flex-wrap gap-3 sm:gap-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-[#121212] text-[#f7f2e8] font-semibold text-sm rounded-full hover:bg-[#ff6a3d] hover:text-[#121212] transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 border border-black/20 text-[#1a1a1d] font-semibold text-sm rounded-full hover:border-[#2a9d8f] hover:text-[#2a9d8f] transition-all duration-300"
                        >
                            Let&apos;s Talk
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[520px] flex items-center justify-center"
                >
                    <div className="absolute w-[320px] h-[320px] md:w-[390px] md:h-[390px] rounded-full border border-white/25 float-slow" />
                    <div className="absolute w-[230px] h-[230px] md:w-[280px] md:h-[280px] rounded-full border border-[#2a9d8f]/70 float-delay" />
                    <div className="frame-card p-8 md:p-10 text-[#f8f2e8] max-w-sm">
                        <p className="editorial-label mb-4">Short Intro</p>
                        <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">
                            Clean code.
                            <br />
                            Solid systems.
                        </h3>
                        <p className="text-sm text-[#d4d1cb] leading-relaxed">
                            I enjoy turning ideas into maintainable products through practical
                            architecture, thoughtful APIs, and shipping discipline.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
