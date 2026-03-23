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
        {products.womanBags.map((product) => (
          <Box key={product.id} className={styles.productWrapper}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Box>
      <Box sx={{ width: '100%', height: '50px' }} />
      <Box sx={{ width: '100%', height: '50px' }} />
      <Typography className={styles.subTitle}>
        MAN BAGS
      </Typography>
      <Box className={styles.productsGrid}>
        {products.manBags.map((product) => (
          <Box key={product.id} className={styles.productWrapper}>
            <ProductCard {...product} />
          </Box>
        ))}
        </Box>
        <Box sx={{ width: '100%', height: '50px' }} />
        <Box sx={{ width: '100%', height: '50px' }} />
        <Typography className={styles.subTitle}>
          WOMAN WALLETS
        </Typography>
        <Box className={styles.productsGrid}>
          {products.womanWallets.map((product) => (
            <Box key={product.id} className={styles.productWrapper}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>

        <Box sx={{ width: '100%', height: '50px' }} />
        <Box sx={{ width: '100%', height: '50px' }} />
        <Typography className={styles.subTitle}>
        MAN WALLETS
        </Typography>
        <Box className={styles.productsGrid}>
          {products.manWallets.map((product) => (
            <Box key={product.id} className={styles.productWrapper}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>

          <Box sx={{ width: '100%', height: '50px' }} />
        <Box sx={{ width: '100%', height: '50px' }} />
        <Typography className={styles.subTitle}>
        BELTS
        </Typography>
        <Box className={styles.productsGrid}>
          {products.belts.map((product) => (
            <Box key={product.id} className={styles.productWrapper}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>

        <Box sx={{ width: '100%', height: '50px' }} />
        <Box sx={{ width: '100%', height: '50px' }} />
        <Typography className={styles.subTitle}>
        FOOTWEAR
        </Typography>
        <Box className={styles.productsGrid}>
          {products.footwear.map((product) => (
            <Box key={product.id} className={styles.productWrapper}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>


  <Box sx={{ width: '100%', height: '50px' }} />
        <Box sx={{ width: '100%', height: '50px' }} />
        <Typography className={styles.subTitle}>
        PYTHON LEATHER ITEMS
        </Typography>
        <Box className={styles.productsGrid}>
          {products.python.map((product) => (
            <Box key={product.id} className={styles.productWrapper}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>

         <Box sx={{ width: '100%', height: '50px' }} />
        <Box sx={{ width: '100%', height: '50px' }} />
        <Typography className={styles.subTitle}>
       CROCODILE LEATHER ITEMS
        </Typography>
        <Box className={styles.productsGrid}>
          {products.crocodile.map((product) => (
            <Box key={product.id} className={styles.productWrapper}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>

        
    </Container>
  );
}