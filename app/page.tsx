// "use client";
import React from "react";
//GSAP
// import { ScrollTrigger, SplitText } from "gsap/all";
//components
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default page;
