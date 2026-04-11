import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

/**
 * MagneticButton component based on your requested GSAP effect.
 * It features a "magnetic" follower that follows the cursor on hover.
 */
const MagneticButton = ({ 
    children, 
    className = "", 
    href, 
    onClick, 
    type = "button",
    ...props 
}) => {
  const buttonRef = useRef(null);
  const followerRef = useRef(null);
  const xTo = useRef();
  const yTo = useRef();

  const { contextSafe } = useGSAP(() => {
    // Set up quickTo for smooth performance
    xTo.current = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3.out" });
    yTo.current = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3.out" });

    // Initial state: hide and center the follower
    gsap.set(followerRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
    });
  }, { scope: buttonRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(followerRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(followerRef.current, {
      scale: 0,
      duration: 0.4,
      ease: "power2.in"
    });
  });

  const handleMouseMove = contextSafe((e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const { top, left } = rect;
    xTo.current(e.clientX - left);
    yTo.current(e.clientY - top);
  });

  // Decide which tag to render based on props
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={buttonRef}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={`group relative overflow-hidden flex items-center justify-center transition-all duration-300 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Magnetic Follower (Royal Yellow circle) */}
      <div 
        ref={followerRef}
        className="absolute w-[200px] h-[150px] bg-primary rounded-[50%] pointer-events-none z-0 left-0 top-0"
      />
      
      {/* Button Content (Text switches to black on hover) */}
      <span className="relative z-10 pointer-events-none transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
    </Tag>
  );
};

export default MagneticButton;
