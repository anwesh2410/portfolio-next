import Link from "next/link";

const Copyright = () => {
  return (
    <div className="py-6 flex flex-col justify-center items-center font-medium text-xs sm:text-sm backdrop-blur-lg gap-1">
      <p className="text-center">
        Built with Next.js, Tailwind &amp; R3F by{" "}
        <span className="text-secondary-color-3 font-medium font-idgrotesk">
          Ale Anwesh
        </span>
      </p>
      <p className="text-center opacity-60">
        Design adapted from{" "}
        <Link
          href={"https://github.com/Farouk-ayo/devfarouk"}
          className="underline decoration-dotted font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Farouk Mustapha&apos;s portfolio
        </Link>{" "}
        (used with permission).
      </p>
      <p>&copy; 2026 Ale Anwesh · All rights reserved.</p>
    </div>
  );
};
export default Copyright;
