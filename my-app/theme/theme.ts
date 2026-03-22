"use client";
import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a', 
    },
    secondary: {
      main: '#D4AF37', 
    },
  },
  typography: {
    fontFamily: 'inherit', 
  },
});

export default theme;