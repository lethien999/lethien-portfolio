interface TechTagProps {
    label: string;
}

export default function TechTag({ label }: TechTagProps) {
    return (
        <span className="inline-block px-3 py-1 text-sm text-gray-300 bg-[#111827] border border-slate-700 rounded-lg hover:border-sky-400/50 transition-colors duration-200">
            {label}
        </span>
    );
}
