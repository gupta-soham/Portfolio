import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

      <Intro />
      <Divider />
      <About />
      <ProjectShowcase />
      <Skills />
      <Experience />
      <Contact />
      
    </main>
  );
}
