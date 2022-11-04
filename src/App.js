import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
