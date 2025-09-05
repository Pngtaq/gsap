"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance animation
      const tl = gsap.timeline();
      
      // Animate title with SplitText
      const splitTitle = new SplitText(titleRef.current!, { type: "chars,words" });
      tl.from(splitTitle.chars, {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)"
      });

      // Animate subtitle
      tl.from(subtitleRef.current, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.5");

      // Animate CTA button
      tl.from(ctaRef.current, {
        duration: 0.6,
        scale: 0,
        opacity: 0,
        ease: "back.out(1.7)"
      }, "-=0.3");

      // Floating shapes animation
      gsap.to(".floating-shape", {
        duration: 3,
        y: "-=20",
        rotation: 360,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

      // Continuous rotation for shapes
      gsap.to(".rotating-shape", {
        duration: 10,
        rotation: 360,
        repeat: -1,
        ease: "none"
      });

      // Cards scroll animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Parallax effect for shapes
      gsap.to(".parallax-shape", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -100,
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Floating background shapes */}
      <div ref={shapesRef} className="fixed inset-0 pointer-events-none">
        <div className="floating-shape absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20"></div>
        <div className="floating-shape absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-30 rotating-shape"></div>
        <div className="floating-shape absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25"></div>
        <div className="floating-shape parallax-shape absolute top-60 right-10 w-32 h-32 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg opacity-15 rotating-shape"></div>
        <div className="floating-shape parallax-shape absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20"></div>
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative z-10 flex-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
          >
            GSAP Magic
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Experience the power of smooth animations and interactive design with GreenSock Animation Platform
          </p>
          <button 
            ref={ctaRef}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            Explore Animations
          </button>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div ref={cardsRef} className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Animation Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">High Performance</h3>
              <p className="text-blue-100">Smooth 60fps animations optimized for all devices and browsers</p>
            </div>
            
            <div className="feature-card bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Creative Control</h3>
              <p className="text-blue-100">Endless possibilities with timelines, morphing, and advanced easing</p>
            </div>
            
            <div className="feature-card bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-blue-100">Simple API that works perfectly with React and modern frameworks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Section */}
      <div className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Interactive Elements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="interactive-box w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300 mx-auto"
                onMouseEnter={(e) => {
                  gsap.to(e.target, { duration: 0.3, scale: 1.2, rotation: 15 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { duration: 0.3, scale: 1, rotation: 0 });
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
