'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import RecipeCard from "./RecipeCard";

const imgs = [
  "/imgs/nature/1.jpg",
  "/imgs/nature/2.jpg",
  "/imgs/nature/3.jpg",
  "/imgs/nature/4.jpg",
  "/imgs/nature/5.jpg",
  "/imgs/nature/6.jpg",
  "/imgs/nature/7.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function RecipeCaroussel ({ recipes }) {
  const [dragging, setDragging] = useState(false);

  const [imgIndex, setImgIndex] = useState(0);

  const dragProgress = useMotionValue(0);
  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      dragProgress.set(0);
    }
  });

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const handleDragEnd = () => {
    const x = dragX.get();

    if (x <= 50 && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= 50 && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative h-full w-full lg:max-w-1/2 overflow-hidden p-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="pointer-events-auto flex cursor-grab items-center active:cursor-grabbing"
      >
        {recipes.map((recipe, idx) => {
          return (
            <motion.div
              style={{
                backgroundImage: `url(${recipe.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex !== idx ? 0.85 : 0.95,
              }}
              transition={SPRING_OPTIONS}
              key={idx}
              className="w-full shrink-0 rounded-xl object-contain aspect-video shadow-xl"
            />
          );
        })}
      </motion.div>

      <Dots setImgIndex={setImgIndex} imgIndex={imgIndex} />

      <GradientEdges />
    </div>
  );
};

const Dots = ({ setImgIndex, imgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from(Array(imgs.length).keys()).map((dot) => {
        return (
          <button
            onClick={() => setImgIndex(dot)}
            className={`h-3 w-3 rounded-full transition-colors ${
              dot === imgIndex ? "bg-primary" : "bg-secondary"
            }`}
            key={dot}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => (
  <>
    <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
    <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
  </>
);
