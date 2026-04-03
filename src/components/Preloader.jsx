import React, { useEffect, useState } from 'react';

const languages = [
  "Hello",       // English
  "வணக்கம்",      // Tamil
  "నమస్కారం",     // Telugu
  "നമസ്കാരം",     // Malayalam
  "नमस्ते",       // Hindi
  "ನಮಸ್ಕಾರ",      // Kannada
  "Hola",        // Spanish
  "Bonjour",     // French
  "Hallo",       // German
  "こんにちは",   // Japanese
  "வணக்கம்",    // Tamil
];

const Preloader = () => {
  const [phase, setPhase] = useState(0); // 0: typing "Hello", 1: flashing languages, 2: fading out
  const [displayedText, setDisplayedText] = useState('');

  // Phase 0: Type "Hello"
  useEffect(() => {
    if (phase !== 0) return;

    const textToType = languages[0];
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      currentIndex++;
      setDisplayedText(textToType.slice(0, currentIndex));
      
      if (currentIndex === textToType.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setPhase(1); // Move to flashing languages
        }, 150); // Pause for 250ms before switching (750 + 250 = 1000ms)
      }
    }, 50); // 150ms per letter

    return () => clearInterval(typeInterval);
  }, [phase]);

  // Phase 1: Flashing languages
  useEffect(() => {
    if (phase !== 1) return;

    // Immediately display the second language
    setDisplayedText(languages[1]);

    let flashes = 1;

    const flashInterval = setInterval(() => {
      flashes++;
      if (flashes >= languages.length) {
        clearInterval(flashInterval);
        setPhase(2); // End exactly at 3000ms total
      } else {
        setDisplayedText(languages[flashes]);
      }
    }, 200); // 200ms per language flash for the remaining 10 languages = 2000ms

    return () => clearInterval(flashInterval);
  }, [phase]);

  return (
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-black transition-opacity duration-1000 ${
        phase === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-primary text-2xl md:text-3xl font-display font-semibold tracking-normal drop-shadow-2xl">
        {displayedText}
      </div>
    </div>
  );
};

export default Preloader;
