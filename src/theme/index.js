// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#3f3b3d',  // Background color for the whole app
      paper: '#3f3b3d',  // Background color for paper-based components like Card
    },
    text: {
      primary: '#ffffff',  // Primary text color
    },
  },


  typography:{
    fontFamily: 'Poppins',
    body1:{
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#f8f7f8',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a2728',  // Background color for the AppBar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 345,
          margin: 'auto',
          marginTop: '10px',
          marginBottom: '10px',
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          // Add any other styles you want to override
        },

      },
    },
  },
});

export default theme;
