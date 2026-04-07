import SectionHeader from "../section-header/page";
import Window from "../window/page";

const items = [
  { icon: "☕", title: "Java", sub: "DSA & algorithms" },
  { icon: "💻", title: "TypeScript", sub: "Advanced patterns" },
  { icon: "⚙", title: "Next.js 15", sub: "App Router & RSC" },
  { icon: "🎃", title: "Three.js", sub: "3D web experiences" },
];

export default function Learning() {
  return (
    <Window>
      <SectionHeader icon="🎙" label="Currently Learning" />
      <div className="p-5 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm flex-shrink-0 group-hover:border-blue-700/40 transition-colors">
              {item.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-white/80 font-mono">
                {item.title}
              </div>
              <div className="text-xs text-white/30 font-mono">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}