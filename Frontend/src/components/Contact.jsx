import React from 'react';
import c6_bg_left from '../assets/c6_bg_left.png';
import c6_bg_right from '../assets/c6_bg_right.png';

const Contact = () => {
  return (
    <div>
        <section 
              className="position-relative pb-5" 
            >
              {/* Left Background (50%) */}
              <div
                className="position-absolute top-0 start-0 w-50 h-100 overflow-visible"
                style={{
                  background: `url(${c6_bg_left}) center / cover no-repeat`
                }}
              ></div>
              
              {/* Right Background (50%) */}
              <div
                className="position-absolute top-0 end-0 w-50 h-100 overflow-visible"
                style={{
                  background: `url(${c6_bg_right}) center / cover no-repeat`
                }}
              ></div>
        <div className="position-relative d-flex justify-content-center align-items-center h-100 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ fontSize: '1.75rem' }}>
            Your Peace of Mind
          </h2>
          <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
            Through our conversion-focused strategies, we ensure that <br/>
            property seekers are not just visitors, but engaged prospects <br/>
            ready to make their next move in the real estate market.
          </p>
          <div className="container mt-5 border rounded-5 shadow-sm p-5 w-75" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="fw-bold form-label text-start w-100">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="fw-bold form-label text-start w-100">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="fw-bold form-label text-start w-100">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="message" className="fw-bold form-label text-start w-100">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="9"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary rounded-pill px-5 py-2 fw-bold">
          Get started
        </button>
      </form>
    </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      </section>
    </div>
  )
}

export default Contact