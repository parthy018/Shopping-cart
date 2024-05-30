// src/components/ProductCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import StyledButton from './StyledButton'; // Import the StyledButton component
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from "../store/cartSlice";

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart.cart); // Ensure the correct path to cart
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(product));
  }

  const handleRemoveFromCart = () => {
    dispatch(remove(product.id));
  }

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        transition: 'transform 0.3s',
      
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}>
        <CardHeader
          title={product.title}
          subheader={product.name}
        />
        <CardContent sx={{ marginTop: -5 }}>
          <Typography variant="body1">
            {product.description.split(' ').slice(0, 10).join(' ') + '..'}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            sx={{
              maxHeight: 200,
              maxWidth: 200,
              objectFit: 'contain',
              margin: 'auto',
              marginTop: '20px',
            }}
            image={product.image}
            alt={product.name}
          />
        </CardContent>
        <CardActions sx={{ padding: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
              ${product.price}
            </Typography>
            {
              cart.some((item) => item.id === product.id) ? (
                <StyledButton size="small" variant="contained" onClick={handleRemoveFromCart}>
                  Remove from Cart
                </StyledButton>
              ) : (
                <StyledButton size="small" variant="contained" onClick={handleAddToCart}>
                  Add to Cart
                </StyledButton>
              )
            }

          </Box>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default Product;
