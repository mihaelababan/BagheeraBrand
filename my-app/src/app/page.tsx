"use client";
import React from 'react';
import Image from "next/image";
import ImageCarousel from "../features/home/ImageCarousel/ImageCarousel";
import { Typography } from "@mui/material";
import styles from "./page.module.css";

import HeroSlider from "../features/home/HeroSlider/HeroSlider"; 

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <HeroSlider />
      </section>
     

      <div className={styles.spacer} />

      <section className={styles.collectionSection}>
      
        <div className={styles.spacer} />

        <Typography
          id="categories-section"
          className={styles.categoriesTitle}
        >
          Categories
        </Typography>
        
        <ImageCarousel />
      </section>
      
      <div className={styles.spacer} /> 
    
    </main>
  );
}