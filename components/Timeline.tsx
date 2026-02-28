'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
    phase: string;
    title: string;
    items: string[];
    status: 'current' | 'next' | 'future';
}

interface TimelineProps {
    data: TimelineItem[];
}

export default function Timeline({ data }: TimelineProps) {
    return (
        <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
                {data.map((item, index) => (
                    <motion.div
                        key={item.phase}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className="relative pl-12 md:pl-16"
                    >
                        <div
                            className={`absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${item.status === 'current'
                                    ? 'bg-accent border-accent shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                                    : item.status === 'next'
                                        ? 'bg-transparent border-accent'
                                        : 'bg-transparent border-text-muted'
                                }`}
                        />

                        <div>
                            <span
                                className={`text-xs font-mono uppercase tracking-widest ${item.status === 'current'
                                        ? 'text-accent'
                                        : 'text-text-muted'
                                    }`}
                            >
                                {item.phase}
                            </span>
                            <h3 className="text-lg font-semibold text-text-primary mt-1 mb-3">
                                {item.title}
                            </h3>
                            <ul className="space-y-1.5">
                                {item.items.map((point) => (
                                    <li
                                        key={point}
                                        className="text-sm text-text-secondary flex items-start gap-2"
                                    >
                                        <span className="text-accent mt-0.5 shrink-0">—</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
