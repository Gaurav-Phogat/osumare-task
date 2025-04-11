import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Routing = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <main className="flex-shrink-0">
      <Routes>
          <Route path="/" element={<LandingPage />} />
      </Routes>
    </main>
    <Footer />
    </div>
  )
}

export default Routing;