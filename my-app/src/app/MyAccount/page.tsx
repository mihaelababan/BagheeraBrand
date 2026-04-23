"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Fade } from '@mui/material';
import styles from './Account.module.css';

export default function MyAccount() {
  const [tab, setTab] = useState('INFO');
  const [user, setUser] = useState({ name: '', email: '', phone: '', city: '' });

  useEffect(() => {
    const saved = localStorage.getItem('bagheera_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const save = () => {
    localStorage.setItem('bagheera_user', JSON.stringify(user));
    alert("Profile updated successfully.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroSide}>
        <h1 className={styles.brandName}>Bagheera</h1>
      </div>

      <div className={styles.formSide}>
        <div className={styles.sectionNav}>
          <span 
            className={`${styles.navLink} ${tab === 'INFO' ? styles.activeLink : ''}`}
            onClick={() => setTab('INFO')}
          >
            Personal Details
          </span>
          <span 
            className={`${styles.navLink} ${tab === 'ORDERS' ? styles.activeLink : ''}`}
            onClick={() => setTab('ORDERS')}
          >
            Orders
          </span>
        </div>

        <div className={styles.contentWrapper}>
          {tab === 'INFO' ? (
            <Fade in={true} timeout={600}>
              <Box>
                <Typography variant="h4" sx={{ mb: 6, fontFamily: 'serif', fontWeight: 300 }}>
                  Hi, {user.name.split(' ')[0] || 'Guest'}
                </Typography>
                
                <div className={styles.inputGroup}>
                  <TextField 
                    fullWidth variant="standard" label="Full Name" 
                    className={styles.customInput}
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <TextField 
                    fullWidth variant="standard" label="Email Address" 
                    className={styles.customInput}
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <TextField 
                    fullWidth variant="standard" label="Phone" 
                    className={styles.customInput}
                    value={user.phone}
                    onChange={(e) => setUser({...user, phone: e.target.value})}
                  />
                </div>

                <Button className={styles.blackButton} onClick={save}>
                  Save Changes
                </Button>
              </Box>
            </Fade>
          ) : (
            <Fade in={true} timeout={600}>
              <Box>
                <Typography variant="h4" sx={{ mb: 4, fontFamily: 'serif', fontWeight: 300 }}>
                  Order History
                </Typography>
                <Typography className={styles.emptyMessage}>
                  Your order list is currently empty.
                </Typography>
              </Box>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
}