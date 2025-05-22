export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  bg: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isMobile: boolean;
  index: number;
  totalItems: number;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  isMobile: boolean;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
}

export interface TestimonialSkeletonProps {
  isMobile?: boolean;
} 