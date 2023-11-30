'use client';

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const homeCtaData = [
  {
    heading: "Create Your Recipe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.",
    imgSrc: "https://images.unsplash.com/photo-1535837487710-a191373a20ae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3JlYXRlfHx8fHx8MTcwMTM0MjczNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
  },
  {
    heading: "Random Recipe Finder",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.",
    imgSrc: "https://images.unsplash.com/photo-1538032781648-de9b802e4bc2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGlja2VyfHx8fHx8MTcwMTM0Mjc5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
  },
  {
    heading: "Cooking Assistant",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.",
    imgSrc: "https://images.unsplash.com/photo-1564844536308-50b114a1d946?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29va3x8fHx8fDE3MDEzNDI4MjE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
  },
  {
    heading: "Share Your Thoughts",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.",
    imgSrc: "https://images.unsplash.com/photo-1542948338-ded3dbb75080?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1200&ixid=MnwxfDB8MXxyYW5kb218MHx8cmV2aWV3fHx8fHx8MTcwMTM0MjkwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
  }
]

export default function HomeCta() {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full lg:w-1/2 mx-auto">
        {homeCtaData.map((card) => (
          <Card
            heading={card.heading}
            description={card.description}
            imgSrc={card.imgSrc}
            className="w-full h-full bg-slate-300 overflow-hidden cursor-pointer group"
          />
        ))}
      </div>
  );
};

const Card = ({ heading, description, imgSrc, className }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className={`${className} inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500 w-full h-full`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "contain",
      }}
    >
      <div className="p-4 relative z-20 h-full group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-2xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};
