import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#383335",
  color: "white",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: "#2a2728",
  },
}));

export default StyledButton;