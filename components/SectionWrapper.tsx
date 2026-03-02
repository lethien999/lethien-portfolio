'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
    id: string;
    title: string;
    children: ReactNode;
}

export default function SectionWrapper({
    id,
    title,
    children,
}: SectionWrapperProps) {
    return (
        <section id={id} className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-medium uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full"
                        >
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {title}
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                            <span className="gradient-text">{title}</span>
                        </h2>
                    </div>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
