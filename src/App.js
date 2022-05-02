import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Login from './components/Login/Login';
import Explore from './components/Explore/Explore';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="stats" element={<Stats />} />
      <Route path="explore" element={<Explore />} />
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
);

export default App;
