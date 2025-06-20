import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex xl:flex-row flex-col xl:relative items-center justify-center xl:h-[92vh] xl:gap-0 gap-10 xl:m-0 m-4">
      <div className="flex gap-10 items-center justify-center xl:absolute xl:left-4 left-auto top-10">
        <span className="xl:text-9xl text-5xl">👋</span>
        <div className="flex flex-col xl:gap-4 gap-2">
          <p className="xl:text-xl text-xs text-secondary/70">Hello, I am</p>
          <h3 className="xl:text-5xl text-xl">Abhishek</h3>
        </div>
      </div>
      <a href="https://drive.google.com/file/d/1cKwTNzyKgKvtW_o8FatZXl1gbodyXT1i/view?usp=sharing" target="_blank">
        <Badge
          className="flex items-center justify-center gap-4 text-4xl px-6 py-4 xl:absolute xl:right-[20%] top-[10%]"
          variant={"secondary"}
        >
          <FileText size={40} />
          <p className="font-normal">Resume</p>
        </Badge>
      </a>
      <Button
        variant={"secondary"}
        className="xl:absolute top-[30%] left-[10%] xl:text-4xl text-2xl xl:px-10 xl:py-12 px-5 py-6"
      >
        Web Developer
      </Button>
      <Image
        src="/abhishek-img.jpeg"
        alt="Abhishek's Picture"
        width={400}
        height={400}
        className="rounded-full shadow-2xl object-cover sm:h-[24rem] sm:w-[24rem] h-[14rem] w-[14rem]"
      />
      <div
        className={
          "xl:absolute xl:top-[30%] bottom-0 xl:right-[2%] right-auto xl:w-[30%] w-[98%] h-fit bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 xl:p-10 pl-10 pr-2 py-10 rounded-tr-2xl rounded-b-2xl"
        }
      >
        <ul
          role="list"
          className="marker:text-sky-400 list-disc flex flex-col gap-6"
        >
          <h3 className="xl:text-4xl text-2xl">
            I am a passionate coder and web/app developer with expertise in:
          </h3>
          <li className="text-sm">
            <strong>Java & TypeScript:</strong> Algorithms.
          </li>
          <li className="text-sm">
            <strong>React & Next.js:</strong> Web apps.
          </li>
          <li className="text-sm">
            <strong>Mobile Dev:</strong> React Native.
          </li>
          <li className="text-sm">
            <strong>Backend:</strong> API integration.
          </li>
        </ul>
      </div>
    </main>
  );
}
