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
          </>
        } />
        <Route path="/About" element={
          <>
          <Header />
          <About />
            <Footer />
          </>
        } />
        <Route path="/Products" element={
          <>
            <Header />
            <Product />
            <Footer />
          </>
          
         } />
        <Route path="/Services" element={
          <>
            <Header />
            <Services />
            <Footer />
          </>
          
         } />
        <Route path="/Clients" element={
          <>
          <Header />
          <Clients />
        <Footer />
          </>
        } />
        <Route path="/Contact" element={
          
          <>
          
          <Header/>
          <Contact />
            <Footer />
          </>
          } />
      </Routes>

    </Router>
  );
}

export default App;
