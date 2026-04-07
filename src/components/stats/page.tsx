import Window from "../window/page";

const stats = [
  { num: "67", label: "Repositories" },
  { num: "9", label: "Followers" },
  { num: "3+", label: "Achievements" },
];

export default function Stats() {
  return (
    <Window>
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {stats.map((s) => (
          <div key={s.label} className="py-6 text-center">
            <div className="text-3xl font-bold tracking-tighter text-white mb-1">
              {s.num}
            </div>
            <div className="text-[11px] text-white/30 font-mono uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}