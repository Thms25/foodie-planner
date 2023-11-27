'use client';

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const categories = [
  {
    title: "Top Of The Month",
    sub: "Browse through what all of you prefered this month",
    ing: "/images/foodBanner.jpg",
    link: "#"
  },
  {
    title: "Recipes Of The Season",
    sub: "Get inspired to eat according to the weather",
    ing: "/images/foodBanner.jpg",
    link: "#"
  },
  {
    title: "Most Cooked Recipes",
    sub: "hello, description tba",
    ing: "/images/foodBanner.jpg",
    link: "#"
  },
  {
    title: "Vegetarian Corner",
    sub: "Fin the best recipes with no animals on the memnu",
    ing: "/images/foodBanner.jpg",
    link: "#"
  },
]

export default function CategoriesDropdown () {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {categories.map((cat, index) => (
          <Link
            key={index}
            heading={cat.title}
            subheading={cat.sub}
            imgSrc={cat.ing}
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

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

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
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring", damping: 100 }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="text-6xl absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

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
        className="relative z-10 p-4"
      >
        <p className="text-5xl text-neutral-50" > arrow </p>
      </motion.div>
    </motion.a>
  );
};