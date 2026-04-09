import Image from 'next/image';
import { Typography, Button, Box } from '@mui/material';
import styles from './saleCard.module.css';

interface SaleCardProps {
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
}

export const SaleCard = ({ title, image, oldPrice, newPrice, discount }: SaleCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} fill className={styles.img} />
        <div className={styles.badge}>{discount}</div>
      </div>
      <div className={styles.content}>
        <Typography variant="h5" className={styles.title}>{title}</Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" className={styles.priceLine}>
            <span className={styles.oldPrice}>{oldPrice}</span>
            <span className={styles.newPrice}>{newPrice}</span>
          </Typography>
        </Box>
        <Button variant="outlined" className={styles.button}>
          Detalii Produs
        </Button>
      </div>
    </div>
  );
};