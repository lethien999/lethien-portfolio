interface TechTagProps {
    label: string;
    variant?: 'default' | 'glow';
}

export default function TechTag({ label, variant = 'default' }: TechTagProps) {
    const baseStyles = 'inline-block px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200';
    const variantStyles = {
        default: 'text-zinc-200 bg-zinc-900/70 border border-white/10 hover:border-[#ff6a3d]/40 hover:text-[#ff6a3d]',
        glow: 'text-[#fbe2d7] bg-[#ff6a3d]/20 border border-[#ff6a3d]/30 hover:bg-[#ff6a3d]/30',
    };

    return (
        <span className={`${baseStyles} ${variantStyles[variant]}`}>
            {label}
        </span>
    );
}
