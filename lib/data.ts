import chromeExtImg from "@/public/chrome-ext.png";
import paymentAppImg from "@/public/payment-app-v1.png";
import cryptImg from "@/public/crypt.png";
import dogRaterImg from "@/public/dograter.png";
import web3wallet from "@/public/web3-wallet.png";
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

export const projectsData = {
  webDev: [
    {
      title: "Crypt - Anonymous Community",
      description: "A full stack web application for students to discuss academic topics anonymously.",
      image: cryptImg,
      stack: ["Next.js", "Redis", "Prisma", "TypeScript", "Editor.js"],
      github: "https://github.com/gupta-soham/Crypt",
      live: "https://crypt-media.vercel.app/",
    },
    {
      title: "Dog Rater",
      description: "A Tinder-like app for rating dog breeds with a leaderboard and real-time global chat.",
      image: dogRaterImg,
      stack: ["Next.js", "MongoDB", "TypeScript", "Tailwind"],
      github: "https://github.com/gupta-soham/DogRater",
      live: "https://dog-rater.vercel.app/",
    },
    {
      title: "Payments App",
      description: "A full-stack Payment application for creating accounts and transferring money.",
      image: paymentAppImg,
      stack: ["React", "MongoDB", "Tailwind", "Node.js"],
      github: "https://github.com/gupta-soham/paymentsApp/",
      live: "https://app-payments.vercel.app/",
    },
    {
      title: "IPL Chrome Extension",
      description: "A Chrome extension for live IPL cricket match scores and details.",
      image: chromeExtImg,
      stack: ["API", "JavaScript", "Tailwind"],
      github: "https://github.com/gupta-soham/ipl-chrome-extension/",
    },
  ],
  web3: [
    {
      title: "Web3 Wallet Generator",
      description: "Decentralized Web3 generator that generates both ETH and SOL wallets",
      image: web3wallet,
      stack: ["Next.js", "Ethers.js", "Web3.js", "Tailwind"],
      github: "https://github.com/gupta-soham/web3-wallet",
      live: "https://walletweb3.vercel.app/",
    },
  ],
} as const;

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
