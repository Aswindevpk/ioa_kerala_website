import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { variants } from '@/lib/motion';

interface MotionWrapperProps extends Omit<MotionProps, 'className'> {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article' | 'aside' | 'span';
  delay?: number;
  onClick?: React.MouseEventHandler;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  variant = 'fadeUp',
  className,
  as = 'div',
  delay = 0,
  transition,
  ...motionProps
}) => {
  const MotionComponent = motion[as as keyof typeof motion] as any;

  // Merge the delay with the variant's transition or the passed transition
  const baseTransition = variants[variant]?.animate?.transition || {};
  const mergedTransition = {
    ...baseTransition,
    ...transition,
    delay: delay || (transition as any)?.delay || (baseTransition as any)?.delay || 0
  };

  return (
    <MotionComponent
      className={className}
      variants={variants[variant]}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={mergedTransition}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
};
