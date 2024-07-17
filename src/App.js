import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
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
        <Route path="/clients" element={
          <>
          <Header />
          <Clients />
        <Footer />
          </>
        } />
        <Route path="/contact" element={
          
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
