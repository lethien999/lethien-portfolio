'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';

const projects: Array<{
    title: string;
    description: string;
    stack: string[];
    github: string;
    featured: boolean;
    role: string;
    challenge: string;
    result: string;
    color: 'purple' | 'blue' | 'cyan';
}> = [
    {
        title: 'Fashion Shop Management',
        description:
            'Ứng dụng desktop quản lý cửa hàng thời trang hoàn chỉnh với đầy đủ tính năng từ A-Z. Xây dựng theo kiến trúc 3 lớp (3-Layer Architecture) với WinForms UI, business logic tách biệt, và data access layer kết nối SQL Server.',
        stack: ['C#', '.NET Framework', 'WinForms', 'SQL Server', '3-Layer Architecture'],
        github: 'https://github.com/lethien999/winforms-shop-fashion',
        featured: true,
        role: 'Solo Developer',
        challenge: 'Thiết kế database và business logic cho hệ thống quản lý inventory phức tạp',
        result: 'Hoàn thành hệ thống với đầy đủ CRUD, báo cáo doanh thu, quản lý kho',
        color: 'purple',
    },
    {
        title: 'Student Accommodation Portal',
        description:
            'Web app giúp sinh viên tìm nhà trọ dễ dàng hơn. Hệ thống authentication đầy đủ với JWT, tìm kiếm & lọc thông minh, responsive design, và full CRUD operations trên nền tảng MERN stack.',
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/lethien999/student-accommodation-portal',
        featured: true,
        role: 'Fullstack Developer',
        challenge: 'Xây dựng hệ thống tìm kiếm và filter phức tạp với geolocation',
        result: 'Hoàn thành web app với authentication, advanced search, responsive UI',
        color: 'blue',
    },
    {
        title: 'Live Support System',
        description:
            'Hệ thống hỗ trợ khách hàng real-time với chat Socket.IO, ticket management, admin dashboard, và lưu trữ lịch sử chat. Xây dựng với TypeScript cho type safety và maintainability.',
        stack: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'MongoDB'],
        github: 'https://github.com/lethien999/my-live-support-2025',
        featured: true,
        role: 'Lead Developer',
        challenge: 'Xử lý real-time communication và đảm bảo tin nhắn không mất',
        result: 'Hệ thống chat real-time ổn định với ticket management đầy đủ',
        color: 'cyan',
    },
];

export default function ProjectsSection() {
    return (
        <SectionWrapper id="projects" title="Featured Projects">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
            >
                Đây là những dự án tiêu biểu thể hiện kỹ năng và tư duy giải quyết vấn đề của mình.
                Mỗi project là một hành trình học hỏi với những thử thách riêng.
            </motion.p>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
            
            {/* GitHub CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 text-center"
            >
                <a
                    href="https://github.com/lethien999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-secondary border border-zinc-800 rounded-lg hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View All Projects on GitHub
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
