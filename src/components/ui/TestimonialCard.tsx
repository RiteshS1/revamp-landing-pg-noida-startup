import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TestimonialCardProps } from '@/types/testimonial';
import quote from '../../../public/quote.png';

const cardStyles = {
  base: "rounded-2xl transform transition-all duration-300 shadow-md hover:shadow-lg",
  mobile: "min-w-[280px] h-[280px] p-4",
  desktop: "w-full p-6",
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isMobile,
  index,
  totalItems,
}) => {
  const { quote: quoteText, name, title, bg } = testimonial;
  const cardId = `testimonial-${index}`;

  return (
    <motion.div
      className={`${bg} ${cardStyles.base} ${isMobile ? cardStyles.mobile : cardStyles.desktop}`}
      role="article"
      aria-label={`Testimonial ${index + 1} of ${totalItems} from ${name}`}
      aria-describedby={cardId}
      whileHover={{ [isMobile ? 'x' : 'y']: -5 }}
      tabIndex={0}
    >
      <Image 
        src={quote} 
        alt="Quote icon" 
        className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} mb-3`}
        width={isMobile ? 32 : 40}
        height={isMobile ? 32 : 40}
        priority={index < 2}
        loading={index < 2 ? "eager" : "lazy"}
        sizes="(max-width: 768px) 32px, 40px"
      />
      <p 
        id={cardId}
        className={`${isMobile ? 'text-base' : 'text-lg'} italic text-black leading-relaxed ${
          isMobile ? 'line-clamp-4' : ''
        }`}
      >
        {quoteText}
      </p>
      <div className="mt-4">
        <p className="font-semibold text-black">{name}</p>
        <p className="text-black/80">{title}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 