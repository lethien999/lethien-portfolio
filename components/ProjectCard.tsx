'use client';

import { motion } from 'framer-motion';
import TechTag from './TechTag';

interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
    github: string;
}

export default function ProjectCard({
    title,
    description,
    stack,
    github,
}: ProjectCardProps) {
    return (
        <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="block group p-6 rounded-2xl bg-[#111827] border border-slate-700 hover:border-sky-400/50 transition-all duration-300"
        >
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200 mb-3">
                {title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                    <TechTag key={tech} label={tech} />
                ))}
            </div>
        </motion.a>
    );
}
