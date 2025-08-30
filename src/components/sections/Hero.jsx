import React from 'react';
import { Link } from 'react-router-dom';
import carousel1 from '../../assets/img/Hero1.jpg';
import carousel2 from '../../assets/img/Hero2.jpg';
import carousel3 from '../../assets/img/Hero3.jpg';

const Hero = () => {
  // Hover handlers for carousel nav buttons
  const handleNavEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#001659";
  };
  const handleNavLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#FF5E15";
  };

  // Hover handlers for slide buttons
  const handleBtnEnter = (e, hoverColor) => {
    e.currentTarget.style.backgroundColor = hoverColor;
  };
  const handleBtnLeave = (e, originalColor) => {
    e.currentTarget.style.backgroundColor = originalColor;
  };

  return (
    <div className="container-fluid overflow-hidden px-0">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators fadeInUp animate__animated" style={{animationDelay: "1s"}}>
          <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {/* First slide */}
          <div className="carousel-item active">
            <img src={carousel1} className="img-fluid w-100" alt="Construction site with crane"/>
            <div className="carousel-caption">
              <p className="text-uppercase fs-4 mb-0" style={{color: "#ff5e15"}}>Import Export Hub</p>
              <h1 className="display-1 text-capitalize text-white mb-4">Connecting Markets. Delivering Opportunities</h1>
              <p className="mb-5 fs-5">At JCM Import Export Hub, we bridge the gap between producers and global markets by delivering quality products, reliable sourcing, and seamless cross-border trade solutions. </p>
              <div className="d-flex justify-content-center">
                <Link to="/contact" 
                  className="btn d-flex py-3 px-5 me-2 flex-shrink-0"
                  style={{backgroundColor: "#001248", color: "white", border: "none", borderRadius: "0", textDecoration: "none"}}
                  onMouseEnter={(e) => handleBtnEnter(e, "#FF5E15")}
                  onMouseLeave={(e) => handleBtnLeave(e, "#001248")}
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Second slide */}
          <div className="carousel-item">
            <img src={carousel3} className="img-fluid w-100" alt="Modern building construction"/>
            <div className="carousel-caption">
              <p className="text-uppercase fs-4 mb-0" style={{color: "#ff5e15"}}>Import Export Hub</p>
              <h1 className="display-1 text-capitalize text-white mb-4">Seamless Logistics. Smarter Trade</h1>
              <p className="mb-5 fs-5">Emphasizes smooth operations and efficiency in logistics & trade...</p>
              <div className="d-flex justify-content-center">
                <Link to="/contact"
                  className="btn d-inline-block py-3 px-5 ms-2 flex-shrink-0"
                  style={{backgroundColor: "#ff5e15", color: "white", border: "none", borderRadius: "0", textDecoration: "none"}}
                  onMouseEnter={(e) => handleBtnEnter(e, "#001248")}
                  onMouseLeave={(e) => handleBtnLeave(e, "#FF5E15")}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Third slide */}
          <div className="carousel-item">
            <img src={carousel2} className="img-fluid w-100" alt="Construction team working"/>
            <div className="carousel-caption">
              <p className="text-uppercase fs-4 mb-0" style={{color: "#ff5e15"}}>Import Export Hub</p>
              <h1 className="display-1 text-capitalize text-white mb-4">Connecting your business growth with global markets</h1>
              <p className="mb-5 fs-5">With years of experience and a commitment to excellence...</p>
              <div className="d-flex justify-content-center">
                <Link to="/contact"
                  className="btn d-inline-block py-3 px-5 ms-2 flex-shrink-0"
                  style={{backgroundColor: "#ff5e15", color: "white", border: "none", borderRadius: "0", textDecoration: "none"}}
                  onMouseEnter={(e) => handleBtnEnter(e, "#001248")}
                  onMouseLeave={(e) => handleBtnLeave(e, "#FF5E15")}
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls with hover */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon d-flex align-items-center justify-content-center btn-square"
            aria-hidden="true"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#FF5E15",
              backgroundImage: "none",
              borderRadius: "0",
              transition: "0.3s"
            }}
            onMouseEnter={handleNavEnter}
            onMouseLeave={handleNavLeave}
          >
            <i className="fas fa-chevron-left" style={{color: "white", fontSize: "1.2rem"}}></i>
          </span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon d-flex align-items-center justify-content-center btn-square"
            aria-hidden="true"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#FF5E15",
              backgroundImage: "none",
              borderRadius: "0",
              transition: "0.3s"
            }}
            onMouseEnter={handleNavEnter}
            onMouseLeave={handleNavLeave}
          >
            <i className="fas fa-chevron-right" style={{color: "white", fontSize: "1.2rem"}}></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;