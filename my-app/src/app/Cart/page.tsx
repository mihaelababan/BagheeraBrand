"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, CircularProgress, IconButton, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './Cart.module.css';

export default function CartPage() {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCartData = async () => {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:1337/api/projects?populate=*&pagination[pageSize]=100');
            const allProducts = res.data.data || [];
            const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');

            const detailedCart = savedCart.map((cartItem: any) => {
                const productInfo = allProducts.find((p: any) => String(p.id) === String(cartItem.id));
                if (!productInfo) return null;
                return {
                    ...productInfo,
                    quantity: cartItem.quantity
                };
            }).filter((item: any) => item !== null);

            setCartItems(detailedCart);
        } catch (error) {
            console.error("Eroare la încărcarea coșului:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    const updateQuantity = (id: number, delta: number) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        });
        setCartItems(updatedCart);

        const storageCart = updatedCart.map(item => ({ id: item.id, quantity: item.quantity }));
        localStorage.setItem('cart', JSON.stringify(storageCart));
    };

    const removeItem = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        const storageCart = updatedCart.map(item => ({ id: item.id, quantity: item.quantity }));
        localStorage.setItem('cart', JSON.stringify(storageCart));
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => {
            const price = item.attributes?.Price || item.Price || 0;
            return acc + (price * item.quantity);
        }, 0);
    };

    if (loading) return (
        <Box className={styles.loader}>
            <CircularProgress color="inherit" />
        </Box>
    );

    return (
        <div className={styles.pageBackground}>
            <Container maxWidth="lg" className={styles.wrapper}>
                <header className={styles.header}>
                    <Typography variant="h2" className={styles.title}>SHOPPING BAG</Typography>
                    <div className={styles.underline} />
                </header>

                {cartItems.length > 0 ? (
                    <div className={styles.layout}>
                        <div className={styles.itemsSection}>
                            {cartItems.map((item) => {
                                const attr = item.attributes || item;
                                const imgUrl = attr.Image?.[0]?.url
                                    ? `http://localhost:1337${attr.Image[0].url}`
                                    : 'https://via.placeholder.com/150';

                                return (
                                    <Box key={item.id} className={styles.cartItem}>
                                        <img src={imgUrl} alt={attr.Name} className={styles.itemImage} />

                                        <div className={styles.itemInfo}>
                                            <Typography className={styles.itemName}>{attr.Name}</Typography>
                                            <Typography className={styles.itemPrice}>{attr.Price} MDL</Typography>
                                        </div>

                                        <div className={styles.quantityControls}>
                                            <IconButton onClick={() => updateQuantity(item.id, -1)} size="small">
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                            <Typography className={styles.qtyValue}>{item.quantity}</Typography>
                                            <IconButton onClick={() => updateQuantity(item.id, 1)} size="small">
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                        </div>

                                        <Typography className={styles.subtotal}>
                                            {attr.Price * item.quantity} MDL
                                        </Typography>

                                        <IconButton onClick={() => removeItem(item.id)} className={styles.removeBtn}>
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    </Box>
                                );
                            })}
                        </div>

                        <aside className={styles.summarySection}>
                            <Typography variant="h6" className={styles.summaryTitle}>ORDER SUMMARY</Typography>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>{calculateTotal()} MDL</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span>Calculated at next step</span>
                            </div>
                            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                                <span>Total</span>
                                <span>{calculateTotal()} MDL</span>
                            </div>
                            <Button fullWidth className={styles.checkoutBtn}>
                                PROCEED TO CHECKOUT
                            </Button>
                        </aside>
                    </div>
                ) : (
                    <Box className={styles.emptyContainer}>
                        <Typography variant="h5">Your bag is empty.</Typography>
                        <Button href="/" className={styles.continueBtn}>CONTINUE SHOPPING</Button>
                    </Box>
                )}
            </Container>
        </div>
    );
}