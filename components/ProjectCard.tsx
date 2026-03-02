'use client';

import { motion } from 'framer-motion';
import TechTag from './TechTag';

interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
    github: string;
    featured?: boolean;
    role?: string;
    challenge?: string;
    result?: string;
    color?: 'purple' | 'blue' | 'cyan';
    index?: number;
}

const colorStyles = {
    purple: {
        gradient: 'from-purple-500/10 to-transparent',
        border: 'hover:border-purple-500/30',
        accent: 'text-purple-400',
        glow: 'group-hover:shadow-purple-500/10',
    },
    blue: {
        gradient: 'from-blue-500/10 to-transparent',
        border: 'hover:border-blue-500/30',
        accent: 'text-blue-400',
        glow: 'group-hover:shadow-blue-500/10',
    },
    cyan: {
        gradient: 'from-cyan-500/10 to-transparent',
        border: 'hover:border-cyan-500/30',
        accent: 'text-cyan-400',
        glow: 'group-hover:shadow-cyan-500/10',
    },
};

export default function ProjectCard({
    title,
    description,
    stack,
    github,
    featured,
    role,
    challenge,
    result,
    color = 'purple',
    index = 0,
}: ProjectCardProps) {
    const styles = colorStyles[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div
                className={`relative p-6 sm:p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 ${styles.border} transition-all duration-300 ${styles.glow} group-hover:shadow-2xl overflow-hidden`}
            >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                {featured && (
                                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                                        Featured
                                    </span>
                                )}
                                {role && (
                                    <span className="text-xs text-text-muted">
                                        {role}
                                    </span>
                                )}
                            </div>
                            <h3 className={`text-xl sm:text-2xl font-semibold text-text-primary group-hover:${styles.accent} transition-colors duration-200`}>
                                {title}
                            </h3>
                        </div>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-purple-500/30 hover:text-purple-400 transition-all duration-200 shrink-0"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View Code
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Case Study Details */}
                    {(challenge || result) && (
                        <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-zinc-800/30 border border-zinc-800">
                            {challenge && (
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <span className={styles.accent}>●</span> Challenge
                                    </h4>
                                    <p className="text-sm text-text-secondary">{challenge}</p>
                                </div>
                            )}
                            {result && (
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <span className="text-green-400">●</span> Result
                                    </h4>
                                    <p className="text-sm text-text-secondary">{result}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <TechTag key={tech} label={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
