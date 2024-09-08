import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import FirstPage from './components/firstpage';
import Brands from './components/brands';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Footer/>
    <LandingPage/>
    <Navbar/>
    <FirstPage/>
    <Brands/>
    </>
  );
}

export default App;
