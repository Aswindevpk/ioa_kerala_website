const FLOW_TRANSITION = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1], // Smooth flowing cubic-bezier
};

export const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: FLOW_TRANSITION 
    },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: FLOW_TRANSITION 
    },
  },
  fadeLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: FLOW_TRANSITION 
    },
  },
  fadeRight: {
    initial: { opacity: 0, x: -30 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: FLOW_TRANSITION 
    },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: FLOW_TRANSITION 
    },
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },
  reveal: {
    initial: { clipPath: 'inset(0 100% 0 0)' },
    animate: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { ...FLOW_TRANSITION, duration: 1.5 } 
    },
  }
};
