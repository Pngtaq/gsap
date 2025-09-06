import React from "react";
//GSAP
import { ScrollTrigger, SplitText } from "gsap/all";
//components
import Navbar from "@/components/Navbar";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default page;
