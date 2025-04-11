import React from 'react';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="container-fluid sticky-top bg-transparent"
    style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(8px)', 
        WebkitBackdropFilter: 'blur(8px)', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)', 
      }}

    >
      <div className="d-flex align-items-center p-2 ms-4">
        <a href="/" className="d-flex align-items-center me-auto text-dark text-decoration-none">
          <img className="bi me-2" width="140" height="80" role="img" aria-label="Bootstrap" src={logoImage} alt="Logo" />
        </a>

        <div className="me-4">
          <button type="button" className="btn btn-outline-dark me-2 rounded-pill px-5 me-4">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;