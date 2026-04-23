"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import styles from './HeroSlider.module.css';

const images = [
  "/images/geanta.jpg",
  "/images/geanta1.jpg", 
  "/images/geanta3.jpg"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Box className={styles.sliderContainer}>
      {images.map((src, index) => (
        <div 
          key={src} 
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            priority={index === 0}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      ))}

      <IconButton onClick={handlePrev} className={`${styles.navBtn} ${styles.left}`}>
        <ArrowBackIosNew />
      </IconButton>
      <IconButton onClick={handleNext} className={`${styles.navBtn} ${styles.right}`}>
        <ArrowForwardIos />
      </IconButton>

      <Box className={styles.dots}>
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`} 
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </Box>
    </Box>
  );
}