import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FirstPage from './components/firstpage';
import Navbar from './components/navbar';
import Product from './components/product';
import Detailproduct from './components/detail-product';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/Detailproducts" element={<Detailproduct />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
