import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Benefits } from "@/components/Benefits";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Work />
      <Testimonials />
      <Benefits />
      <Team />
      <Contact />
    </>
  );
}
