"use client";

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar, Box, Toolbar, Typography, Button,
  IconButton, Menu, MenuItem, Dialog, DialogContent
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './NavBar.module.css';

const navItems = [
  { label: 'Catalog', path: '/Catalog' },
  { label: 'Categories', path: '/#categories-section' },
  { label: 'Reviews', path: '/Reviews' },
  { label: 'About Us', path: '/AboutUs' },
  { label: 'Sale', path: '/Sale' },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const [searchOpen, setSearchOpen] = useState(false);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>

        <Link href="/" className={styles.logoLink}>
          <Typography variant="h5" className={styles.logoText}>
            BAGHEERA
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.path}
              className={`${styles.navButton} ${item.label === 'Sale' ? styles.saleButton : ''}`}
            >
              {item.label}
            </Button>
          ))}

          <Box className={styles.iconGroup}>
            <IconButton className={styles.iconButton} onClick={() => setSearchOpen(true)}>
              <SearchIcon fontSize="medium" />
            </IconButton>

            <IconButton
              className={styles.iconButton}
              onClick={handleProfileClick}
              onMouseEnter={handleProfileClick}
            >
              <PersonOutlineIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleProfileClose}
          slotProps={{
            list: {
              onMouseLeave: handleProfileClose,
            },
          }}
          classes={{ paper: styles.menuPaper }}
          disableScrollLock
        >
          <MenuItem onClick={handleProfileClose} component={Link} href="/MyAccount" className={styles.menuItem}>My Account</MenuItem>
          <MenuItem onClick={handleProfileClose} component={Link} href="/favorites" className={styles.menuItem}>Favorites</MenuItem>
          <MenuItem onClick={handleProfileClose} component={Link} href="/cart" className={styles.menuItem}>Cart</MenuItem>
        </Menu>

        <Dialog
          fullScreen
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          slotProps={{
            paper: {
              className: styles.searchDialog
            }
          }}
        >
          <IconButton
            onClick={() => setSearchOpen(false)}
            sx={{ position: 'absolute', right: 20, top: 20, color: 'white' }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '80%', maxWidth: '600px' }}>
              <input
                autoFocus
                className={styles.searchInput}
                placeholder="Search for products..."
              />
              <Typography sx={{ color: 'gray', mt: 2, textAlign: 'center' }}>
                Press ENTER to search
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>

      </Toolbar>
    </AppBar>
  );
}