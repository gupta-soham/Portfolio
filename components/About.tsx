"use client";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="m-25 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading name="About Me" />

      <p className="mb-3">
        Currently pursuing my degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I enrolled in a coding cohort and
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of software enginnering</span>{" "}
        is the problem-solving aspect. I <span>love</span>{" "}
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB && PostgreSQL(Prisma)
        </span>
        . I am also familiar with TypeScript and know about Turborepos. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time/intern position</span> as a
        software developer.
      </p>

    </motion.section>
  );
}
