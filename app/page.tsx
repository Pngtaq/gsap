"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText, MorphSVGPlugin, MotionPathPlugin, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin, MotionPathPlugin, TextPlugin);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const morphingRef = useRef<SVGSVGElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Complex hero timeline with orchestrated animations
      const masterTimeline = gsap.timeline();
      
      // Advanced text animations with multiple reveal techniques
      const splitTitle = new SplitText(titleRef.current!, { type: "chars,words,lines" });
      const splitSubtitle = new SplitText(subtitleRef.current!, { type: "words" });

      // Title: 3D perspective character reveal
      masterTimeline.from(splitTitle.chars, {
        duration: 1.2,
        y: 200,
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        opacity: 0,
        stagger: {
          amount: 0.8,
          from: "center"
        },
        ease: "back.out(1.7)"
      });

      // Subtitle: Wave reveal effect
      masterTimeline.from(splitSubtitle.words, {
        duration: 0.8,
        y: 100,
        skewY: 15,
        opacity: 0,
        stagger: {
          amount: 0.6,
          from: "start"
        },
        ease: "power3.out"
      }, "-=0.4");

      // CTA: Complex morphing entrance
      masterTimeline.from(ctaRef.current, {
        duration: 1,
        scale: 0,
        rotation: 180,
        borderRadius: "50%",
        backgroundColor: "#ff0000",
        opacity: 0,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.2");

      // Particle system creation
      const createParticles = () => {
        const particles = particlesRef.current;
        if (!particles) return;
        
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle absolute w-1 h-1 bg-white rounded-full opacity-70';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particles.appendChild(particle);
          
          // Complex particle physics
          gsap.to(particle, {
            duration: gsap.utils.random(3, 8),
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
            rotation: gsap.utils.random(0, 360),
            scale: gsap.utils.random(0.5, 2),
            opacity: 0,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 3)
          });
        }
      };

      createParticles();

      // Advanced morphing SVG animations
      const morphPath1 = "M100,200 C100,100 250,100 250,200 S400,300 400,200";
      const morphPath2 = "M100,200 C200,100 300,300 400,200 S100,100 100,200";
      const morphPath3 = "M100,200 Q250,50 400,200 T100,200";

      gsap.to("#morphing-path", {
        duration: 4,
        morphSVG: morphPath2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Complex 3D card gallery
      gsap.set(".gallery-card", {
        transformPerspective: 1000,
        transformOrigin: "center center"
      });

      // Advanced scroll-triggered animations with scrub
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          gsap.to(".gallery-card", {
            duration: 1.5,
            rotationY: 0,
            y: 0,
            opacity: 1,
            stagger: {
              amount: 0.8,
              grid: [2, 3],
              from: "center"
            },
            ease: "power3.out"
          });
        }
      });

      // Parallax layers with different speeds
      gsap.to(".parallax-slow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -50,
        ease: "none"
      });

      gsap.to(".parallax-medium", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        },
        y: -100,
        rotation: 180,
        ease: "none"
      });

      gsap.to(".parallax-fast", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
        y: -200,
        scale: 1.5,
        ease: "none"
      });

      // Interactive floating elements with physics
      gsap.to(".floating-complex", {
        duration: gsap.utils.random(2, 4),
        y: gsap.utils.random(-30, 30),
        x: gsap.utils.random(-20, 20),
        rotation: gsap.utils.random(-15, 15),
        scale: gsap.utils.random(0.8, 1.2),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

      // Advanced feature card animations
      ScrollTrigger.batch(".feature-card-advanced", {
        onEnter: (elements) => {
          gsap.from(elements, {
            duration: 1.2,
            y: 100,
            opacity: 0,
            rotationX: -45,
            transformOrigin: "center top",
            stagger: 0.15,
            ease: "back.out(1.7)"
          });
        },
        onLeave: (elements) => {
          gsap.to(elements, {
            duration: 0.6,
            opacity: 0.7,
            scale: 0.95
          });
        },
        onEnterBack: (elements) => {
          gsap.to(elements, {
            duration: 0.6,
            opacity: 1,
            scale: 1
          });
        }
      });

      // Text scramble effect
      const scrambleText = (element: HTMLElement, finalText: string) => {
        const chars = "!<>-_\\/[]{}—=+*^?#________";
        let iterations = 0;
        
        const interval = setInterval(() => {
          element.innerText = finalText
            .split("")
            .map((letter, index) => {
              if(index < iterations) {
                return finalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
          
          if(iterations >= finalText.length) {
            clearInterval(interval);
          }
          
          iterations += 1 / 3;
        }, 30);
      };

      // Apply scramble effect to dynamic text elements
      document.querySelectorAll('.scramble-text').forEach((el) => {
        const element = el as HTMLElement;
        const originalText = element.textContent || '';
        
        ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => scrambleText(element, originalText)
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">

      {/* Particle System */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Complex Floating Background Elements */}
      <div ref={shapesRef} className="fixed inset-0 pointer-events-none z-0">
        {/* Multi-layered parallax shapes */}
        <div className="floating-complex parallax-slow absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-sm"></div>
        <div className="floating-complex parallax-medium absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-lg rotate-45 blur-xs"></div>
        <div className="floating-complex parallax-fast absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full"></div>
        <div className="floating-complex parallax-slow absolute top-60 right-10 w-28 h-28 bg-gradient-to-r from-green-400/35 to-teal-400/35 rounded-lg rotate-12"></div>
        <div className="floating-complex parallax-fast absolute bottom-20 right-40 w-36 h-36 bg-gradient-to-r from-red-400/25 to-pink-400/25 rounded-full blur-sm"></div>
        
        {/* Additional complex shapes */}
        <div className="floating-complex parallax-medium absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/30 to-purple-600/30 rounded-lg rotate-45"></div>
        <div className="floating-complex parallax-slow absolute bottom-1/3 right-1/3 w-44 h-44 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-md"></div>
      </div>

      {/* Morphing SVG Background */}
      <svg ref={morphingRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 300">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#8B5CF6", stopOpacity:0.3}} />
            <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:0.1}} />
          </linearGradient>
        </defs>
        <path 
          id="morphing-path"
          d="M100,200 C100,100 250,100 250,200 S400,300 400,200"
          fill="url(#morphGradient)"
          stroke="rgba(139, 92, 246, 0.5)"
          strokeWidth="2"
        />
      </svg>

      {/* Hero Section with Advanced Layout */}
      <div ref={heroRef} className="relative z-10 flex-center min-h-screen px-6">
        <div className="text-center max-w-6xl mx-auto relative">
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10"></div>
          
          <div className="relative z-10 p-12">
            <h1 
              ref={titleRef}
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8 leading-none"
            >
              NEXUS GSAP
            </h1>
            <p 
              ref={subtitleRef}
              className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Immerse yourself in the revolutionary world of next-generation animations powered by advanced GSAP techniques
            </p>
            <button 
              ref={ctaRef}
              className="magnetic px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-purple-500/50 border border-white/20 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Enter the Matrix</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Text Scramble Section */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="scramble-text text-5xl md:text-7xl font-bold text-white mb-8">
            QUANTUM DYNAMICS
          </h2>
          <p className="scramble-text text-xl text-blue-200 max-w-3xl mx-auto">
            Witness the power of algorithmic text manipulation and real-time content morphing
          </p>
        </div>
      </div>

      {/* 3D Gallery Section */}
      <div ref={galleryRef} className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20">
            Interactive 3D Gallery
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="gallery-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 relative overflow-hidden group cursor-pointer transform-gpu opacity-0 rotationY-90 y-100"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    duration: 0.6,
                    rotationY: 10,
                    rotationX: -5,
                    scale: 1.05,
                    z: 50,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    duration: 0.6,
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    z: 0,
                    ease: "power2.out"
                  });
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mb-8 flex items-center justify-center text-3xl transform-gpu group-hover:rotate-12 transition-transform duration-500">
                    {['🌌', '⚡', '🔮', '🎨', '🚀', '✨'][i-1]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Dynamic Element {i}</h3>
                  <p className="text-blue-200 mb-6">Advanced 3D transformations with real-time physics simulation and interactive responsiveness.</p>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Feature Showcase */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20">
            Professional Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "MorphSVG", desc: "Complex shape morphing", icon: "🔄" },
              { title: "MotionPath", desc: "Advanced path animations", icon: "📍" },
              { title: "SplitText", desc: "Character-level control", icon: "🔤" },
              { title: "Physics", desc: "Real-world dynamics", icon: "⚗️" }
            ].map((feature, i) => (
              <div 
                key={i}
                className="feature-card-advanced bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 relative overflow-hidden group magnetic cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-200">{feature.desc}</p>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Physics Playground */}
      <div className="relative z-10 py-32 px-6 bg-black/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-12">
            Physics Playground
          </h2>
          <p className="text-xl text-blue-200 mb-16 max-w-3xl mx-auto">
            Interactive elements with advanced physics simulation. Hover, click, and interact with the elements below.
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {Array.from({ length: 12 }, (_, i) => (
              <div 
                key={i}
                className="magnetic interactive-physics w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-2xl cursor-pointer relative overflow-hidden group border border-white/20"
                onClick={(e) => {
                  gsap.to(e.currentTarget, {
                    duration: 0.8,
                    rotation: gsap.utils.random(-360, 360),
                    scale: gsap.utils.random(0.5, 1.5),
                    backgroundColor: `hsl(${gsap.utils.random(0, 360)}, 70%, 60%)`,
                    ease: "elastic.out(1, 0.3)"
                  });
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    duration: 0.3,
                    scale: 1.3,
                    rotationY: 15,
                    z: 30,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    duration: 0.5,
                    scale: 1,
                    rotationY: 0,
                    z: 0,
                    ease: "power2.out"
                  });
                }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-8">
            Ready to Animate?
          </h2>
          <p className="text-2xl text-blue-200 mb-12">
            Experience the future of web animation technology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="magnetic px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-2xl border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              Start Creating
            </button>
            <button className="magnetic px-8 py-4 bg-white/10 text-white font-bold rounded-full text-lg backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
