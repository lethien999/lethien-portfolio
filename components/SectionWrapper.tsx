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
        <section id={id} className="py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary text-center mb-12">
                        {title}
                    </h2>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
