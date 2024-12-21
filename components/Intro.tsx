"use client";
import Image from "next/image";
import SG from "@/public/Soham Gupta.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hook";
import { useActiveHeaderContext } from "@/context/ActiveHeaderContextProvider";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveHeader, setLastClick } = useActiveHeaderContext();

  return (
    <section id="home" className="mb-28 max-2-[45rem] text-center sm:mb-0 scroll-mt-[100rem]" ref={ref}>
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
              src={SG}
              alt="Soham's Portrait"
              quality="95"
              priority={true}
              className="h-[10rem] w-[10rem] rounded-full object-cover border-[0.35rem] border-white-shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 animate-wave text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.6,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, {"I'm"} Soham Gupta.</span>
          <br />
          {/* {" I'm a "}versatile technologist passionate about crafting innovative{" "}<span className="font-bold">digital solutions.</span>  */}
          I enjoy building{" "}
          <span className="font-bold underline decoration-sky-500 hover:text-sky-500 hover:no-underline">full-stack web applications</span>,
          exploring the frontiers of <span className="font-bold underline decoration-pink-500 hover:text-pink-500 hover:no-underline">web3</span>,
          and <span className="italic">optimizing infrastructure</span> through{" "}
          <span className="font-bold underline decoration-indigo-500 hover:text-indigo-500 hover:no-underline">DevOps</span> practices. My focus is{" "}
          <span className="font-bold underline hover:text-sky-500 hover:no-underline">React (Next.js)</span>.
        </motion.h1>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveHeader("Contact");
            setLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="https://ggl.link/resume-sg"
          target="_blank"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-black transition blackBorder"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/soham-gupta-in/"
            target="_blank"
            className="bg-white text-gray-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-black active:scale-105 transition blackBorder"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/gupta-soham"
            target="_blank"
            className="bg-white text-gray-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-black active:scale-105 transition blackBorder"
          >
            <BsGithub />
          </a>

          <a
            href="https://x.com/sohamgpt"
            target="_blank"
            className="bg-white text-gray-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-black active:scale-105 transition blackBorder"
          >
            <FaXTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
