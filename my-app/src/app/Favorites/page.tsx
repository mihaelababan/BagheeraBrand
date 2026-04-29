"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '../../features/catalog/ProductCard/ProductCard'; 
import { Typography, Container, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import styles from './Favorites.module.css';

export default function FavoritesPage() {
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        setLoading(true);
        const url = 'http://localhost:1337/api/projects?populate=*&pagination[page]=1&pagination[pageSize]=100';
        const response = await axios.get(url);
        const allProductsFromStrapi = response.data.data || [];
        
        const storedFavs = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        const filtered = allProductsFromStrapi.filter((prod: any) => 
          storedFavs.some((favId: any) => String(favId) === String(prod.id))
        );

        setFavoriteProducts(filtered);
      } catch (error) {
        console.error("Eroare la încărcarea favoritelor:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, []);

  const handleRemoveFromUI = (id: number) => {
    setFavoriteProducts((prev) => prev.filter((p) => String(p.id) !== String(id)));
  };

  if (loading) {
    return (
      <Box className={styles.loaderContainer}>
        <CircularProgress sx={{ color: '#000' }} />
      </Box>
    );
  }

  return (
    <div className={styles.pageBackground}>
      <Container maxWidth="xl" className={styles.pageWrapper}>
        <header className={styles.header}>
          <Typography variant="overline" className={styles.categoryLabel}>
            Bagheera Collection
          </Typography>
          <Typography variant="h2" className={styles.mainTitle}>
            MY FAVORITES
          </Typography>
          <div className={styles.underline} />
        </header>

        {favoriteProducts.length > 0 ? (
          <Box className={styles.productGrid}>
            {favoriteProducts.map((product) => (
              <Box key={product.id} className={styles.productWrapper}>
                <ProductCard 
                  {...product} 
                  onToggle={handleRemoveFromUI} 
                />
              </Box>
            ))}
          </Box>
        ) : (
          <Box className={styles.emptyState}>
            <Typography variant="h5" className={styles.emptyText}>
              Your wishlist is currently empty.
            </Typography>
            <Typography className={styles.emptySubtext}>
              Go back to catalog to add some items.
            </Typography>
          </Box>
        )}
      </Container>
    </div>
  );
}