import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MDAppBar from "./components/AppBar";
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/index";

function App() {
  return (<>
    <Box sx={{ flexGrow: 1 }} backgroundColor="#2a2728">
    <ThemeProvider theme={theme}>
      <MDAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </ThemeProvider>
    </Box>
  </>
  );
}

export default App;
