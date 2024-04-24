"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import clsx from "clsx";
import { useContext } from "react";
import { useActiveHeaderContext } from "@/context/ActiveHeaderContextProvider";


export const Header = () => {
  const { activeHeader, setActiveHeader, setLastClick } = useActiveHeaderContext();
  
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <motion.ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.anchor}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 hover:font-bold transition",
                  {
                    "text-gray-950, font-bold": activeHeader === link.name,
                  }
                )}
                href={link.anchor}
                onClick={() => {
                  setActiveHeader(link.name)
                  setLastClick(Date.now())
                }}
              >
                {link.name}

                {link.name === activeHeader && (
                  <motion.span
                    className="bg-gray-100 absolute rounded-full inset-0 -z-10"
                    layoutId="activeHeader"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 40,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="group flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 hover:font-bold transition hover:scale-110 gap-1"
              href="https://blog.sohamgupta.co/"
              target="_blank"
            >
              Blog <BsArrowUpRight className="group-hover:rotate-12" />
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};
