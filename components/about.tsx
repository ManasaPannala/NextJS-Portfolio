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
      <p className="mb-3">
       Pursuing my masters in {" "}
        <span className="font-medium">Software Engineering, SJSU</span>, I'm 
        passionate for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
        Java, React, Python, MySQL, SQL Server
        </span>
        . I am also familiar with Machine Learning and advancements of Generative AI. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer or a data scientist.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, reading novels, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        exploring the developments in {" "}
        <span className="font-medium">astronomy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
