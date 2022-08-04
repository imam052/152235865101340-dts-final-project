import React from 'react';
import './App.css';
// import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import Homepage from './pages/Homepage';
function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      {/* <Banner/> */}
      <Footer/>
    </>
  );
}

export default App;
