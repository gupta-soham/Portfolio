import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiJavascript,
    SiWeb3Dotjs,
    SiTailwindcss,
    SiEthereum,
    SiRedis,
    SiPrisma,
    SiTypescript,
  } from "react-icons/si";
  import { ImChrome } from "react-icons/im";
  import { FaEdit } from "react-icons/fa";
  
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
      "Web3.js": <SiWeb3Dotjs className={iconClasses} />,
      Tailwind: <SiTailwindcss className={iconClasses} />,
      API: <ImChrome className={iconClasses} />,
      Redis: <SiRedis className={iconClasses} />,
      Prisma: <SiPrisma className={iconClasses} />,
      TypeScript: <SiTypescript className={iconClasses} />,
      "Editor.js": <FaEdit className={iconClasses} />,
    };
  
    return icons[tech] || null;
  };
  
  