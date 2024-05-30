import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import MDAppBar from '../components/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/index';
import Product from '../components/Product';
import Grid from '@mui/material/Grid';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box sx={{ padding: '20px' }}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Grid container  sx={{ display: 'flex' }}>
              {products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
