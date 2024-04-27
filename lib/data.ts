import chromeExtImg from "@/public/chrome-ext.png";
import paymentApp1Img from "@/public/payment-app-v1.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiVlcmediaplayer } from "react-icons/si";

export const links = [
  {
    name: "Home",
    anchor: "#home",
  },
  {
    name: "About",
    anchor: "#about",
  },
  {
    name: "Projects",
    anchor: "#projects",
  },
  {
    name: "Skills",
    anchor: "#skills",
  },
  {
    name: "Experience",
    anchor: "#experience",
  },
  {
    name: "Contact",
    anchor: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Google Summer of Code",
    location: "Remote",
    description:
      "Contributed to VLC media player as a Google Summer of Code intern, optimizing video codecs and streaming for 2B+ global users.",
    icon: React.createElement(SiVlcmediaplayer),
    date: "May 2023 - Aug 2023",
  },
  {
    title: "Undergraduate at Sir MVIT",
    location: "Bangalore, IN",
    description:
      "I'm a sophomore in college majoring in Computer Science, with a passion for leveraging technology to build innovative solutions.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Payments App",
    description:
      "A full-stack Payment application which allows users to create and view their account balance and transfer money to other registered users.",
    tags: ["React", "Mongo DB", "Tailwind", "Express JS", "JWT Tokens"],
    imageUrl: paymentApp1Img,
    link: "https://github.com/gupta-soham/paymentsApp/",
  },
  {
    title: "Cricket Chrome Extension",
    description:
      "A Chrome extension that fetches live scores and other match details for the Indian Premier League (IPL) cricket matches using the API provided by cricketdata.org.",
    tags: ["API", "Javascript", "CSS", "JSON"],
    imageUrl: chromeExtImg,
    link: "https://github.com/gupta-soham/ipl-chrome-extension/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Recoil",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Java",
  "Python",
  "C",
  "C++",
  "Docker",
  "Turborepos"

  // "Apollo",
  // "GraphQL",
  // "Django",
] as const;
