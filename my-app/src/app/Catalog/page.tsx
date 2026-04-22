"use client";

import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, CircularProgress, Alert } from '@mui/material';
import ProductCard from '../../features/catalog/ProductCard/ProductCard';
import styles from './catalog.module.css';
import axios from 'axios';

export default function CatalogPage() {
  const [products, setProducts] = useState<any[]>([]); //stocarea produselor primite de la strapi
  const [loading, setLoading] = useState(true); //indica daca datele sunt in curs de incarcare

  useEffect(() => {
  async function fetchProducts() {
    try {
      const url = 'http://localhost:1337/api/projects?populate=*&pagination[page]=1&pagination[pageSize]=100';
      const response = await axios.get(url);
      setProducts(response.data.data || []);
      
      // --- COD NOU PENTRU SCROLL ---
      // Așteptăm un timp minuscul ca React să deseneze elementele pe ecran
      setTimeout(() => {
        const hash = window.location.hash; // Verifică dacă avem #ceva în URL
        if (hash) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100); // 100ms sunt suficiente
      // -----------------------------

    } catch (error) {
      console.error('Eroare:', error);
    } finally {
      setLoading(false);
    }
  }
  fetchProducts();
}, []);

  const filterByCategory = (categoryTitle: string) => { //filtreaza conform categoriei
    return products.filter((p: any) => {
      const strapiCategory = p?.categorie?.Title;
      if (!strapiCategory) return false;
      return strapiCategory.trim().toLowerCase() === categoryTitle.toLowerCase();
    });
  };

  const sections = [
    { id: "woman-bags", label: "WOMAN BAGS", strapi: "Woman Bags" },
    { id: "man-bags", label: "MAN BAGS", strapi: "Man Bags" },
    { id: "woman-wallets", label: "WOMAN WALLETS", strapi: "Woman Wallets" },
    { id: "man-wallets", label: "MAN WALLETS", strapi: "Man Wallets" },
    { id: "belts", label: "BELTS", strapi: "Belts" },
    { id: "footwear", label: "FOOTWEAR", strapi: "Footwear" },
    { id: "python-leather-items", label: "PYTHON LEATHER ITEMS", strapi: "Python leather items" },
    { id: "crocodile-leather-items", label: "CROCODILE LEATHER ITEMS", strapi: "Crocodile leather items" },
  ];

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 10 }}><CircularProgress /></Box>;

  return (
    <Container maxWidth="xl" className={styles.catalogContainer}>
      <Typography variant="h1" className={styles.mainTitle} sx={{ mb: 4 }}>Catalog</Typography>

      <Alert severity={products.length >= 60 ? "success" : "warning"} sx={{ mb: 4 }}>
        Produse primite de la server: **{products.length}**
      </Alert>

      {sections.map((section) => {
        const filtered = filterByCategory(section.strapi);
        return (
          <Box key={section.id} sx={{ mb: 6 }}>
            <Typography className={styles.subTitle} id={section.id}>
              {section.label}
            </Typography>
            <Box className={styles.productsGrid}>
              {filtered.length > 0 ? (
                filtered.map((product: any) => ( //afiseaza doar produsele care se potrivesc categoriei
                  <Box key={product.id} className={styles.productWrapper}>
                    <ProductCard {...product} /> {/* transmite toate datele produsului catre card */ }
                  </Box>
                ))
              ) : (
                <Typography color="text.disabled">Niciun produs gasit in "{section.strapi}".</Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </Container>
  );
}