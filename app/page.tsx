import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import VoiceAI from "./components/VoiceAI";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <VoiceAI />
        <Projects />
        <Clients />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
