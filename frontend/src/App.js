import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FirstPage from './components/firstpage';
import Navbar from './components/navbar';
import Product from './components/product';
import Detailproduct from './components/detail-product';
import LandingPage from './components/landingPage';
import Login from './components/login';
import AnimatedCard from './components/animated-card';
import Cart from './components/cart';

function App() {
  return (
    <>
     {/* <AnimatedCard/> */}
    <Cart/>
      <BrowserRouter>
      <Navbar/>
      <LandingPage/>
      <Login/>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/Detailproducts" element={<Detailproduct />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
