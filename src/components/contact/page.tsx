import SectionHeader from "../section-header/page";
import Window from "../window/page";

const contacts = [
  {
    icon: "✉",
    label: "Email",
    value: "abhishekgawande1667@gmail.com",
    href: "mailto:abhishekgawande1667@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "abhishek-gawande-a944a2277",
    href: "https://www.linkedin.com/in/abhishek-gawande-a944a2277/",
    iconClass: "text-[10px] font-black text-white/50",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "@gawandeabhishek",
    href: "https://github.com/gawandeabhishek",
  },
  {
    icon: "⌨",
    label: "LeetCode",
    value: "@programmerboyabhi",
    href: "https://www.leetcode.com/u/programmerboyabhi/",
  },
];

export default function Contact() {
  return (
    <Window>
      <SectionHeader icon="💬" label="Contact" />
      <div className="divide-y divide-white/10">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="block px-5 py-3 hover:bg-blue-700/10 hover:text-blue-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl text-white/50">{c.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-medium text-white/80">{c.label}</div>
                <div className="text-xs text-white/50">{c.value}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Window>
  );
}