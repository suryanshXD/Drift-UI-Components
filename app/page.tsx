"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Github from "../public/github-logo.png";
import { useState } from "react";
import React from "react";

export default function Home() {
  return (
    <div className="absolute min-h-screen w-full bg-gray-200 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:24px_24px]  ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5, staggerChildren: 0.1 }}
        className=" relative flex flex-row justify-between items-center text-center sm: pt-8 md:pt-10 md:px-70"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-semibold font-mono  text-stone-900 sm: ml-8 sm: text-xl  md:ml-30 md:text-3xl"
        >
          Drift UI
        </motion.div>
        <div className="flex flex-rows items-center sm: gap-2.5 sm: mr-8 md:gap-5 md:mr-30">
          <motion.div
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-stone-950 p-1 border border-gray-500 rounded-lg"
          >
            <Link
              href={"https://github.com/suryanshXD/Drift-UI"}
              target="_blank"
            >
              <Image src={Github} alt="github-logo" className="size-9" />
            </Link>
          </motion.div>
          <motion.div
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
            className="sm: hidden md:block"
          >
            <Link href={"/docs"}>
              <button className="flex flex-row items-center justify-center border border-gray-400 bg-neutral-200 text-black rounded-md py-1 px-2 cursor-pointer">
                <span className="pt-0.5 pr-2">Get Started </span>
                <ExternalLink />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center text-center sm:px-12 sm: mt-32 md:mt-44 md:px-60"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-semibold text-stone-600 font-mono sm: text-2xl sm: px-5 md:text-3xl"
        >
          Build Beautiful Interfaces, Effortlessly.
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.2, duration: 1 }}
          className=" text-gray-500   font-sans text-center sm: mt-10 sm: px-5 sm: text-md md:px-46 md:mt-10 md:text-lg"
        >
          A modern UI component library crafted for speed, elegance, and motion.
          Designed with Framer Motion, styled with Tailwind CSS, and{" "}
          <motion.span
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-[10px]"
          >
            {" "}
            built to fit seamlessly into your React workflow — so you can focus
            on creating, not coding from scratch.
          </motion.span>
        </motion.div>
        <div className="flex flex-row items-center gap-14 mt-10">
          <Link href={"/docs"}>
            <motion.button
              variants={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-row items-center justify-center border border-gray-400 bg-neutral-200 text-black rounded-md p-2 cursor-pointer"
            >
              <span className="pt-0.5 pr-2">Get Started </span>
              <ExternalLink />
            </motion.button>
          </Link>
          <Link href={"/docs/installation"}>
            <motion.div
              variants={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-stone-700 flex flex-row items-center font-semibold"
            >
              <span className="pr-1.5">
                <DownloadLogo />
              </span>
              <span className="mt-[2px]">Installation</span>
            </motion.div>
          </Link>
        </div>
        <div className="text-stone-600 font-sans font-semibold text-sm sm: mt-[86%] md:mt-46">
          <RotateWord
            words={["Component-Driven", "Motion-Enabled", "Production-Ready"]}
          />
        </div>
      </motion.div>
    </div>
  );
}

const ExternalLink = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

const DownloadLogo = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </>
  );
};

interface content {
  words: string[];
}

const RotateWord = ({ words }: content) => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="flex flex-row items-center"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="ml-[6px]"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </>
  );
};
