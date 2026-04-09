import Link from 'next/link';
import Image from 'next/image';
import { Grid as Grid, Typography } from '@mui/material'; // Folosim Grid2 pentru versiunile noi
import styles from './QuickLinks.module.css';

const links = [
  { title: "Who we are", image: "/images/aboutUs1.jpg", href: "#who-we-are" },
  { title: "Our Location", image: "/images/aboutUs2.png", href: "#location" },
  { title: "Quality Standards", image: "/images/aboutUs3.jpg", href: "#quality" }
];

export const QuickLinks = () => (
  <Grid container spacing={4} className={styles.gridContainer}>
    {links.map((item, index) => (
      <Grid size={{ xs: 12, md: 4 }} key={index}> 
        {/* ^ În MUI nou folosim 'size' în loc de 'xs' și 'md' direct, și eliminăm 'item' */}
        <Link href={item.href} className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src={item.image} 
              alt={item.title} 
              fill 
              className={styles.img} 
            />
          </div>
          <div className={styles.content}>
            <Typography variant="h6" className={styles.linkTitle}>
              {item.title}
            </Typography>
          </div>
        </Link>
      </Grid>
    ))}
  </Grid>
);