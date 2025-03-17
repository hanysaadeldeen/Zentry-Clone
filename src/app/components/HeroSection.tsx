"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);
import { FaArrowAltCircleRight } from "react-icons/fa";
const HeroSection = () => {
  const BottonTitle = useRef(null);
  const All_Content = useRef(null);

  useEffect(() => {
    gsap.set(All_Content.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    });
    gsap.to(All_Content.current, {
      clipPath: "polygon(9% 18%, 88% 17%, 71% 90%, 28% 75%)",
      // rotate: "5deg",
      ease: "power1.inOut",
      scrollTrigger: {
        scrub: true,
        start: "15% 30%",
        end: "80% center",
        markers: false,
      },
    });
  }, []);
  return (
    <section className="h-dvh w-full overflow-hidden relative bg-blue-50  ">
      <div ref={All_Content} className="h-dvh w-full  relative z-20">
        <div className="h-dvh w-full  absolute  inset-0" id="video-frame">
          <video
            src="/videos/hero-0.mp4"
            autoPlay
            loop
            muted
            className="w-full h-dvh object-cover"
          ></video>
        </div>
        <div ref={BottonTitle} className="absolute bottom-10 right-10 ">
          <h1
            className={`${styles.heroTitle} ${styles.specialFont} text-white testt`}
          >
            G<b>a</b>mming
          </h1>
        </div>
        <div className="absolute top-10 left-10">
          <h1
            className={`${styles.heroTitle} ${styles.specialFont} mb-2  text-white`}
          >
            redefi<b>ne</b>
          </h1>
          <p
            className={`${styles.heroParagraph} capitalize text-blue-50 lg:text-lg text-2xl`}
          >
            enter the metagame <br /> unless the play economy
          </p>
          <Button title="Watch trailer" Icon={FaArrowAltCircleRight} />
        </div>
      </div>
      <div className="absolute bottom-10 right-10">
        <h1
          className={`${styles.heroTitle} ${styles.specialFont} text-blue-200 `}
        >
          G<b>a</b>mming
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
