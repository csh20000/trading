import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Footer from './Footer/Footer';

const Layout = () => (
  <Box>
    <Navbar />
    <Outlet />
    <Footer />
  </Box>
);

export default Layout;
