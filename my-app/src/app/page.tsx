"use client";
import React from 'react';
import Image from "next/image";
import ImageCarousel from "../features/home/ImageCarousel/ImageCarousel";
import { Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>

     <section className={styles.heroSection}>
  <div className={styles.heroImageWrapper}>
    <Image
      src="/images/geanta.jpg"
      alt="Bagheera Hero"
      fill
      priority
      style={{ 
        objectFit: 'cover', 
        objectPosition: 'left center' 
      }}
    />
  </div>
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