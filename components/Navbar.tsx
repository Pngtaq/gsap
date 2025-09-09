"use client";
import { navLinks } from "@/constants";
//components
import Image from "next/image";
import Link from "next/link";
//gsap
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav className="flex items-center justify-evenly pt-4 flex-wrap gap-2">
      <Link href="/home" className="flex items-center gap-2">
        <Image src="/images/logo.png" width={30} height={30} alt="logo" />
        <p>Velvet pour</p>
      </Link>

      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={`/${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
