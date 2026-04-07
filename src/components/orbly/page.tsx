import SectionHeader from "../section-header/page";
import Window from "../window/page";

const pills = ["Slot Booking", "Appointments", "SaaS", "Founder & CEO"];

export default function Orbly() {
  return (
    <Window>
      <SectionHeader icon="★" label="Founder & CEO" />
      <div className="p-5">
        <div className="bg-blue-700 rounded-lg p-6 relative overflow-hidden">
          {/* decorative circles */}
          <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 left-1/3 w-24 h-24 rounded-full bg-white/[0.07]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
              Live Product
            </div>
            <div className="text-3xl font-bold tracking-tighter text-white mb-2">
              Orbly
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm font-mono">
              A modern slot &amp; appointment booking platform — making
              scheduling effortless for businesses and their customers. Book
              smarter, not harder.
            </p>
            <div className="flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}