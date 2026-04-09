import { Container, Typography, Grid, Box } from '@mui/material';
import { SaleCard } from '../../features/sale/saleCard';
import saleData from './saleData.json'; 
import styles from './sale.module.css';

export default function SalePage() {
  return (
    <main className={styles.wrapper}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: 6, textAlign: 'center' }}>
          <Typography variant="h2" className={styles.mainTitle}>
            EXCLUSIVE SALE
          </Typography>
          <Box sx={{ height: '15px' }} />
          <Typography variant="subtitle1">
            Limited editions Bagheera with special prices.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {saleData.map((item) => (
            <Grid size={item.gridSize} key={item.id}>
              <SaleCard 
                title={item.title}
                image={item.image}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                discount={item.discount}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ height: '150px' }} />
      </Container>
    </main>
  );
}