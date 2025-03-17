"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./styles.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";

const MainTitleAnimated = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const wordRefs = useRef<HTMLElement[]>([]);
  const ContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wordRefs.current, {
        duration: 2,
        y: 50,
        x: -50,
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ContainerRef.current,
          scrub: true,
          start: "top 80%",
          end: "60% center",
          markers: true,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !wordRefs.current.includes(el)) {
      wordRefs.current.push(el);
    }
  };

  return (
    <div
      className={`${styles.heroTitle} ${styles.specialFont} relative  !text-[5rem] text-${color} text-center`}
      ref={ContainerRef}
    >
      {title.split("<br>").map((line, index) => (
        <div key={index}>
          {line.split(" ").map((word, i) => (
            <span
              ref={addToRefs}
              key={i}
              className="inline-block mx-1"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainTitleAnimated;
