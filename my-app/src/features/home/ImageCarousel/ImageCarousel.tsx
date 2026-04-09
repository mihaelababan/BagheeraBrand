"use client";
import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';
import Link from 'next/link';

import products from './CarouselData.json';

export default function ImageCarousel() {
  //const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState(0);

 // useEffect(() => { setMounted(true); }, []);
 // if (!mounted) return null;

  return (
    <Box className={styles.carouselWrapper}>
      <IconButton 
        onClick={() => setPage(0)}
        className={`${styles.navButton} ${styles.prev}`}
      >
        <ArrowBackIosNew />
      </IconButton>

      <Box className={styles.viewport}>
        <Box 
          className={styles.track} 
          style={{ '--offset': `${page * 50}%` } as React.CSSProperties}
        >
          {products.map((item, index) => (
   
            <Box key={index} component={Link} href={item.href} className={styles.card}>
              <Box className={styles.squareImage}>
                <Image 
                  src={item.src} 
                  alt={item.label} 
                  fill 
                  className="object-cover rounded-md" 
                />
              </Box>
              <Typography variant="caption" className={styles.label}>
                {item.label}
              </Typography>
            </Box>
      
          ))}
        </Box>
      </Box>

      <IconButton 
        onClick={() => setPage(1)}
        className={`${styles.navButton} ${styles.next}`}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}