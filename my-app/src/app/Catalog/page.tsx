"use client";
import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import ProductCard from '../../features/catalog/ProductCard/ProductCard'; 
import products from './products.json';
import styles from './catalog.module.css';

export default function CatalogPage() {
  return (
    <Container maxWidth="xl" className={styles.catalogContainer}>
    
      <Typography 
        variant="h1"
        className={styles.mainTitle}
        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
      >
        Catalog
      </Typography>
      
      <Typography className={styles.subTitle}>
        WOMAN BAGS
      </Typography>

      <Box className={styles.productsGrid}>
        {products.map((product) => (
          <Box key={product.id} className={styles.productWrapper}>
            <ProductCard 
              image={product.image} 
              name={product.name} 
              description={product.description} 
              price={product.price} 
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}