import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { Archivo, Rubik, Sora } from "next/font/google";
import TopoWaves from "./components/TopoWaves";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anwesh.me"),
  title: "Ale Anwesh — AI Engineer",
  description:
    "Founding AI Engineer @ Wisemate · LLMs · RAG · Agentic AI · LangGraph · IIT Jodhpur '26. Building production AI systems at the intersection of LLMs, agents, and applied ML.",
  keywords: [
    "Ale Anwesh",
    "Anwesh Ale",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "LLM Engineer",
    "GenAI",
    "LangChain",
    "LangGraph",
    "RAG",
    "Retrieval-Augmented Generation",
    "Agentic AI",
    "Multi-Agent Systems",
    "Vector Databases",
    "pgvector",
    "OpenAI",
    "Anthropic",
    "Google Gemini",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "XGBoost",
    "Python",
    "Fintech ML",
    "IIT Jodhpur",
    "Founding AI Engineer",
    "Wisemate",
    "Snapmint",
    "ActionSync",
    "Kavida.ai",
    "DyG-RAG",
    "Graph RAG",
    "Apache Spark",
    "Apache Kafka",
    "Data Engineering",
    "Portfolio",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Ale Anwesh — AI Engineer",
    description:
      "Founding AI Engineer @ Wisemate · LLMs · RAG · Agentic AI · IIT Jodhpur '26.",
    url: "https://anwesh.me",
    siteName: "Ale Anwesh",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Ale Anwesh — AI Engineer · LLMs · RAG · Agentic AI",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ale Anwesh — AI Engineer",
    description:
      "Building production AI systems · LLMs · RAG · Agents · IIT Jodhpur '26.",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${sora.variable} ${archivo.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Providers>
          <TopoWaves />
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <main className=" px-5 sm:px-12">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
