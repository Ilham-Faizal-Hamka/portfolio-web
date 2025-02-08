"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full translate-y-[-150px] w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mx-[10px] h-5 w-5" />
          <h1 className="Welcome-text mr-[10px] text-[13px]">
            Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello! I&apos;m
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              <TypeAnimation
              sequence={[
                "Faizal Hamka",
                3000,
                "Web Developer",
                2000,
                "Frontend Dev",
                2000,
                "Backend Dev",
                2000,
                "Fullstack Dev",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              >
              </TypeAnimation>
              {" "}
            </span>
            <br />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/stack.png"
          alt="work icons"
          height={800}
          width={800}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;