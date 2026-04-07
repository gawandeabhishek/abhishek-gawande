interface SectionHeaderProps {
  icon?: string;
  label: string;
}

export default function SectionHeader({ icon, label }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 text-[10px] font-bold uppercase tracking-[2px] text-white/25">
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  );
}