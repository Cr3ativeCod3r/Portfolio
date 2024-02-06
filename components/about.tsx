"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-zinc-200">
      I am 21 years old and I am a full-stack developer. I enjoy working with various technologies, and currently, I am self-learning by working on projects and studying computer science. I am particularly interested in programming in the context of gambling - I love games of chance, and probability seems to be a fascinating field. I would like to combine my mathematical skills with programming in this area.
      </p>

      <p>
      
      </p>
    </motion.section>
  );
}
