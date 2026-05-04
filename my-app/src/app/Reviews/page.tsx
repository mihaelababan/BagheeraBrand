"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box, Typography, Card, Avatar, Rating, 
  TextField, Button, Divider, Stack, CircularProgress 
} from '@mui/material';
import styles from './reviews.module.css';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState<number | null>(5);
  const [userComment, setUserComment] = useState("");
  const [userName, setUserName] = useState("");

  const strapiUrl = 'http://localhost:1337/api/reviews';

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${strapiUrl}?sort=createdAt:desc`);
      
      const rawData = response.data?.data;

      if (!rawData || !Array.isArray(rawData)) {
        setReviews([]);
        return;
      }

      const formattedReviews = rawData.map((item: any) => {
        const data = item.attributes || item;

        return {
          id: item.id,
          name: data?.Name || "Anonymous Client", 
          rating: data?.Rating || 5,
          comment: data?.Comment || "",
          date: data?.createdAt 
            ? new Date(data.createdAt).toLocaleDateString('en-GB', { 
                day: '2-digit', month: 'short', year: 'numeric' 
              })
            : "Recent",
        };
      });

      setReviews(formattedReviews);
    } catch (error) {
      console.error("Eroare la încărcarea recenziilor:", error);
      setReviews([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  const handlePostReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim() || !userName.trim()) {
      alert("Please fill in both your name and comment.");
      return;
    }

    const payload = {
      data: {
        Name: userName,
        Rating: userRating || 5,
        Comment: userComment,
      }
    };

    try {
      await axios.post(strapiUrl, payload);
      setUserComment("");
      setUserName("");
      setUserRating(5);
      fetchReviews();
    } catch (error) {
      console.error("Eroare la salvarea recenziei:", error);
      alert("Failed to post review. Please check API permissions.");
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box className={styles.reviewsContainer}>
      <Typography variant="h1" className={styles.title} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
        Client Reviews
      </Typography>

      <Box component="form" onSubmit={handlePostReview} className={styles.addReviewSection}>
        <Typography variant="h6" className={styles.sectionSubtitle}>
          Share Your Experience
        </Typography>
        
        <Stack spacing={3} alignItems="center">
          <TextField
            fullWidth
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
          />

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
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Card key={review.id} className={styles.reviewCard}>
              <Box>
                <Box className={styles.reviewHeader}>
                  <Avatar sx={{ bgcolor: '#000', mr: 2, width: 45, height: 45 }}>
                    {review.name.charAt(0).toUpperCase()}
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
          ))
        ) : (
          <Typography sx={{ textAlign: 'center', width: '100%', color: '#999' }}>
            No reviews yet. Be the first to share your thoughts!
          </Typography>
        )}
      </Box>
    </Box>
  );
}