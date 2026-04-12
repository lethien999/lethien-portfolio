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
        border: 'border-[#ff6a3d]/45',
        bg: 'bg-zinc-900/80',
        dot: 'bg-[#ff6a3d]',
        badge: 'bg-[#ff6a3d]/15 text-[#ffab8f] border border-[#ff6a3d]/30',
        phaseColor: 'text-[#ff9f7f]',
        showBadge: true,
        glow: 'shadow-lg shadow-[#ff6a3d]/10',
    },
    next: {
        border: 'border-[#2a9d8f]/30',
        bg: 'bg-zinc-900/60',
        dot: 'bg-[#2a9d8f]',
        badge: 'bg-[#2a9d8f]/15 text-[#86d8cd] border border-[#2a9d8f]/30',
        phaseColor: 'text-[#86d8cd]',
        showBadge: false,
        glow: '',
    },
    future: {
        border: 'border-zinc-800',
        bg: 'bg-zinc-900/40',
        dot: 'bg-zinc-600',
        badge: 'bg-zinc-800 text-zinc-500 border border-zinc-700',
        phaseColor: 'text-zinc-500',
        showBadge: false,
        glow: '',
    },
};

export default function RoadmapSection() {
    return (
        <SectionWrapper id="roadmap" title="Career Roadmap">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white mix-blend-difference text-center max-w-2xl mx-auto mb-12"
            >
                Lộ trình phát triển sự nghiệp với mục tiêu rõ ràng và từng bước cụ thể.
            </motion.p>
            <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                    {roadmapData.map((item, index) => {
                        const cfg = statusConfig[item.status];
                        return (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <div
                                    className={`rounded-[0_2rem_0_2rem] border ${cfg.border} ${cfg.bg} ${cfg.glow} p-6 transition-all duration-300 hover:border-[#ff6a3d]/35`}
                                >
                                    <div className="flex items-start justify-between mb-4 gap-4">
                                        <div>
                                            <span
                                                className={`text-[10px] uppercase tracking-[0.2em] font-medium ${cfg.phaseColor}`}
                                            >
                                                {item.phase}
                                            </span>
                                            <h3 className="text-lg font-display font-semibold text-[#f7f2e8] mt-1">
                                                {item.title}
                                            </h3>
                                        </div>
                                        {cfg.showBadge && (
                                            <span className={`shrink-0 px-3 py-1 text-[10px] font-medium rounded-full ${cfg.badge} flex items-center gap-1.5`}>
                                                <span className="w-1.5 h-1.5 bg-[#ff6a3d] rounded-full animate-pulse" />
                                                IN PROGRESS
                                            </span>
                                        )}
                                    </div>

                                    <ul className="space-y-2.5 mb-5">
                                        {item.items.map((point) => (
                                            <li
                                                key={point}
                                                className="text-sm text-zinc-300 flex items-start gap-3"
                                            >
                                                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div
                                        className={`inline-block px-3 py-1.5 text-xs rounded-lg ${cfg.badge}`}
                                    >
                                        {item.highlight}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
