import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-40 lg:mt-0 items-center  bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] lg:min-h-screen  ">
      <section
        className="w-full relative pb-10 flex flex-col gap-4"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2">
          <span className="text-lg">Hi, I&apos;m</span>
          <h1 className="font-display flex items-baseline flex-wrap gap-x-4">
            <span className="font-extrabold text-6xl md:text-7xl text-secondary-color-3 leading-none">
              Anwesh
            </span>
            <span className="font-medium text-2xl md:text-3xl text-white opacity-90 leading-none">
              Ale
            </span>
          </h1>
        </div>

        <div className="relative">
          <p className="mt-2 leading-relaxed text-base md:text-lg max-w-3xl">
            I build production AI systems at the intersection of{" "}
            <span className="text-[#FFB000] font-medium">
              LLMs, agentic workflows, and applied ML
            </span>
            . Currently shipping 0→1 AI as the first AI hire at Wisemate
            (London, Remote). Previously shipped production RAG at ActionSync
            and fintech ML at Snapmint — lifted campaign CTR 4x in a live A/B
            test over 700K users.
            <br />
            <br />
            Final-year B.Tech in AI &amp; Data Science at IIT Jodhpur.
            Graduating May 2026.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-5">
          <Button asChild variant={"outline"}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"mailto:b22ai005@iitj.ac.in"}
              className="flex items-center justify-center gap-3 px-5 py-2 font-medium w-max border-[1px]"
            >
              Get in Touch
              <Image
                alt="message"
                src={"/svgs/message-programming.svg"}
                width={25}
                height={25}
              />
            </Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/anwesh2410"}
              className="flex items-center justify-center gap-3 px-5 py-2 font-medium w-max border-[1px]"
            >
              View GitHub
              <Image
                alt="github"
                src={"/svgs/github.svg"}
                width={22}
                height={22}
              />
            </Link>
          </Button>
        </div>
      </section>
    </header>
  );
};
export default Header;
