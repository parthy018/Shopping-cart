import React from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StyledButton from './StyledButton';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(item));
  };

  const handleRemove = () => {
    dispatch(remove(item.id));
  };

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2 ,minHeight: '200px'}}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: 'contain', p: 2 }}
        image={item.image}
        alt={item.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
          <Typography component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ${item.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
          <IconButton onClick={handleRemove}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
          <IconButton onClick={handleAdd}>
            <AddIcon />
          </IconButton>
          <StyledButton sx={{ mx: 'auto' }} onClick={()=> dispatch(remove(item.id))}>
              <DeleteIcon />
          </StyledButton>
        
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
