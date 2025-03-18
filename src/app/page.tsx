"use client";
import HeroSection from "@/app/components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WelcomeSection />
      <div className="test h-dvh relative w-full bg-black"></div>
    </div>
  );
}
