"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { projectsData } from "@/lib/data";
import { getTechStackIcon } from "@/lib/icons";
import { useSectionInView } from "@/lib/hook";

export default function ProjectShowcase() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeTab, setActiveTab] = useState("webDev");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveTab((current) => (current === "webDev" ? "web3" : "webDev"));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <div
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value);
            setIsAutoPlay(false);
          }}
          className="w-full"
        >
          <TabsList className="w-full max-w-xs mx-auto grid grid-cols-2 mb-12">
            <TabsTrigger
              value="webDev"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Web Development
            </TabsTrigger>
            <TabsTrigger
              value="web3"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Web3
            </TabsTrigger>
          </TabsList>

          {Object.entries(projectsData).map(([key, projects]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

interface Project {
  image: string | StaticImageData;
  title: string;
  description: string;
  stack: readonly string[];
  github: string;
  live?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="group relative bg-card overflow-hidden rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </div>

        <div className="relative p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {project.stack.map((tech: string) => (
                <div key={tech} title={tech}>
                  {getTechStackIcon(tech)}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="sr-only">GitHub Repository</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span className="sr-only">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
