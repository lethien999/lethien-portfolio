'use client';

import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'Fashion Shop Management',
        description:
            'Ứng dụng desktop quản lý cửa hàng thời trang hoàn chỉnh với đầy đủ tính năng từ A-Z. Xây dựng theo kiến trúc 3 lớp (3-Layer Architecture) với WinForms UI, business logic tách biệt, và data access layer kết nối SQL Server.',
        stack: ['C#', '.NET Framework', 'WinForms', 'SQL Server', '3-Layer Architecture'],
        github: 'https://github.com/lethien999/winforms-shop-fashion',
    },
    {
        title: 'Student Accommodation Portal',
        description:
            'Web app giúp sinh viên tìm nhà trọ dễ dàng hơn. Hệ thống authentication đầy đủ với JWT, tìm kiếm & lọc thông minh, responsive design, và full CRUD operations trên nền tảng MERN stack.',
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/lethien999/student-accommodation-portal',
    },
    {
        title: 'Live Support System',
        description:
            'Hệ thống hỗ trợ khách hàng real-time với chat Socket.IO, ticket management, admin dashboard, và lưu trữ lịch sử chat. Xây dựng với TypeScript cho type safety và maintainability.',
        stack: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'MongoDB'],
        github: 'https://github.com/lethien999/my-live-support-2025',
    },
];

export default function ProjectsSection() {
    return (
        <SectionWrapper id="projects" title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </SectionWrapper>
    );
}
