'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';

const contactLinks = [
    {
        label: 'Email',
        value: 'lethien19092001@gmail.com',
        href: 'mailto:lethien19092001@gmail.com',
        icon: '✉',
    },
    {
        label: 'GitHub',
        value: 'github.com/lethien999',
        href: 'https://github.com/lethien999',
        icon: '⌘',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/lethien999',
        href: 'https://www.linkedin.com/in/lethien999/',
        icon: '◉',
    },
    {
        label: 'Facebook',
        value: 'le.thien.236860',
        href: 'https://www.facebook.com/le.thien.236860/',
        icon: '◆',
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const subject = encodeURIComponent(
            `[Portfolio] Message from ${formData.name}`
        );
        const body = encodeURIComponent(
            `Hi Thiện,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
        );
        window.open(
            `mailto:lethien19092001@gmail.com?subject=${subject}&body=${body}`,
            '_blank'
        );
        setStatus('sent');
        setTimeout(() => setStatus('idle'), 3000);
    }

    return (
        <SectionWrapper id="contact" title="Contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Info */}
                <div>
                    <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                        Mình luôn sẵn sàng kết nối với các developer khác, thảo luận về
                        tech, hoặc cơ hội hợp tác. Đừng ngại liên hệ!
                    </p>

                    <div className="space-y-4 mb-10">
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center gap-4 group"
                            >
                                <span className="w-8 h-8 rounded-lg bg-[#1f2937] border border-slate-700 flex items-center justify-center text-sky-400 text-sm group-hover:border-sky-400/50 transition-colors">
                                    {link.icon}
                                </span>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">
                                        {link.label}
                                    </span>
                                    <p className="text-sm text-text-secondary group-hover:text-sky-400 transition-colors duration-200">
                                        {link.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="/cv.pdf"
                        download
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-sky-400/60 text-sky-400 text-sm rounded-lg hover:bg-sky-400 hover:text-[#0b1120] transition-all duration-200"
                    >
                        ↓ Download CV
                    </motion.a>
                </div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="bg-[#111827] border border-slate-700 rounded-xl p-6">
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs text-gray-500 uppercase tracking-widest mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-gray-600 focus:outline-none focus:border-sky-400 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs text-gray-500 uppercase tracking-widest mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-gray-600 focus:outline-none focus:border-sky-400 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs text-gray-500 uppercase tracking-widest mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-gray-600 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 bg-sky-400 text-[#0b1120] font-semibold text-sm rounded-lg hover:bg-sky-300 transition-colors duration-200 disabled:opacity-50"
                        >
                            {status === 'sent' ? '✓ Opening mail client...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
