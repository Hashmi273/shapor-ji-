import React, { useEffect, useRef, useState } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${mouseX}px`;
        glowRef.current.style.top = `${mouseY}px`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, select, textarea, [role="button"], .card-lift, .group')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }

      rafId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', checkHover);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', checkHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div 
        ref={glowRef} 
        className={`cursor-glow hidden lg:block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        aria-hidden="true" 
      />
      <div 
        ref={dotRef} 
        className={`cursor-dot hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-150 !bg-zion-orange' : 'scale-100'}`} 
        aria-hidden="true" 
      />
      <div 
        ref={followerRef} 
        className={`cursor-follower hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovered ? '!w-12 !h-12 !border-zion-orange !bg-zion-orange/10 scale-110' : ''}`} 
        aria-hidden="true" 
      />
    </>
  );
}
