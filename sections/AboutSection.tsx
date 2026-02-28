'use client';

import SectionWrapper from '@/components/SectionWrapper';
import TechTag from '@/components/TechTag';

const techStack = {
    'Frontend & Mobile': ['React.js', 'TypeScript', 'HTML/CSS', 'WinForms'],
    'Backend & Framework': ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'C# (.NET)'],
    Database: ['MongoDB', 'MySQL', 'SQL Server'],
    Testing: ['Postman', 'API Testing', 'Unit Testing'],
    'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Vercel', 'Socket.IO'],
};

export default function AboutSection() {
    return (
        <SectionWrapper id="about" title="About Me">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                    <p>
                        Xin chào! Mình là{' '}
                        <span className="text-sky-400 font-semibold">Thiện</span> — sinh
                        viên ngành Công nghệ thông tin, chuyên ngành Công nghệ phần mềm
                        tại{' '}
                        <span className="text-text-primary">
                            Trường Đại học Công nghệ TP.HCM (HUTECH)
                        </span>
                        .
                    </p>
                    <p>
                        Mình tin vào triết lý{' '}
                        <span className="text-sky-400">&quot;learning by doing&quot;</span> —
                        xây dựng các sản phẩm thực tế thay vì chỉ học lý thuyết. Mỗi
                        project là một bài học mới, từ desktop app quản lý cửa hàng, web
                        app tìm nhà trọ, đến hệ thống live support real-time.
                    </p>
                    <p>
                        Hiện tại mình đang phát triển theo hướng{' '}
                        <span className="text-sky-400">Fullstack</span> để hiểu toàn bộ
                        end-to-end flow, sau đó sẽ chuyên sâu{' '}
                        <span className="text-sky-400">Backend</span> và dần chuyển sang{' '}
                        <span className="text-sky-400">DevOps &amp; Infrastructure</span>.
                    </p>
                    <p>
                        Quan tâm testing strategy, clean architecture, và mindset
                        automation. Mục tiêu: xây dựng những hệ thống scalable,
                        production-ready.
                    </p>
                </div>

                <div className="space-y-6">
                    {Object.entries(techStack).map(([category, techs]) => (
                        <div key={category}>
                            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techs.map((tech) => (
                                    <TechTag key={tech} label={tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
