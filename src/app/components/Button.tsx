"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Button = ({
  title,
  Icon,
  backgroundColor = "bg-yellow-300",
}: {
  title: string;
  backgroundColor?: string;
  Icon?: React.ComponentType;
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const mainPage = useRef(null);
  useEffect(() => {
    gsap.from(mainPage.current, {
      duration: 2,
      y: 50,
      x: -50,
      opacity: 0,
      ease: "power3.out",
      scrub: true,
    });
  }, []);
  return (
    <button
      ref={mainPage}
      className={`group capitalize tracking-wide ${backgroundColor} text-sm overflow-hidden text-blue-200 rounded-full py-2 mt-5 px-8 cursor-pointer font-semibold relative h-10  w-48 flex items-center justify-start `}
    >
      <span className="text-sm group-hover:text-lg group-hover:translate-x-1.5 duration-300 ease-in-out">
        {Icon && <Icon />}
      </span>
      <p className="absolute top-0 left-0 w-full text-center transition-transform group-hover:opacity-10 duration-300 ease-out translate-y-[8px] group-hover:-translate-y-[100%] ml-2">
        {title}
      </p>
      <p className="absolute top-full left-0 w-full text-center opacity-10 group-hover:opacity-100 transition-transform duration-300 ease-in-out group-hover:translate-y-[-155%] ml-2">
        {title}
      </p>
    </button>
  );
};

export default Button;
