"use client";

import React, { useState } from 'react';
import { 
  Box, Typography, Card, Avatar, Rating, 
  TextField, Button, Divider, Stack 
} from '@mui/material';
import styles from './reviews.module.css';
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Sophia Bennett",
      rating: 5,
      date: "14 Mar 2026",
      comment: "The silk dress is a masterpiece. The fit is true to size and the fabric feels incredibly luxurious on the skin.",
      avatar: "S"
    },
    {
      id: 2,
      name: "Marcus Aureliu",
      rating: 4,
      date: "10 Mar 2026",
      comment: "Top-tier customer service. Had to exchange a pair of loafers and the process was seamless. Highly recommend Bagheera.",
      avatar: "M"
    },
    {
      id: 3,
      name: "Isabella V.",
      rating: 5,
      date: "02 Mar 2026",
      comment: "Elegant packaging and even better products. The cashmere coat is the warmest and softest I've ever owned.",
      avatar: "I"
    },
    {
      id: 4,
      name: "Julian Ross",
      rating: 5,
      date: "25 Feb 2026",
      comment: "Minimalist, bold, and high quality. Exactly what I was looking for in a modern fashion brand.",
      avatar: "J"
    },
    {
      id: 5,
      name: "Elena Dumitrescu",
      rating: 3,
      date: "18 Feb 2026",
      comment: "The design is 5 stars, but the delivery took a bit longer than expected to Bucharest.",
      avatar: "E"
    }
  ]);
  const [userRating, setUserRating] = useState<number | null>(5);
  const [userComment, setUserComment] = useState("");

  const handlePostReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      name: "You (Guest)",
      rating: userRating || 5,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      comment: userComment,
      avatar: "Y"
    };
    setReviews([newReview, ...reviews]);
    setUserComment("");
    setUserRating(5);
  };

  return (
    <Box className={styles.reviewsContainer}>
      <Typography variant="h1" className={styles.title}
        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
        Client Reviews
      </Typography>
      <Box component="form" onSubmit={handlePostReview} className={styles.addReviewSection}>
        <Typography variant="h6" className={styles.sectionSubtitle}>
          Share Your Experience
        </Typography>
        
        <Stack spacing={3} alignItems="center">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>Your Rating</Typography>
            <Rating
              value={userRating}
              onChange={(event, newValue) => setUserRating(newValue)}
              size="large"
              sx={{ color: '#000' }}
            />
          </Box>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Tell us about the quality, fit, and style of your Bagheera items..."
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
          />

          <Button type="submit" variant="contained" className={styles.submitButton}>
            Submit Review
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ mb: 8 }}>
        <Typography variant="overline" sx={{ color: '#aaa', letterSpacing: 2 }}>
          Community Feedback
        </Typography>
      </Divider>
      <Box className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <Card key={review.id} className={styles.reviewCard}>
            <Box>
              <Box className={styles.reviewHeader}>
                <Avatar sx={{ bgcolor: '#000', mr: 2, width: 45, height: 45 }}>
                  {review.avatar}
                </Avatar>
                <Box>
                  <Typography className={styles.userName}>{review.name}</Typography>
                  <Typography className={styles.date}>{review.date}</Typography>
                </Box>
              </Box>
              <Rating value={review.rating} readOnly size="small" sx={{ color: '#000', mb: 2 }} />
              <Typography className={styles.comment}>
                "{review.comment}"
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}