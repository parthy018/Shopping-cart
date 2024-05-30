import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(0);

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0); // Improved efficiency
    setTotalAmount(total);
  };

  // Call calculateTotalAmount on component mount and whenever cart changes
  useEffect(() => {
    calculateTotalAmount();
  }, [cart]); // Dependency array for clarity

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {cart.length > 0 ? (
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={8}>
              {cart.map((item, index) => (
                <CartItem key={index} item={item} itemIndex={index} />
              ))}
            </Grid>

            <Grid item xs={12} md={4} marginTop={2}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Your Cart
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  Summary
                </Typography>
                <Typography variant="h6">
                  Total Items: {cart.length}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                  <strong>Total Amount:</strong> ${totalAmount.toFixed(2)} {/* Format to 2 decimal places */}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => console.log('Proceed to Checkout')}
                >
                  Check Out Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Your cart is empty!
          </Typography>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Shop Now
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
