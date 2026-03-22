"use client";
import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { Instagram, Pinterest, Facebook } from '@mui/icons-material';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; 
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      
      <Box className={styles.socialContainer}>
        <Typography className={styles.socialLabel}>
          Social networks:
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small" 
            className={styles.iconButton}
            component="a" 
            href="https://www.instagram.com" 
            target="_blank"
          >
            <Instagram fontSize="medium" />
          </IconButton>

          <IconButton 
            size="small" 
            className={styles.iconButton}
            component="a" 
            href="https://www.pinterest.com" 
            target="_blank"
          >
            <Pinterest fontSize="medium" />
          </IconButton>

          <IconButton 
            size="small" 
            className={styles.iconButton}
            component="a" 
            href="https://www.tiktok.com/" 
            target="_blank"
          >
            <MusicNoteIcon fontSize="medium" /> 
          </IconButton>

          <IconButton 
            size="small" 
            className={styles.iconButton}
            component="a" 
            href="https://www.facebook.com" 
            target="_blank"
          >
            <Facebook fontSize="medium" />
          </IconButton>
        </Stack>
      </Box>


      <Box className={styles.contactContainer}>
        <Typography variant="caption" className={styles.contactText}>
          Phone number: +37369199935
        </Typography>
        <Typography variant="caption" className={styles.contactText}>
          Address: Strada Pietii 2
        </Typography>
        <Typography variant="caption" className={styles.contactText}>
          Email: bagheerabrand@gmail.com
        </Typography>
      </Box>

    </Box>
  );
};

export default Footer;