import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import SectionNavDots from './components/SectionNavDots';
import { useState } from 'react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <SectionNavDots />

      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <EducationCertifications />
        <Hackathons />
        <Contact />
      </main>

      <Footer onOpenResume={() => setIsResumeOpen(true)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ScrollToTop />
    </div>
  );
}

