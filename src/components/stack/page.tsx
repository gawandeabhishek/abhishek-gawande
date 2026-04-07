import SectionHeader from "../section-header/page";
import Window from "../window/page";

const featured = ["Next.js", "React", "TypeScript"];
const rest = [
  "JavaScript", "Node.js", "MongoDB", "Tailwind CSS",
  "Shadcn UI", "Java", "Arduino", "MERN", "Material UI",
];

export default function Stack() {
  return (
    <Window>
      <SectionHeader icon="🔧" label="Stack" />
      <div className="flex flex-wrap gap-2 p-5">
        {featured.map((chip) => (
          <span
            key={chip}
            className="px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-700 text-black"
          >
            {chip}
          </span>
        ))}
        {rest.map((chip) => (
          <span
            key={chip}
            className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 text-white/50 hover:border-blue-700 hover:text-white/80 transition-colors cursor-default"
          >
            {chip}
          </span>
        ))}
      </div>
    </Window>
  );
}