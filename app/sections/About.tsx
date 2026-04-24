import { technologies } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col   mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-medium">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 order-2 lg:order-1">
          <h4 className="font-medium">Technologies I work with</h4>
          <div
            className="bg-no-repeat bg-contain"
            // style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
          >
            <ul className="px-6 py-6 flex flex-wrap gap-x-6 gap-y-4 sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0 hover:font-medium"
                >
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article className="leading-relaxed text-base md:text-lg">
            I&apos;m Ale Anwesh, a final-year B.Tech student in{" "}
            <span className="text-[#FFB000]">Artificial Intelligence &amp; Data Science</span>{" "}
            at IIT Jodhpur (graduating May 2026), currently serving as{" "}
            <span className="text-[#FFB000]">Founding AI Engineer</span> at
            Wisemate (London, Remote) — the first AI hire at an early-stage
            AI sales-agent platform, where I own the 0→1 LLM and data stack.
            <br />
            <br />
            My focus is building production AI systems that actually ship. At
            Wisemate I architect agentic workflows with LangGraph,
            orchestrating multi-provider LLMs (OpenAI, Anthropic, Gemini)
            behind a unified FastAPI service. At ActionSync I built a
            production hybrid Retrieval-Augmented Generation system (sole
            owner) using LangChain that reduced query latency 40% across
            thousands of daily queries. At Snapmint — India&apos;s leading
            Zero-Cost EMI fintech (4M+ consumers, ~₹2,000 Cr transactions) —
            I shipped a propensity-scoring pipeline over 700K+ users that
            lifted campaign CTR 4x in a live A/B test and reduced CAC by 40%
            in pilot rollout.
            <br />
            <br />
            My Bachelor&apos;s Thesis (DyG-RAG) extends the open-source
            RingBDStack/DyG-RAG framework into an event-centric dynamic-graph
            RAG system for temporal QA over PDFs — cutting LLM inference cost
            96% vs. GPT-4o with Gemini 2.5 while achieving 100%
            event-extraction success.
            <br />
            <br />
            Most interested in work at the intersection of{" "}
            <span className="text-[#FFB000]">
              LLM systems, graph + retrieval infrastructure, and applied
              fintech ML
            </span>
            .
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
