import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // State for hover effects
  const [signupHover, setSignupHover] = useState(false);
  const [socialHover, setSocialHover] = useState(null);

  // Styles
  const signupBtnStyle = {
    backgroundColor: signupHover ? "#001659" : "#FF5E15",
    borderRadius: "0",
    color: "white",
    transition: "all 0.3s ease-in-out",
  };

  const emailInputStyle = {
    borderRadius: "0",
  };

  // Social buttons: orange → white on hover
  const socialBtnStyle = (isHovered) => ({
    backgroundColor: isHovered ? "#FFFFFF" : "#FF5E15",
    borderRadius: "0",
    transition: "all 0.3s ease-in-out",
  });

  // Social icons: white → blue on hover
  const socialIconStyle = (isHovered) => ({
    color: isHovered ? "#001659" : "white",
    transition: "all 0.3s ease-in-out",
  });

  return (
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.2s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                 Stay updated on global trade trends and import-export regulations with our exclusive industry insights and market analysis newsletter.
                </p>
                <div className="position-relative mx-auto">
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                    style={emailInputStyle}
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-0 end-0 py-2 mt-2 me-2"
                    style={signupBtnStyle}
                    onMouseEnter={() => setSignupHover(true)}
                    onMouseLeave={() => setSignupHover(false)}
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Explore</h4>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Home
              </Link>
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Services
              </Link>
              <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> About Us
              </Link>
              <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Contact Us
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Our Services</h4>
              <Link to="/import-services" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Import Services
              </Link>
              <Link to="/export-services" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Export Services
              </Link>
              <Link to="/value-added-services" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Value Added Services
              </Link>
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Logistic Services
              </Link>
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-angle-right me-2"></i> Textile & Garments
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA
              </a>
              <a href="mailto:info@example.com" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-envelope me-2"></i> info@example.com
              </a>
              <a href="mailto:support@example.com" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-envelope me-2"></i> support@example.com
              </a>
              <a href="tel:+01234567890" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-phone me-2"></i> +012 345 67890
              </a>
              <a href="tel:+01234567891" className="mb-3" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-print me-2"></i> +012 345 67891
              </a>
              <div className="footer-btn d-flex align-items-center">
                {[
                  { icon: "facebook-f", url: "https://facebook.com" },
                  { icon: "twitter", url: "https://twitter.com" },
                  { icon: "instagram", url: "https://instagram.com" },
                  { icon: "linkedin-in", url: "https://linkedin.com" }
                ].map((social, index) => (
                  <a
                    key={social.icon}
                    className="btn btn-md-square me-2"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialBtnStyle(socialHover === index)}
                    onMouseEnter={() => setSocialHover(index)}
                    onMouseLeave={() => setSocialHover(null)}
                  >
                    <i
                      className={`fab fa-${social.icon}`}
                      style={socialIconStyle(socialHover === index)}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;