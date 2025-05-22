import React from 'react';
import { TestimonialSkeletonProps } from '@/types/testimonial';

const TestimonialSkeleton: React.FC<TestimonialSkeletonProps> = ({ isMobile }) => {
  const cardClasses = isMobile 
    ? "min-w-[280px] h-[280px] p-4"
    : "w-full p-6";

  return (
    <div className={`${cardClasses} bg-gray-200 rounded-2xl animate-pulse`}>
      <div className="w-10 h-10 bg-gray-300 rounded-full mb-3" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="h-4 bg-gray-300 rounded w-1/4" />
      </div>
    </div>
  );
};

export default TestimonialSkeleton; 