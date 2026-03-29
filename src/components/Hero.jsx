import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 252;
// Vite's import.meta.glob lets us dynamic load assets from a folder at build time or resolve correctly during dev.
// The user specified images in src/assets/videos/Home page video/
const imagesGlob = import.meta.glob('../assets/videos/Home page video/*.jpg', { eager: true, as: 'url' });

const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textOverlay1Ref = useRef(null);
  const textOverlay2Ref = useRef(null);
  const textOverlay3Ref = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages = [];
      let loadedCount = 0;
      
      // Sort entries to make sure frames are sequential
      const entries = Object.entries(imagesGlob).sort(([a], [b]) => a.localeCompare(b));
      
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const paddedIndex = i.toString().padStart(3, '0');
        let src = '';
        if (entries.length >= i) {
          src = entries[i - 1][1];
        } else {
          // Fallback if glob fails or is missing some frames
          src = `/src/assets/videos/Home page video/ezgif-frame-${paddedIndex}.jpg`;
        }

        const img = new Image();
        img.src = src;
        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            setImagesLoaded(loadedCount);
            resolve();
          };
          img.onerror = () => {
             // Continue anyway on error so we don't hold up forever
             loadedCount++;
             setImagesLoaded(loadedCount);
             resolve();
          };
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    // Draw the first frame initially to fill the screen
    const drawFirstFrame = () => {
       const img = images[0];
       if(img && img.complete && img.naturalHeight !== 0 && canvas) {
           canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
           // Scale to cover the entire canvas
           const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
           const x = (canvas.width / 2) - (img.width / 2) * scale;
           const y = (canvas.height / 2) - (img.height / 2) * scale;
           context.drawImage(img, x, y, img.width * scale, img.height * scale);
       }
    };
    
    drawFirstFrame();
    window.addEventListener('resize', drawFirstFrame);

    const handleScroll = () => {
      if (!containerRef.current || !canvas) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollableDistance = height - window.innerHeight;
      
      // Calculate scroll progress from 0.0 to 1.0 based on how far we scrolled the 400vh container
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, Math.min(progress, 1)));
      
      // Map progress to frame index
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );

      // Handle text overlay 1 animation (frames 0 to 28)
      if (textOverlay1Ref.current) {
        if (frameIndex <= 28) {
          let opacity = 1;
          let translateY = 0;
          
          if (frameIndex > 15) {
             // Fade out and move up during the remaining frames up to 28
             const fadeProgress = (frameIndex - 15) / 13; // 0 to 1
             opacity = 1 - fadeProgress;
             translateY = -50 * fadeProgress;
          }
          
          textOverlay1Ref.current.style.opacity = opacity;
          textOverlay1Ref.current.style.transform = `translateY(${translateY}px)`;
          textOverlay1Ref.current.style.visibility = 'visible';
        } else {
          // Hide completely after frame 28
          textOverlay1Ref.current.style.opacity = 0;
          textOverlay1Ref.current.style.visibility = 'hidden';
          textOverlay1Ref.current.style.transform = `translateY(-50px)`;
        }
      }

      // Handle text overlay 2 animation (frames 35 to 86)
      if (textOverlay2Ref.current) {
        if (frameIndex >= 35 && frameIndex <= 86) {
          let opacity = 1;
          let translateY = 0;
          
          if (frameIndex < 45) {
             // Fade in and slide up slightly for 10 frames
             const fadeInProgress = (frameIndex - 35) / 10;
             opacity = fadeInProgress;
             translateY = 20 * (1 - fadeInProgress);
          } else if (frameIndex > 75) {
             // Fade out and move up during the last 11 frames up to 86
             const fadeProgress = (frameIndex - 75) / 11;
             opacity = 1 - fadeProgress;
             translateY = -50 * fadeProgress;
          }
          
          textOverlay2Ref.current.style.opacity = opacity;
          textOverlay2Ref.current.style.transform = `translateY(${translateY}px)`;
          textOverlay2Ref.current.style.visibility = 'visible';
        } else {
          textOverlay2Ref.current.style.opacity = 0;
          textOverlay2Ref.current.style.visibility = 'hidden';
          textOverlay2Ref.current.style.transform = frameIndex < 35 ? `translateY(20px)` : `translateY(-50px)`;
        }
      }

      // Handle text overlay 3 animation (frames 150 to 195)
      if (textOverlay3Ref.current) {
        if (frameIndex >= 150 && frameIndex <= 195) {
          let opacity = 1;
          let translateY = 0;
          
          if (frameIndex < 160) {
             // Fade in and slide up slightly for 10 frames
             const fadeInProgress = (frameIndex - 150) / 10;
             opacity = fadeInProgress;
             translateY = 20 * (1 - fadeInProgress);
          } else if (frameIndex > 185) {
             // Fade out and move up during the last 10 frames up to 195
             const fadeProgress = (frameIndex - 185) / 10;
             opacity = 1 - fadeProgress;
             translateY = -50 * fadeProgress;
          }
          
          textOverlay3Ref.current.style.opacity = opacity;
          textOverlay3Ref.current.style.transform = `translateY(${translateY}px)`;
          textOverlay3Ref.current.style.visibility = 'visible';
        } else {
          textOverlay3Ref.current.style.opacity = 0;
          textOverlay3Ref.current.style.visibility = 'hidden';
          textOverlay3Ref.current.style.transform = frameIndex < 150 ? `translateY(20px)` : `translateY(-50px)`;
        }
      }

      requestAnimationFrame(() => {
        const img = images[frameIndex];
        if (img && img.complete && img.naturalHeight !== 0) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', drawFirstFrame);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Preloader was moved to top-level Portfolio component */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Frame 1 to 28 Text Overlay (Right Side) */}
        <div 
          ref={textOverlay1Ref}
          className="absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col justify-center items-start text-left text-white p-8 md:p-16 pointer-events-none opacity-0 transition-opacity duration-100 ease-linear"
        >
          <div 
            className="max-w-xl md:pr-16" 
            style={{ animation: 'initialSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold  mb-6 tracking-wide drop-shadow-2xl text-primary">
              <span className="text-white/80 font-sans font-bold text-3xl  mb-2">Hello,</span><br></br>
              I am Sharan
            </h1>
            <p className="text-lg md:text-xl font-light opacity-95 leading-relaxed drop-shadow-lg">
              An AI & Data Science student passionate about building intelligent and user-centric digital experiences. I blend creativity and engineering to design and develop impactful real-world products.
            </p>
          </div>
        </div>

        {/* Frame 35 to 86 Text Overlay (Left Side) */}
        <div 
          ref={textOverlay2Ref}
          className="absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col justify-center items-start text-left text-white p-8 md:p-16 pointer-events-none opacity-0 transition-opacity duration-100 ease-linear"
        >
          <div className="max-w-xl md:pl-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-wide drop-shadow-2xl text-primary">
              I am a UI/UX & <br></br>
              Graphic Designer
            </h1>
            <p className="text-lg md:text-xl font-light opacity-95 leading-relaxed drop-shadow-lg">
              I craft intuitive UI/UX experiences with a focus on clarity, usability, and modern visual aesthetics. My design process combines user research, wireframing, and polished high-fidelity interfaces.
            </p>
          </div>
        </div>

        {/* Frame 150 to 195 Text Overlay (Right Side) */}
        <div 
          ref={textOverlay3Ref}
          className="absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col justify-center items-start text-left text-white p-8 md:p-16 pointer-events-none opacity-0 transition-opacity duration-100 ease-linear"
        >
          <div className="max-w-xl md:pr-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-wide drop-shadow-2xl text-primary">
              I am a Web/Mobile app developer
            </h1>
            <p className="text-lg md:text-xl font-light opacity-95 leading-relaxed drop-shadow-lg">
              I build scalable web and AI-powered applications using modern frameworks and clean architecture. My development approach focuses on performance, responsiveness, and real-world problem solving.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;