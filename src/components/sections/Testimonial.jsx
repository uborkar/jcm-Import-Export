import React, { useRef, useEffect, useState } from 'react';
import testimonial1 from '../../assets/img/testimonial-1.jpg';
import testimonial2 from '../../assets/img/testimonial-2.jpg';
import testimonial3 from '../../assets/img/testimonial-3.jpg';
import testimonial4 from '../../assets/img/testimonial-4.jpg';

const Testimonial = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3); // Default to 3

  // Testimonial data
  const testimonials = [
    {
      img: testimonial1,
      name: "Sarah Johnson",
      profession: "Export Manager",
      content: "JCM Import Export streamlined our shipping process to Europe. Their expertise in customs documentation saved us countless hours and reduced delays significantly.",
      rating: 4
    },
    {
      img: testimonial2,
      name: "Michael Chen",
      profession: "Business Owner",
      content: "As a small business expanding internationally, JCM provided invaluable guidance. Their personalized approach helped us navigate complex import regulations with confidence.",
      rating: 5
    },
    {
      img: testimonial3,
      name: "Elena Rodriguez",
      profession: "Supply Chain Director",
      content: "The team at JCM transformed our logistics operations. Their real-time tracking system and proactive communication ensure our shipments always arrive on time.",
      rating: 5
    },
    {
      img: testimonial4,
      name: "David Wilson",
      profession: "Import Specialist",
      content: "Working with JCM has been a game-changer for our company. Their knowledge of trade agreements helped us reduce costs by 18% in the first quarter.",
      rating: 4
    },
    {
      img: testimonial1,
      name: "Priya Sharma",
      profession: "Logistics Manager",
      content: "JCM's customer service is exceptional. They're always available to answer questions and provide solutions, making international trade much less stressful.",
      rating: 5
    },
    {
      img: testimonial3,
      name: "James Thompson",
      profession: "Operations Director",
      content: "We've been partnering with JCM for over 3 years. Their reliability and attention to detail have made them an indispensable part of our supply chain.",
      rating: 4
    }
  ];

  // Handle responsive testimonials per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerView(1);
      } else if (window.innerWidth < 992) {
        setTestimonialsPerView(2);
      } else {
        setTestimonialsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll function
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
        const nextIndex = (prevIndex + 1) % (maxIndex + 1);
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length, testimonialsPerView]);

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth + 16; // width + gap
      const scrollAmount = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Navigation functions
  const scrollPrev = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
      const newIndex = prevIndex === 0 ? maxIndex : prevIndex - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const scrollNext = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
      const newIndex = (prevIndex + 1) % (maxIndex + 1);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'text-warning' : 'text-muted'}`}
        ></i>
      );
    }
    return stars;
  };

  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-1" style={{ maxWidth: '1200px' }}>
        <div className="text-center mx-auto pb-5" style={{maxWidth: "800px"}}>
          <p className="text-uppercase fs-5 mb-0" style={{color: "#FF5E15"}}>Testimonials</p>
          <h2 className="display-4 text-capitalize mb-3" style={{color: "#001659"}}>What our clients say</h2>
        </div>
        
        <div className="position-relative">
          {/* Navigation Buttons - Top Left */}
          <div className="d-flex justify-content-end mb-4">
            <button 
              className="btn btn-primary me-2 square-btn"
              onClick={scrollPrev}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#001659',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <i className="fas fa-arrow-left text-white"></i>
            </button>
            <button 
              className="btn btn-primary square-btn"
              onClick={scrollNext}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#001659',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <i className="fas fa-arrow-right text-white"></i>
            </button>
          </div>
          
          {/* Testimonial Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="d-flex flex-nowrap g-4 pb-4 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              scrollBehavior: 'smooth',
              transition: 'scroll-left 0.5s ease'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 me-4"
                style={{ width: `calc(${100 / testimonialsPerView}% - 16px)` }}
              >
                <div className="testimonial-item bg-light p-4 h-100">
                  <div className="position-relative">
                    <i 
                      className="fa fa-quote-right fa-2x position-absolute" 
                      style={{
                        bottom: "30px", 
                        right: "0",
                        color: "#FF5E15",
                        opacity: "0.7"
                      }}
                    ></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">{testimonial.content}</p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="me-3">
                        <img 
                          src={testimonial.img} 
                          className="img-fluid rounded-circle" 
                          style={{
                            width: "70px", 
                            height: "70px", 
                            objectFit: "cover"
                          }} 
                          alt={testimonial.name} 
                        />
                      </div>
                      <div className="d-block">
                        <h5 className="text-dark mb-1">{testimonial.name}</h5>
                        <p className="m-0 pb-2 text-muted small">{testimonial.profession}</p>
                        <div className="d-flex text-warning">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Square indicator dots */}
        <div className="d-flex justify-content-center mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm mx-1 square-indicator ${currentIndex === index ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              style={{
                width: '12px',
                height: '12px',
                padding: 0
              }}
            ></button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .square-btn {
          border-radius: 4px !important;
        }
        .square-indicator {
          border-radius: 2px !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;