'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import TechTag from '@/components/TechTag';

const techStack = {
    'Frontend & Mobile': ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'WinForms'],
    'Backend & Framework': ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'C# (.NET)'],
    Database: ['MongoDB', 'MySQL', 'SQL Server', 'Redis'],
    'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Vercel', 'CI/CD', 'Socket.IO'],
};

const stats = [
    { value: '3+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Learning' },
    { value: '10+', label: 'Technologies' },
];

export default function AboutSection() {
    return (
        <SectionWrapper id="about" title="About Me">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="frame-card p-6 md:p-8 space-y-4 text-zinc-200 text-base leading-relaxed"
                    >
                        <p>
                            Xin chào! Mình là{' '}
                            <span className="gradient-text font-semibold">Thiện</span> — sinh
                            viên ngành Công nghệ thông tin, chuyên ngành Công nghệ phần mềm
                            tại{' '}
                            <span className="text-[#f7f2e8] font-medium">
                                Trường Đại học Công nghệ TP.HCM (HUTECH)
                            </span>
                            .
                        </p>
                        <p>
                            Mình tin vào triết lý{' '}
                            <span className="text-[#ff9f7f] font-medium">&quot;learning by doing&quot;</span> —
                            xây dựng các sản phẩm thực tế thay vì chỉ học lý thuyết. Mỗi
                            project là một bài học mới, từ desktop app quản lý cửa hàng, web
                            app tìm nhà trọ, đến hệ thống live support real-time.
                        </p>
                        <p>
                            Hiện tại mình đang phát triển theo hướng{' '}
                            <span className="text-[#ff9f7f]">Fullstack</span> để hiểu toàn bộ
                            end-to-end flow, sau đó sẽ chuyên sâu{' '}
                            <span className="text-[#7de2d7]">Backend</span> và dần chuyển sang{' '}
                            <span className="text-[#8ad8ff]">DevOps & Infrastructure</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="text-center p-4 rounded-xl bg-zinc-900/55 border border-white/10"
                            >
                                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-5 rounded-xl bg-zinc-900/50 border border-white/10"
                    >
                        <h4 className="text-sm font-semibold text-[#f7f2e8] mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#ff6a3d] rounded-full" />
                            Current Focus
                        </h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                            <li className="flex items-start gap-2">
                                <span className="text-[#ff6a3d] mt-1">→</span>
                                Clean Architecture & SOLID Principles
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#2a9d8f] mt-1">→</span>
                                Testing Strategy & Automation
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5ec6ff] mt-1">→</span>
                                Scalable System Design
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="sticky top-24 space-y-6"
                    >
                        <h3 className="text-lg font-display font-semibold text-[#f7f2e8] mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#ff6a3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Tech Stack
                        </h3>
                        {Object.entries(techStack).map(([category, techs], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="frost-card p-4 rounded-xl"
                            >
                                <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {techs.map((tech) => (
                                        <TechTag key={tech} label={tech} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
