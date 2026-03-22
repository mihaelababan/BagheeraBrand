"use client";
import React, { useState } from 'react';
import { 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  IconButton, 
  Box,
  Button 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styles from './ProductCard.module.css';

interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, name, description, price }: ProductProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className={styles.card}>
      
      <IconButton 
        onClick={toggleFavorite}
        className={styles.favoriteButton}
        style={{ color: isFavorite ? '#ff4d4d' : '#cccccc' }}
      >
        <FavoriteIcon />
      </IconButton>

      <Box className={styles.imageContainer}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className={styles.productImage}
        />
      </Box>

      <CardContent className={styles.content}>
        <Box>
          <Typography variant="h6" className={styles.productName}>
            {name}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {description}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" className={styles.price}>
            {price}
          </Typography>

          <Button 
            variant="contained" 
            fullWidth
            startIcon={<ShoppingBagIcon />}
            className={styles.buyButton}
            onClick={() => alert(`Ai adăugat în coș: ${name}`)}
          >
            BUY
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;