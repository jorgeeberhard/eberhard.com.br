import Header from "@/app/ui/header";
import About from "@/app/ui/about";
import Stack from "@/app/ui/stack";
import { ProjectWrapper } from "@/app/ui/projects";
import Contact from "@/app/ui/contact";

export default function Home() {
  return (
    <div className="mx-[20px]">
      <Header />
      <About />
      <Stack />
      <ProjectWrapper />
      <Contact />
    </div>
  );
}
