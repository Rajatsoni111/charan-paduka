import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import FirstPage from './components/firstpage';
import Brands from './components/brands';
import Footer from './components/footer';
import GenderSoes from './components/genderSoes';

function App() {
  return (
    <>
    <Footer/>
    <LandingPage/>
    <Navbar/>
    <FirstPage/>
    <Brands/>
    <GenderSoes/>
    </>
  );
}

export default App;
