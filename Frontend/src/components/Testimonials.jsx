import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c5_img_1 from '../assets/c5_img_1.png';
import c5_img_2 from '../assets/c5_img_2.png';

const sideImage = c5_img_1;
const profilePic = c5_img_2;

const Testimonials = () => {
    const [index, setIndex] = useState(0);
  const slideCount = 3;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: 'How does Ousmare measure campaign success?',
      answer: `We believe in measurable results. Our data-driven approach 
        means that every campaign's performance is tracked, analyzed, 
        and refined for optimal outcomes. We provide regular reports 
        that detail key metrics, giving you clear insights into how 
        our strategies are driving remarkable growth for your brand.`,
    },
    {
      question: 'Second Sample Question?',
      answer: `Sample answer for the second FAQ. Replace with your content.`,
    },
    {
      question: 'Third Sample Question?',
      answer: `Sample answer for the third FAQ. Replace with your content.`,
    },
  ];

  return (
    <div>
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: '1.75rem' }}>
          What Our Pharma Partners Say
        </h2>
        <p className="text-center text-muted mb-5" style={{ fontSize: '1rem' }}>
          Driving Transformations, One Brand at a Time
        </p>

        <Carousel 
          activeIndex={index} 
          onSelect={handleSelect} 
          controls={false} 
          indicators={true} 
          interval={null} 
          wrap={true}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div
                className="card p-5 shadow border"
                style={{
                  borderRadius: '16px',
                  maxWidth: '900px',
                  border: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={sideImage}
                      alt="Partner 1"
                      className="img-fluid h-100"
                      style={{
                        borderRadius: '16px 0 0 16px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={profilePic}
                        alt="Profile of Tabish Khan"
                        className="rounded-circle me-3"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                      <h5 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>
                        Tabish Khan
                      </h5>
                      <i
                        className="bi bi-quote fs-1 ms-auto"
                        style={{ color: '#0042CC' }}
                      ></i>
                    </div>
                    <p className="text-dark mb-0" style={{ fontSize: '1.3rem' }}>
                    Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div
                className="card p-5 shadow border"
                style={{
                  borderRadius: '16px',
                  maxWidth: '900px',
                  border: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={sideImage}
                      alt="Partner 2"
                      className="img-fluid h-100"
                      style={{
                        borderRadius: '16px 0 0 16px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={profilePic}
                        alt="Profile of Dr. Aisha Patel"
                        className="rounded-circle me-3"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                      <h5 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>
                        Dr. Aisha Patel
                      </h5>
                      <i
                        className="bi bi-quote fs-1 ms-auto"
                        style={{ color: '#0042CC' }}
                      ></i>
                    </div>
                    <p className="text-dark mb-0" style={{ fontSize: '1.3rem' }}>
                      With Ousmare’s guidance, we reached our target audiences with precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div
                className="card p-5 shadow border"
                style={{
                  borderRadius: '16px',
                  maxWidth: '900px',
                  border: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={sideImage}
                      alt="Partner 3"
                      className="img-fluid h-100"
                      style={{
                        borderRadius: '16px 0 0 16px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={profilePic}
                        alt="Profile of Joseph Kim"
                        className="rounded-circle me-3"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                      <h5 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>
                        Joseph Kim
                      </h5>
                      <i
                        className="bi bi-quote fs-1 ms-auto"
                        style={{ color: '#0042CC' }}
                      ></i>
                    </div>
                    <p className="text-dark mb-0" style={{ fontSize: '1.3rem' }}>
                      Their innovative approaches have given us a major competitive edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-outline-primary border-1 rounded-circle me-3"
            style={{ width: '40px', height: '40px' }}
            onClick={goToPrev}
            aria-label="Previous Slide"
          >
            <i class="bi bi-arrow-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-primary border-1 rounded-circle"
            style={{ width: '40px', height: '40px' }}
            onClick={goToNext}
            aria-label="Next Slide"
          >
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>

    <section className="py-5 pb-5 mb-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        
        <h2 className="text-center fw-bold mb-2" style={{ fontSize: '1.75rem' }}>
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted mb-4" style={{ fontSize: '1rem' }}>
          Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.
        </p>

        <div className="bg-white shadow-sm rounded-3">
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: index !== faqs.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
              
              <button
                className="w-100 d-flex justify-content-between align-items-center px-4 py-3"
                style={{
                  backgroundColor: openIndex === index ? '#0042CC' : '#ffffff',
                  color: openIndex === index ? '#ffffff' : '#000000',
                  border: 'none',
                  borderRadius: index === openIndex ? '0.5rem 0.5rem 0 0' : '0',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'background-color 0.3s ease',
                }}
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                <i
                  className={`bi ${
                    openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'
                  } fs-5`}
                  style={{
                    color: openIndex === index ? '#ffffff' : '#000000',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              
              {openIndex === index && (
                <div className="px-4 pb-3 pt-3" style={{ backgroundColor: '#ffffff', borderRadius: '0 0 0.5rem 0.5rem' }}>
                  <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
  )
}

export default Testimonials