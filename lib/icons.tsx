import { FaEdit } from "react-icons/fa";
import { ImChrome } from "react-icons/im";
import {
  SiEthereum,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSolana,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";

export const getTechStackIcon = (tech: string) => {
  const iconClasses =
    "w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-primary";

  const icons: { [key: string]: React.ReactNode } = {
    "Next.js": <SiNextdotjs className={iconClasses} />,
    React: <SiReact className={iconClasses} />,
    "Node.js": <SiNodedotjs className={iconClasses} />,
    PostgreSQL: <SiPostgresql className={iconClasses} />,
    MongoDB: <SiMongodb className={iconClasses} />,
    JavaScript: <SiJavascript className={iconClasses} />,
    "Ethers.js": <SiEthereum className={iconClasses} />,
    Solana: <SiSolana className={iconClasses} />,
    "Web3.js": <SiWeb3Dotjs className={iconClasses} />,
    Tailwind: <SiTailwindcss className={iconClasses} />,
    API: <ImChrome className={iconClasses} />,
    Redis: <SiRedis className={iconClasses} />,
    Prisma: <SiPrisma className={iconClasses} />,
    TypeScript: <SiTypescript className={iconClasses} />,
    "Editor.js": <FaEdit className={iconClasses} />,
    "Web3.storage": <Web3Storage className={iconClasses} />,
  };

  return icons[tech] || null;
};

const Web3Storage = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
  >
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
    />

    <g transform="translate(50,30) scale(0.6)">
      <path
        d="M0 -15 L0 15 M-12 -7 L12 7 M-12 7 L12 -7"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="0" cy="0" r="3" fill="currentColor" />
    </g>

    <g transform="translate(35,65) scale(0.6)">
      <path
        d="M0 -15 L0 15 M-12 -7 L12 7 M-12 7 L12 -7"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="0" cy="0" r="3" fill="currentColor" />
    </g>

    <g transform="translate(65,65) scale(0.6)">
      <path
        d="M0 -15 L0 15 M-12 -7 L12 7 M-12 7 L12 -7"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="0" cy="0" r="3" fill="currentColor" />
    </g>
  </svg>
);
