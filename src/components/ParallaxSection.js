'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, offset = 50 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, offset], [0, offset / 2]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
