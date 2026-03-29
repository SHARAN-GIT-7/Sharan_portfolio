import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import TechMarquee from '../components/TechMarquee';

import ScrollReveal from '../components/ScrollReveal';
import InfiniteText from '../components/InfiniteText';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      <Preloader />
      <Navbar />
      <Hero />
      <TechMarquee />
      <div className="container mx-auto font-display ml-30
       px-6 py-32 min-h-[70vh] flex flex-col justify-center">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={10}
          containerClassName="max-w-7xl"
          textClassName="text-white selection:text-black selection:bg-primary"
        >
          I mix design, code, and a little bit of chaos to build things people actually enjoy using. Always chasing better UI, smarter logic, and that tiny detail most people miss.
        </ScrollReveal>
      </div>
      
      <InfiniteText />
      <Contact />
      <Footer />
    </main>

  );
};

export default Portfolio;