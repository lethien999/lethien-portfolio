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
        <section id={id} className="section-shell py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
                <div className="ghost-title hidden lg:block">{title}</div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12 md:mb-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-4 editorial-label bg-white/10 border border-white/20 rounded-full"
                        >
                            <span className="w-1.5 h-1.5 bg-[#ff6a3d] rounded-full" />
                            {title}
                        </motion.div>
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mix-blend-difference tracking-tight">
                            {title}
                        </h2>
                    </div>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
