import Image from 'next/image';
import styles from './certificates.module.css';

const certs = [
  { src: "/images/cert1.jpg", alt: "ISO Certificate" },
  { src: "/images/cert2.jpg", alt: "Safety Standard" },
  { src: "/images/cert3.jpg", alt: "Quality Assurance" },
  { src: "/images/cert4.jpg", alt: "Compliance" },
];

export const Certificates = () => (
  <div className={styles.certGrid}>
    {certs.map((cert, index) => (
      <div key={index} className={styles.certItem}>
        <div className={styles.imageWrapper}>
          <Image 
            src={cert.src} 
            alt={cert.alt} 
            fill
            className={styles.certImg}
          />
        </div>
      </div>
    ))}
  </div>
);