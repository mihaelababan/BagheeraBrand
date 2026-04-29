"use client";
import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Box, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './ProductCard.module.css';

interface ProductProps {
  id: number;
  Name: string;
  Price: number;
  Image: any;
  Description?: string;
  onToggle?: (id: number) => void;
}

export default function ProductCard({ id, Name, Price, Image, Description, onToggle }: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const strapiBaseUrl = 'http://localhost:1337';

  // Construirea URL-ului imaginii
  const imageUrl = (Image && Image.length > 0)
    ? `${strapiBaseUrl}${Image[0].url}`
    : 'https://via.placeholder.com/300x400?text=No+Image';

  // Verificare stare favorite la încărcare
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  // Logică Favorite (Negru contur -> Roșu plin)
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((favId: any) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    
    if (onToggle) onToggle(id);
  };

  // Logică Shopping Cart (Coș)
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((item: any) => item.id === id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ id, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${Name} has been added to your bag.`);
  };

  return (
    <Card className={styles.card}>
      <IconButton 
        className={`${styles.favoriteButton} ${isFavorite ? styles.activeFavorite : ''}`} 
        onClick={toggleFavorite}
        disableRipple
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      <Box className={styles.imageContainer}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={Name || "Product"}
          className={styles.productImage}
        />
      </Box>

      <CardContent className={styles.content}>
        <Box className={styles.infoSection}>
          <Typography variant="h6" className={styles.productName}>
            {Name}
          </Typography>
          {Description && (
            <Typography variant="body2" className={styles.description}>
              {Description}
            </Typography>
          )}
        </Box>

        <Box className={styles.actionSection}>
          <Typography variant="h6" className={styles.price}>
            {Price} MDL
          </Typography>
          <Button 
            fullWidth 
            className={styles.buyButton} 
            onClick={addToCart}
          >
            Buy
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}