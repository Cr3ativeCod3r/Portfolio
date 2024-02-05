"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span >Hello i'm Kamil </span> I'm a IT student
        <span > at Lublin university of technology </span> 
        I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span>Nodejs</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
    

        <a
          className="mr-10 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/kamil-banaszek-956938267/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Cr3ativeCod3r"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
