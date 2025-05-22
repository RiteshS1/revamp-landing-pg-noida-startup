import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useAnimation, TargetAndTransition } from 'framer-motion';
import { TestimonialCarouselProps } from '@/types/testimonial';
import TestimonialCard from './TestimonialCard';

const ANIMATION_DURATION = 16;

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  isMobile,
  isHovered,
  onHoverChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const startAnimation = useCallback(async () => {
    if (!isHovered && document.visibilityState === 'visible') {
      const animation = {
        [isMobile ? 'x' : 'y']: isMobile ? ['0%', '-50%'] : ['-50%', '0%'],
        transition: {
          duration: ANIMATION_DURATION,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }
      } as const;
      await controls.start(animation as any);
    }
  }, [controls, isHovered, isMobile]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startAnimation();
      } else {
        controls.stop();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    startAnimation();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      controls.stop();
    };
  }, [controls, startAnimation]);

  const handleMouseEnter = useCallback(async () => {
    onHoverChange(true);
    controls.stop();
  }, [controls, onHoverChange]);

  const handleMouseLeave = useCallback(() => {
    onHoverChange(false);
  }, [onHoverChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      // Add keyboard navigation logic here if needed
    }
  }, []);

  const carouselClasses = isMobile 
    ? "w-full h-[300px] overflow-hidden relative rounded-2xl"
    : "w-full max-w-[400px] lg:max-w-[480px] h-[min(600px,90vh)] overflow-hidden relative rounded-2xl";

  const contentClasses = isMobile
    ? "flex space-x-4 h-full"
    : "flex flex-col space-y-12";

  return (
    <div 
      ref={containerRef}
      className={carouselClasses}
      role="region"
      aria-label={`${isMobile ? 'Mobile' : 'Desktop'} testimonials carousel with ${testimonials.length} testimonials`}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Blur overlays */}
      {isMobile ? (
        <>
          <div className="absolute top-0 left-0 min-w-8 h-full  bg-gradient-to-r from-white/50 via-white/20 to-transparent backdrop-blur-xs z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 min-w-8 h-full bg-gradient-to-l from-white/50 via-white/20 to-transparent backdrop-blur-xs z-10 pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/50 via-white/20 to-transparent backdrop-blur-xs z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/50 via-white/20 to-transparent backdrop-blur-xs z-10 pointer-events-none" />
        </>
      )}

      <motion.div
        className={contentClasses}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${isMobile ? 'mobile' : 'desktop'}-${testimonial.name}-${index}`}
            testimonial={testimonial}
            isMobile={isMobile}
            index={index % testimonials.length}
            totalItems={testimonials.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel; 