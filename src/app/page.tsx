import Image from "next/image";
import Hero from "./components/main/Hero";
import Experience from "./components/main/Experience";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { GoogleGeminiEffectDemo } from "./components/main/Connect";
import { LampDemo } from "@/components/ui/lamp";

export default function Home() {
  return (
    <main className="h-full w-full gap-20 flex flex-col z-0">
      <Hero />
      <Experience />
      <GoogleGeminiEffectDemo />
      <LampDemo />
    </main>
  );
}
