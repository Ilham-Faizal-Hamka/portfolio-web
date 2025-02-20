import Image from "next/image";
import Hero from "./components/main/Hero";
import Experience from "./components/main/Experience";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { GoogleGeminiEffectDemo } from "./components/main/Connect";

export default function Home() {
  return (
    <main className="h-full w-full gap-20 flex flex-col">
      <Hero />
      <Experience />
      <GoogleGeminiEffectDemo />
    </main>
  );
}
