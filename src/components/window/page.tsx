import { ReactNode } from "react";

interface WindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Window({ title, children, className = "" }: WindowProps) {
  return (
    <div className={`w-full border border-white/10 rounded-xl overflow-hidden bg-white/[0.03] ${className}`}>
      {title && (
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-600 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-green-600 border border-blue-700/50" />
          </div>
          <span className="text-white/25 text-xs font-mono ml-2">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}