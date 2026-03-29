import React from 'react';

const InfiniteText = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-black select-none">
      {/* Background Outlined Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none text-center">
        <h2 className="text-[20vw] font-black uppercase tracking-wider text-transparent leading-none" 
            style={{ WebkitTextStroke: '2px white' }}>
          SSSharanraj
        </h2>
      </div>

      {/* Infinite Ticker */}
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex overflow-hidden   py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center text-4xl md:text-6xl font-display font-medium uppercase tracking-wider px-4">
                <span className="mx-8 text-white">Let's work together</span>
                <span className="text-primary">✦</span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center text-4xl md:text-6xl font-display font-medium uppercase tracking-tight px-4">
                <span className="mx-8 text-white">Let's work together</span>
                <span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteText;
