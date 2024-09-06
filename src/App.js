import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Services from './pages/Services';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className=''>
            <Home />
            </div>
            <Footer />
            <BackToTopButton />
          </>
        } />
        <Route path="/About" element={
          <>
          <Header />
          <About />
            <Footer />
            <BackToTopButton />
          </>
        } />
        <Route path="/Products" element={
          <>
            <Header />
            <Product />
            <Footer />
            <BackToTopButton />
          </>
          
         } />
        <Route path="/Services" element={
          <>
            <Header />
            <Services />
            <Footer />
            <BackToTopButton />
          </>
          
         } />
        <Route path="/Clients" element={
          <>
          <Header />
          <Clients />
        <Footer />
        <BackToTopButton />
          </>
        } />
        <Route path="/Contact" element={
          
          <>
          
          <Header/>
          <Contact />
            <Footer />
            <BackToTopButton />
          </>
          } />
      </Routes>

    </Router>
  );
}

export default App;
