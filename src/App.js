import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import FirstPage from './components/firstpage';
import Brands from './components/brands';
import Footer from './components/footer';
import GenderSoes from './components/genderSoes';
import Cart from './components/cart';
import Login from './components/login';
import { BrowserRouter, Router, Route, Switch, Routes } from 'react-router-dom';
import Product from './components/product';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <LandingPage /> */}
        <Navbar />
        <FirstPage />
        <Cart />
        <Login/>
        <GenderSoes />
        <Brands/>
        <Footer />
        <Routes>
          <Route path="/product" component={Product} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
