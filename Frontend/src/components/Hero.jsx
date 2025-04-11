import React from 'react';
import c1_bg_1 from '../assets/C1_bg.png'; 
import c1_bg_2 from '../assets/c1_bg_2.png'; 
import c1_bg_3 from '../assets/c1_bg_3.png'; 
import c1_img_1 from '../assets/c1_img_1.png';

const Hero = () => {
  return (
    <div>
    <div
      className="px-4 pt-5 text-center mb-5"
      style={{
        position: 'relative', 
        backgroundImage: `url(${c1_bg_1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="display-3" style={{fontFamily: 'montserrat, sans-serif', fontWeight: '600'}}>Elevate <span style={{color: '#0078FF'}}>Real Estate Success</span><br></br> with Osumare's Digital Expertise</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
        Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3 rounded-pill px-5">Get Started</button>
        </div>
      </div>

      <div style={{ position: 'relative'}}>
      <img
        src={c1_bg_2}
        alt="Additional image"
        loading='lazy'
        style={{
          position: 'absolute', 
          top: '50%', 
          right: '10%', 
          transform: 'translateY(-50%)', 
          width: '50%',
          height: 'auto',
        }}
      />
      </div>

      <div className='mb-5' style={{ maxHeight: '30vh' }}>
        <div className="container px-5">
          <img
            src={c1_bg_3}
            className="img-fluid rounded-3"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div className="container col-xxl-8 px-4 pt-5 py-5 mt-5">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="mt-5" style={{
            fontFamily: 'Montserrat, sans-serif',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: '48px',
            textAlign: 'center',
            color: '#000C1A',
        }}>Real-Estate Focused Digital Mastery</h1>
  <div className="row align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={c1_img_1}
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width="700"
        height="500"
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Unlock the Potential of Digital Real Estate Excellence</h1>
      <p className="lead">
      At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 rounded-pill px-5">Get Started</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;