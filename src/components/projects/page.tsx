import SectionHeader from "../section-header/page";
import Window from "../window/page";

const projects = [
  {
    icon: "▶",
    name: "gesture-based-music-player",
    desc: "Control music with hand gestures. No keyboard, no clicks.",
    lang: "TypeScript",
    href: "https://github.com/gawandeabhishek/gesture-based-music-player",
  },
  {
    icon: "🎬",
    name: "telenova",
    desc: "E2E encrypted movie streaming with sync watch-together rooms.",
    lang: "TypeScript",
    href: "https://github.com/gawandeabhishek/telenova",
  },
  {
    icon: "🎵",
    name: "vibewave",
    desc: "Music platform built for real-time engagement.",
    lang: "TypeScript",
    href: "https://github.com/gawandeabhishek/vibewave",
  },
  {
    icon: "🗳",
    name: "vote-siem",
    desc: "Secure, transparent voting for the modern web.",
    lang: "TypeScript",
    href: "https://github.com/gawandeabhishek/vote-siem",
  },
  {
    icon: "⚡",
    name: "snappaste",
    desc: "Fast, frictionless snippet capturing and sharing.",
    lang: "TypeScript",
    href: "https://github.com/gawandeabhishek/snappaste",
  },
  {
    icon: "▶",
    name: "TubePlus",
    desc: "Video platform experience done right.",
    lang: "TypeScript",
    href: "https://github.com/gawandeabhishek/TubePlus",
  },
];

export default function Projects() {
  return (
    <Window>
      <SectionHeader icon="■" label="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-white/10 sm:divide-x">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block p-5 group transition-colors duration-150 hover:bg-white/[0.04]
              ${i % 3 !== 0 ? "" : ""}
            `}
          >
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-base mb-3 group-hover:border-blue-700/40 group-hover:bg-blue-700/5 transition-colors">
              {p.icon}
            </div>
            <div className="text-sm font-semibold text-white mb-1.5 group-hover:text-blue-700 transition-colors font-mono">
              {p.name}
            </div>
            <div className="text-xs text-white/40 leading-relaxed mb-3">
              {p.desc}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-white/25 font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              {p.lang}
            </div>
          </a>
        ))}
      </div>
    </Window>
  );
}