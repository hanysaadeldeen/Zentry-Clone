"use client";
import { useEffect } from "react";
import MainTitleAnimated from "./MainTitleAnimated";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const WelcomeSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 30%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          markers: true,
        },
      });
      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section className=" bg-blue-50 pt-20 overflow-hidden relative min-h-dvh ">
      <MainTitleAnimated
        title="Disc<b>o</b>ver the worl<b>d</b>'s <br> largest shar<b>e</b>d <b>a</b>dventure"
        color="black"
      />

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image border">
          <img
            src="/img/about.webp"
            alt="aboutSection"
            className={`image-3d   absolute left-0 top-0 hover:scale-110 ease-in-out duration-300 transition-all  size-full  object-cover   `}
          />
          <div className="text-center mt-10 z-40 ">
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
            <p className="text-white">
              Zentry unites every player from countless games and platforms,
              both digital and physical, into a unified Play Economy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
