import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import TechMarquee from '../components/TechMarquee';

import ScrollReveal from '../components/ScrollReveal';
import GallerySection from '../components/GallerySection';
import InfiniteText from '../components/InfiniteText';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FlowingMenu from '../components/FlowingMenu';

const Portfolio = () => {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      <Preloader />
      <Navbar />
      <Hero />
      <TechMarquee />
      <div className="container mx-auto font-display ml-30
       px-6 py-32 min-h-[70vh] flex flex-col justify-center tracking-wide">
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

      {/* Services Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Services I <span className="text-primary italic">Provide</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl font-sans">
            Transforming ideas into digital reality through specialized design and development solutions.
          </p>
        </div>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu 
            items={[
              { link: '#', text: 'UI/UX Design', image: 'https://img.freepik.com/premium-photo/gradient-uiux-design-elements_1165404-46365.jpg' },
              { link: '#', text: 'Graphic Designing', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
              { link: '#', text: 'Brand Designing', image: 'https://img.freepik.com/premium-vector/blue-professional-business-branding-stationery-set_616632-1823.jpg' },
              { link: '#', text: 'Web/App Development', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800' }
            ]}
            speed={25}
          />
        </div>
      </section>

      <GallerySection />
      <InfiniteText />
      <Contact />
      <Footer />
    </main>


  );
};

export default Portfolio;