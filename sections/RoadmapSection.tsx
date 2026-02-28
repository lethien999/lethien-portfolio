'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';

const roadmapData = [
    {
        phase: 'Current',
        title: 'Fullstack Foundation',
        status: 'current' as const,
        items: [
            'Xây dựng ứng dụng end-to-end (React + Node.js + MongoDB)',
            'Hiểu client–server architecture & RESTful API design',
            'Real-time communication với Socket.IO',
            'Testing strategy: Postman, unit test, API automation',
        ],
        highlight: 'Desktop App · Web App · Real-time System',
    },
    {
        phase: 'Next',
        title: 'Backend Specialization',
        status: 'next' as const,
        items: [
            'System architecture & design patterns (MVC, Clean Architecture)',
            'Performance optimization & caching strategies',
            'Security: OAuth2, JWT best practices, input validation',
            'Clean code & SOLID principles',
        ],
        highlight: 'Java · Spring Boot · Microservices',
    },
    {
        phase: 'Future',
        title: 'DevOps & Infrastructure',
        status: 'future' as const,
        items: [
            'Docker containerization & orchestration',
            'CI/CD pipeline design & automation (GitHub Actions)',
            'Cloud deployment & infrastructure as code',
            'Monitoring, logging & production reliability',
        ],
        highlight: 'Docker · CI/CD · Cloud · IaC',
    },
];

const statusConfig = {
    current: {
        border: 'border-sky-400/60',
        bg: 'bg-[#111827]',
        dot: 'bg-sky-400',
        badge: 'bg-sky-400/10 text-sky-400 border border-sky-400/30',
        phaseColor: 'text-sky-400',
        showBadge: true,
    },
    next: {
        border: 'border-slate-600',
        bg: 'bg-[#111827]',
        dot: 'bg-slate-500',
        badge: 'bg-slate-800 text-gray-400 border border-slate-700',
        phaseColor: 'text-gray-400',
        showBadge: false,
    },
    future: {
        border: 'border-slate-700',
        bg: 'bg-[#111827]/70',
        dot: 'bg-slate-600',
        badge: 'bg-slate-800/60 text-gray-500 border border-slate-700/60',
        phaseColor: 'text-gray-500',
        showBadge: false,
    },
};

export default function RoadmapSection() {
    return (
        <SectionWrapper id="roadmap" title="Roadmap">
            <div className="max-w-3xl mx-auto">
                <div className="relative">
                    <div className="absolute left-[15px] top-8 bottom-8 w-px bg-gradient-to-b from-sky-400/60 via-slate-600 to-slate-700" />

                    <div className="space-y-8">
                        {roadmapData.map((item, index) => {
                            const cfg = statusConfig[item.status];
                            return (
                                <motion.div
                                    key={item.phase}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative pl-12"
                                >
                                    <div
                                        className={`absolute left-2 top-7 w-2.5 h-2.5 rounded-full ${cfg.dot} z-10 ring-[3px] ring-[#0b1120]`}
                                    />

                                    <div
                                        className={`rounded-xl border ${cfg.border} ${cfg.bg} p-6 transition-all duration-300`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <span
                                                    className={`text-[10px] uppercase tracking-[0.2em] font-medium ${cfg.phaseColor}`}
                                                >
                                                    {item.phase}
                                                </span>
                                                <h3 className="text-base font-semibold text-text-primary mt-0.5">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {cfg.showBadge && (
                                                <span className={`px-2.5 py-1 text-[10px] font-medium rounded-full ${cfg.badge}`}>
                                                    IN PROGRESS
                                                </span>
                                            )}
                                        </div>

                                        <ul className="space-y-2 mb-4">
                                            {item.items.map((point) => (
                                                <li
                                                    key={point}
                                                    className="text-sm text-text-secondary flex items-start gap-2.5"
                                                >
                                                    <span className={`mt-2 shrink-0 w-1 h-1 rounded-full ${cfg.dot}`} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        <div
                                            className={`inline-block px-3 py-1 text-[11px] rounded-md ${cfg.badge}`}
                                        >
                                            {item.highlight}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
