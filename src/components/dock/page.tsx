const dockItems = [
  { icon: "🏠", title: "Portfolio", href: "https://abhishek-gawande.vercel.app" },
  { icon: "🐙", title: "GitHub", href: "https://github.com/gawandeabhishek" },
  { icon: "💼", title: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-gawande-a944a2277/" },
  null, // separator
  { icon: "✉", title: "Email", href: "mailto:abhishekgawande1667@gmail.com" },
  { icon: "📷", title: "Instagram", href: "https://www.instagram.com/gawandeabhishek_" },
];

export default function Dock() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-1.5 bg-gray-900/20 backdrop-blur-md rounded-2xl px-3 py-2.5">
        {dockItems.map((item, i) =>
          item === null ? (
            <div key={`sep-${i}`} className="w-px self-stretch my-2 bg-white/10 mx-1" />
          ) : (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="w-11 h-11 rounded-xl bg-black/30 backdrop-blur-md flex items-center justify-center text-xl
                hover:-translate-y-4 hover:scale-110 hover:bg-black/30
                transition-all duration-150 ease-out"
            >
              {item.icon}
            </a>
          )
        )}
      </div>
    </div>
  );
}
