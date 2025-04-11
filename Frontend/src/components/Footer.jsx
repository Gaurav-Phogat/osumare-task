import React from 'react';
import logoImage from '../assets/logo.png';

function Footer() {
  return (
    <footer className="py-5">
      <div className="container p-5 rounded-5" style={{ backgroundColor: '#ECF6FF' }}>
        <div className="row d-flex justify-content-between">
          <a href="/" className="d-flex align-items-center me-auto text-white text-decoration-none ">
                    <img className="bi me-2" width="130" height="80" role="img" aria-label="Bootstrap" src={logoImage} alt="Logo" />
                  </a>

          <div className="col-md-4 mb-4">
            <p className="text-dark mb-3" style={{ fontSize: '1.1rem' }}>
              The best digital marketing agency in Pune with a proven track record 
              of consistently delivering quality service.
            </p>
            
            <h5 className="text-dark fw-bold">Address</h5>
            <p className="mb-3" style={{ lineHeight: '1.6' }}>
              Survey No. 43, Pathare Thube Nagar,
              <br />
              Nagar Road, Kharadi, Pune - 14,
              <br />
              Maharashtra, India
            </p>
            
            <h5 className="text-dark fw-bold">Contacts</h5>
            <p className="mb-0">
              <a 
                href="mailto:hello@ousmare.in" 
                className="text-dark text-decoration-none"
              >
                <span><i class="bi bi-envelope-fill"></i></span> hello@ousmare.in
              </a>
            </p>
            <p className="mb-0">
              <a 
                href="tel:+918459878226" 
                className="text-dark text-decoration-none"
              >
                <span><i class="bi bi-telephone-fill"></i></span>+91 8459 8782 26
              </a>
            </p>
          </div>
          
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
            <h5 className="text-dark fw-bold mb-4">Menu</h5>
            <ul className="list-unstyled justify-content-start">
                <li className="mb-3">
                    <a href="#home" className="text-dark text-decoration-none">Home</a>
                </li>
                <li className="mb-3">
                    <a href="#about" className="text-dark text-decoration-none">About</a>
                </li>
                <li className="mb-3">
                    <a href="#services" className="text-dark text-decoration-none">Services</a>
                </li>
                <li className="mb-3">
                    <a href="#work" className="text-dark text-decoration-none">Work</a>
                </li>
                <li className="mb-3">
                    <a href="#blog" className="text-dark text-decoration-none">Blog</a>
                </li>
                <li>
                    <a href="#career" className="text-dark text-decoration-none">Career</a>
                </li>
            </ul>
        </div>
          
        <div className="col-md-2 mb-4 mx-auto">
  <h5 className="text-dark fw-bold ">Social</h5>
  <div className="row row-cols-4">
    <div className="col mb-3">
      <span className="rounded-circle bg-white p-2">
        <i class="bi bi-twitter-x text-dark fs-4"></i>
      </span>
    </div>
    <div className="col mb-3">
      <span className="rounded-circle bg-white p-2">
        <i className="bi bi-facebook text-dark fs-4"></i>
      </span>
    </div>
    <div className="col mb-3">
      <span className="rounded-circle bg-white p-2">
        <i className="bi bi-instagram text-dark fs-4"></i>
      </span>
    </div>
    <div className="col mb-3">
      <span className="rounded-circle bg-white p-2">
        <i className="bi bi-youtube text-dark fs-4"></i>
      </span>
    </div>
    <div className="col mb-3">
      <span className="rounded-circle bg-white p-2">
        <i className="bi bi-whatsapp text-dark fs-4"></i>
      </span>
    </div>
    <div className="col mb-3">
      <span className="rounded-circle bg-white p-2">
      <i class="bi bi-pinterest text-dark fs-4"></i>
      </span>
    </div>
  </div>
</div>
        
        </div>
      </div>
      <div className="text-center">
        <br></br>
          <p className="mb-0 text-dark">
            © 2023 Ousmare. All rights reserved.
          </p>
        </div>
    </footer>
  );
}

export default Footer;
