import Image from "next/image";
import Window from "../window/page";

const links = [
  { label: "Sponsor ↗", href: "https://github.com/sponsors/gawandeabhishek", primary: true },
  { label: "GitHub", href: "https://github.com/gawandeabhishek" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-gawande-a944a2277/" },
  { label: "Instagram", href: "https://www.instagram.com/gawandeabhishek_" },
  { label: "Email", href: "mailto:abhishekgawande1667@gmail.com" },
];

export default function Hero() {
  return (
    <Window title="abhishek-gawande — ~">
      <div className="p-8 sm:p-10">
        {/* Avatar */}
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-blue-700" />
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-white/10">
            <Image
              src="https://github.com/gawandeabhishek.png"
              alt="Abhishek Gawande"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap tracking-wider uppercase">
            Founder & CEO
          </div>
        </div>

        {/* Name & tagline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mt-4 mb-2">
          Abhishek Gawande
        </h1>
        <p className="text-white/40 text-base mb-6 font-mono tracking-wide">
          — Full Stack Developer &amp; Founder
        </p>
        <p className="text-white/60 text-sm leading-relaxed max-w-lg mb-8 font-mono">
          Turning weird ideas into weirder projects. I build things that
          shouldn&apos;t exist yet — from gesture-controlled music to encrypted
          watch-together streaming. Based in India, pushing into ML, Web, App Dev
          &amp; Electronics.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
                tracking-widest uppercase transition-all duration-150 border
                ${
                  link.primary
                    ? "bg-blue-700 text-black border-blue-700 hover:bg-white hover:border-white"
                    : "bg-transparent text-white/60 border-white/10 hover:border-blue-700 hover:text-blue-700"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Window>
  );
}