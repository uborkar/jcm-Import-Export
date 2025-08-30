// src/components/ConstructionTemplate.js
import React, { useEffect, useRef } from 'react';

const ConstructionTemplate = () => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    // Load external scripts dynamically
    const loadScript = (src, onLoad) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = onLoad;
      document.body.appendChild(script);
      return script;
    };

    // Remove spinner once everything is loaded
    const hideSpinner = () => {
      if (spinnerRef.current) {
        setTimeout(() => {
          spinnerRef.current.classList.remove('show');
        }, 1);
      }
    };

    // Load scripts sequentially
    if (typeof window.jQuery === 'undefined') {
      loadScript('https://code.jquery.com/jquery-3.6.0.min.js', () => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js', () => {
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js', () => {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js', () => {
              loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', () => {
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js', () => {
                  loadScript('https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', () => {
                    initializePlugins();
                    hideSpinner();
                  });
                });
              });
            });
          });
        });
      });
    } else {
      initializePlugins();
      hideSpinner();
    }

    // Initialize all plugins
    const initializePlugins = () => {
      // Initialize WOW.js
      if (window.WOW) {
        new window.WOW().init();
      }

      // Initialize counter
      if (window.jQuery && window.jQuery.fn.counterUp) {
        window.jQuery('.counter').counterUp({
          delay: 10,
          time: 2000
        });
      }

      // Back to top button
      if (window.jQuery) {
        window.jQuery(window).scroll(function () {
          if (window.jQuery(this).scrollTop() > 300) {
            window.jQuery('.back-to-top').fadeIn('slow');
          } else {
            window.jQuery('.back-to-top').fadeOut('slow');
          }
        });
        
        window.jQuery('.back-to-top').click(function () {
          window.jQuery('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
          return false;
        });
      }
    };

    // Sticky navbar
    const handleStickyNavbar = () => {
      if (window.jQuery) {
        window.jQuery(window).scroll(function () {
          if (window.jQuery(this).scrollTop() > 200) {
            window.jQuery('.sticky-top').addClass('shadow-sm').css('top', '0px');
          } else {
            window.jQuery('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
          }
        });
      }
    };

    handleStickyNavbar();

    // Cleanup
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return (
    <div className="construction-template">
      {/* Spinner */}
      <div id="spinner" ref={spinnerRef} className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
          <h2 className="m-0 text-primary">Constra</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#home" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">About</a>
            <a href="#service" className="nav-item nav-link">Service</a>
            <a href="#project" className="nav-item nav-link">Project</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="#feature" className="dropdown-item">Features</a>
                <a href="#team" className="dropdown-item">Our Team</a>
                <a href="#testimonial" className="dropdown-item">Testimonial</a>
              </div>
            </div>
            <a href="#contact" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="https://placehold.co/1920x1080" alt="Construction" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '900px'}}>
                  <h1 className="display-3 text-white mb-md-4">We Build Your Dream</h1>
                  <h2 className="text-white text-uppercase mb-md-3">Construction & Renovation</h2>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="section-title position-relative">
                <h1 className="text-primary">About Us</h1>
                <h2 className="display-5">25 Years Experience</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.</p>
              <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="bg-light text-center p-4">
                    <h3 className="text-primary">Our Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light text-center p-4">
                    <h3 className="text-primary">Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="container-fluid counter bg-primary facts py-5 mb-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-light p-4">
                <div className="counter-counting text-primary">
                  <h1 className="display-5 counter" data-target="1234">1234</h1>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-light p-4">
                <div className="counter-counting text-primary">
                  <h1 className="display-5 counter" data-target="1234">1234</h1>
                  <span>Projects Done</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-light p-4">
                <div className="counter-counting text-primary">
                  <h1 className="display-5 counter" data-target="1234">1234</h1>
                  <span>Expert Workers</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
              <div className="bg-light p-4">
                <div className="counter-counting text-primary">
                  <h1 className="display-5 counter" data-target="1234">1234</h1>
                  <span>Awards Win</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default ConstructionTemplate;