import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer/Footer';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
