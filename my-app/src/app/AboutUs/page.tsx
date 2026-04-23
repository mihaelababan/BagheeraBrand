import { Container, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import { QuickLinks } from '../../features/aboutUs/QuickLinks/QuickLinks';
import { Certificates } from '../../features/aboutUs/certificates/certificates';
import styles from './AboutUs.module.css';

export default function AboutPage() {
  return (
    <main className={styles.mainWrapper}>
      <Container maxWidth="lg" className={styles.heroHeader}>
        <Typography variant="h2" className={styles.mainTitle}>
          About Baghera Brand
        </Typography>
        <Typography variant="subtitle1" className={styles.tagline}>
          Quality - Style - Elegance
        </Typography>
        <QuickLinks />
      </Container>

      <section id="who-we-are" className={styles.greySection}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" className={styles.sectionTitle}>
                Who we are?
              </Typography>
              <Typography className={styles.description}>
                We are Baghera Brand, your favorite destination for premium leather bags and accessories!
                Inspired by modern femininity and classic craftsmanship, we bring you pieces that stand the test of time.
                Every bag is created with attention to detail to reflect the personality and taste of each client.
              </Typography>
              <div className={styles.uniquenessBox}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  What makes us unique?
                </Typography>
                <ul className={styles.list}>
                  <li><strong>Premium Leather:</strong> Carefully selected materials for durability.</li>
                  <li><strong>Artisanal Quality:</strong> Each piece is finished by hand with precision.</li>
                  <li><strong>Modern Design:</strong> A perfect balance between fashion and function.</li>
                </ul>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className={styles.portraitWrapper}>
                <Image
                  src="/images/aboutUs4.jpg"
                  alt="Baghera Style"
                  fill
                  className={styles.portraitImg}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id="quality" className={styles.whiteSection}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" className={styles.centeredTitle}>
            Our Commitment to Quality
          </Typography>
          <Box sx={{ height: '80px' }} />
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Handcrafted</Typography>
              <Typography color="text.secondary">
                Verified by master artisans to ensure every stitch is perfect.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Sustainable</Typography>
              <Typography color="text.secondary">
                We use responsibly sourced leather from certified tanneries.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Lifetime Style</Typography>
              <Typography color="text.secondary">
                Designed to be your companion for years, getting better with age.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={styles.greySection}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={styles.centeredTitle}>
            Official Certifications
          </Typography>
          <Certificates />
        </Container>
      </section>

      <section id="location" className={styles.whiteSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={styles.centeredTitle}>
            Our Location
          </Typography>
          <Box sx={{ height: '50px' }} />
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.0461642456455!2d27.674987776885392!3d47.76115907718024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb673327d6d1d7%3A0xc6657c79e606559d!2sStrada%20Mihai%20Eminescu%209%2C%20F%C4%83le%C8%99ti%2C%20Moldova!5e0!3m2!1sro!2sro!4v1712680000000!5m2!1sro!2sro"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
    </main>
  );
}