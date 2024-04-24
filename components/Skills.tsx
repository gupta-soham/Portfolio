"use client";
import Marquee from "react-fast-marquee";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { animate, motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
      // duration: 1.5,
      ease: "easeInOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading name="My Skills" />

      {/* <Marquee autoFill pauseOnClick> */}
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            // className="inline-block p-4 mr-4 font-semibold text-black bg-gray-200 rounded-full "
            className="bg-white blackBorder rounded-xl px-5 py-3"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            // for the animation to occur once 👇
            // viewport = {{
            //   once: true,
            // }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      {/* </Marquee> */}
    </section>
  );
}
