import Contact from "@/components/contact/page";
import Dock from "@/components/dock/page";
import Hero from "@/components/hero/page";
import Learning from "@/components/learning/page";
import Menubar from "@/components/menubar/page";
import Orbly from "@/components/orbly/page";
import Projects from "@/components/projects/page";
import Stack from "@/components/stack/page";
import Stats from "@/components/stats/page";
import Window from "@/components/window/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-4 sm:px-16 bg-black sm:items-start space-y-8">

        <Hero />
        <Menubar />
        <Dock />
        <Stack />
        <Projects />
        <Learning />
        <Orbly />
        <Stats />
        <Contact />
      </main>
    </div>
  );
}
