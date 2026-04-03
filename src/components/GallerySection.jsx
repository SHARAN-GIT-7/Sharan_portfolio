import React from 'react';
import Masonry from './Masonry';

// Import images from assets/Gallery
import img1 from '../assets/Gallery/1.png';
import img2 from '../assets/Gallery/2.png';
import img3 from '../assets/Gallery/3.png';
import img4 from '../assets/Gallery/4.jpg';
import img5 from '../assets/Gallery/5.png';
import img6 from '../assets/Gallery/6.png';
import img7 from '../assets/Gallery/7.png';
import img8 from '../assets/Gallery/8.png';
import img9 from '../assets/Gallery/9.png';
import img10 from '../assets/Gallery/10.png';
import img11 from '../assets/Gallery/11.png';
import img12 from '../assets/Gallery/12.png';
import img13 from '../assets/Gallery/13.png';
import img14 from '../assets/Gallery/14.jpg';
import img15 from '../assets/Gallery/15.png';
import img16 from '../assets/Gallery/16.png';
import img17 from '../assets/Gallery/17.png';
import img18 from '../assets/Gallery/18.png';
import img19 from '../assets/Gallery/19.png';
import img20 from '../assets/Gallery/20.png';

const GallerySection = () => {
    const items = [
        { id: "1", img: img1, height: 600 },
        { id: "2", img: img2, height: 400 },
        { id: "3", img: img3, height: 500 },
        { id: "4", img: img4, height: 700 },
        { id: "5", img: img5, height: 450 },
        { id: "6", img: img6, height: 550 },
        { id: "7", img: img7, height: 650 },
        { id: "8", img: img8, height: 400 },
        { id: "9", img: img9, height: 500 },
        { id: "10", img: img10, height: 600 },
        { id: "11", img: img11, height: 450 },
        { id: "12", img: img12, height: 550 },
        { id: "13", img: img13, height: 400 },
        { id: "14", img: img14, height: 600 },
        { id: "15", img: img15, height: 500 },
        { id: "16", img: img16, height: 650 },
        { id: "17", img: img17, height: 600 },
        { id: "18", img: img18, height: 500 },
        { id: "19", img: img19, height: 650 },
        { id: "20", img: img20, height: 650 },
    ];

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-black relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-6xl font-display  font-bold text-white mb-4">
                        Curated <span className="text-primary italic">Works</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl">
                        A collection of visual experiments, design concepts, and captured moments that define my creative journey.
                    </p>
                </div>
                
                <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.8}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.97}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                />
            </div>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/100 to-transparent pointer-events-none z-10"></div>
        </section>
    );
};

export default GallerySection;
