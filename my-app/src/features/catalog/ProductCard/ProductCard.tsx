"use client";
import React, { useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Box, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './ProductCard.module.css';

export default function ProductCard({ Name, Price, Image, Description }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const strapiBaseUrl = 'http://localhost:1337';

  const imageUrl = (Image && Image.length > 0)
    ? `${strapiBaseUrl}${Image[0].url}`
    : 'https://via.placeholder.com/300x400?text=Fara+Imagine';

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className={styles.card}>
      <IconButton 
        className={`${styles.favoriteButton} ${isFavorite ? styles.activeFavorite : ''}`} 
        onClick={toggleFavorite}
        disableRipple
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: '#ff4d4d' }} /> 
        ) : (
          <FavoriteBorderIcon sx={{ color: '#e0e0e0' }} />
        )}
      </IconButton>

      <Box className={styles.imageContainer}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={Name || "Produs"}
          className={styles.productImage}
        />
      </Box>

      <CardContent className={styles.content}>
        <Box>
          <Typography variant="h6" className={styles.productName}>
            {Name}
          </Typography>
          {Description && (
            <Typography variant="body2" className={styles.description}>
              {Description}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant="h6" className={styles.price}>
            {Price} MDL
          </Typography>
          <Button fullWidth className={styles.buyButton}>
            Cumpără
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}