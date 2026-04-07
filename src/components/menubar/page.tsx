"use client";

import { useEffect, useState } from "react";

export default function Menubar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${String(m).padStart(2, "0")} ${ampm}`);
    }
    updateClock();
    const id = setInterval(updateClock, 60000);
    return () => clearInterval(id);
  }, []);

  const navItems = ["File", "View", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-7 bg-black/80 backdrop-blur border-b border-white/10 flex items-center justify-between px-4 text-xs font-medium">
      <div className="flex items-center gap-5">
        <span className="text-white/60 text-sm">&#63743;</span>
        <span className="text-white font-semibold tracking-wide">Portfolio</span>
        {navItems.map((item) => (
          <span key={item} className="text-white/40 hidden sm:block hover:text-white/70 cursor-pointer transition-colors">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 text-white/40">
        <span className="hidden sm:block">⌘</span>
        <span>{time}</span>
      </div>
    </header>
  );
}