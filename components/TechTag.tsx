interface TechTagProps {
    label: string;
    variant?: 'default' | 'glow';
}

export default function TechTag({ label, variant = 'default' }: TechTagProps) {
    const baseStyles = 'inline-block px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200';
    const variantStyles = {
        default: 'text-zinc-300 bg-zinc-800/50 border border-zinc-700 hover:border-purple-500/30 hover:text-purple-300',
        glow: 'text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20',
    };

    return (
        <span className={`${baseStyles} ${variantStyles[variant]}`}>
            {label}
        </span>
    );
}
