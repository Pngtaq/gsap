import { openingHours, socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <Image
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        width={300}
        height={300}
      />
      <Image
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        width={300}
        height={100}
      />

      <div className="content">
        <h2>Where to Find us</h2>

        <div className="grid md:grid-row-4 gap-y-10">
          <div>
            <h3>Visit Our Bar</h3>
            <p>123, Binangonan Rizal</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <h3>(652) 123-0001</h3>
            <p>ronchan.dev@gmail.com</p>
          </div>

          <div>
            <h3>Opening Every Day</h3>
            {openingHours.map((time) => {
              return (
                <p key={time.day}>
                  {time.day} : {time.time}
                </p>
              );
            })}
          </div>

          <div>
            <h3>Socials</h3>
            <div className="flex-center gap-5">
              {socials.map((social) => {
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      width={20}
                      height={20}
                      alt="footer"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/footer-drinks.png"
        alt="drinks"
        className="drink-img"
        width={300}
        height={400}
      />
    </footer>
  );
};

export default Contact;
