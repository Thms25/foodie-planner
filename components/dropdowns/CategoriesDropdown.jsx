"use client";

import { arrowRight } from "@/utils/svgData";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const categories = [
  {
    title: "Top Of The Month",
    sub: "Browse through what all of you prefered this month",
    link: "#",
  },
  {
    title: "Recipes Of The Season",
    sub: "Get inspired to eat according to the weather",
    link: "#",
  },
  {
    title: "Most Cooked Recipes",
    sub: "hello, description tba",
    link: "#",
  },
  {
    title: "Vegetarian Corner",
    sub: "Fin the best recipes with no animals on the memnu",
    link: "#",
  },
];

export default function CategoriesDropdown({ className }) {
  return (
    <section className={className}>
      <div className="mx-4 max-w-3xl">
        {categories.map((cat, index) => (
          <Link
            key={index}
            heading={cat.title}
            subheading={cat.sub}
            href={cat.link}
          />
        ))}
      </div>
    </section>
  );
}

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="text-left group relative flex items-center justify-between border-b-2 border-neutral-700 py-3  md:py-8 transition-colors duration-400 hover:border-neutral-50"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -10 },
          }}
          transition={{
            type: "EaseIn",
            staggerChildren: 0.075,
            delayChildren: 0.1,
          }}
          className="relative z-10 block text-xl font-bold text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 md:text-3xl"
        >
          <span className="inline-block">{heading}</span>
        </motion.span>
        <span className="text-md md:text-xl relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10"
      >
        <div className="text-black-800 w-10 h-10 ">{arrowRight}</div>
      </motion.div>
    </motion.a>
  );
};
