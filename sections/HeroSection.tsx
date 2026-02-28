'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
                        Lê Anh Thiện
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                        Software Engineering Student @ HUTECH
                    </p>
                    <div className="mt-6 flex items-center justify-center">
                        <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-sky-400 bg-sky-400/10 border border-sky-400/20 rounded-full">
                            Backend &amp; DevOps Oriented
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-sky-400 text-[#0b1120] font-semibold text-sm rounded-lg hover:bg-sky-300 transition-colors duration-200"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-slate-700 text-text-secondary font-semibold text-sm rounded-lg hover:border-sky-400/60 hover:text-sky-400 transition-colors duration-200"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
