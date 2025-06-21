"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const RevealOnScroll = ({ children, customVariants, customTransition, viewportOptions }) => {
  const ref = useRef(null);

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const defaultTransition = {
    duration: 0.8,
    ease: "easeOut",
  };

  const defaultViewport = {
    once: true,
    amount: 0.3,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions || defaultViewport}
      transition={customTransition || defaultTransition}
      variants={customVariants || defaultVariants}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;