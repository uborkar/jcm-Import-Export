import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import globalMarketImage from "../../../assets/img/Hero-2.jpg"; // You'll need to add this image
import marketResearchImage from "../../../assets/img/Hero-3.jpg"; // You'll need to add this image

export const GlobalMarket = () => {
  return (
    <>
      <style>
        {`
                /* Coming Soon Overlay Styles */
                .coming-soon-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(0, 22, 89, 0.95);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  z-index: 9999;
                  backdrop-filter: blur(5px);
                }
      
                .coming-soon-content {
                  text-align: center;
                  color: white;
                  padding: 2rem;
                  max-width: 600px;
                }
      
                .coming-soon-badge {
                  background: linear-gradient(45deg, #FF5E15, #FF8C42);
                  color: white;
                  padding: 0.5rem 1.5rem;
                  border-radius: 30px;
                  font-weight: bold;
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  display: inline-block;
                  animation: pulse 2s infinite;
                }
      
                @keyframes pulse {
                  0% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(255, 94, 21, 0.7);
                  }
                  70% {
                    transform: scale(1.05);
                    box-shadow: 0 0 0 10px rgba(255, 94, 21, 0);
                  }
                  100% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(255, 94, 21, 0);
                  }
                }
      
                .coming-soon-content h2 {
                  font-size: 2.5rem;
                  margin-bottom: 1rem;
                  color: white;
                  font-family: 'Playfair Display', serif;
                }
      
                .coming-soon-content p {
                  font-size: 1.2rem;
                  margin-bottom: 2rem;
                  opacity: 0.9;
                  font-family: 'Playfair Display', serif;
                }
      
                /* Blur effect for content */
                .blurred-content {
                  filter: blur(5px);
                  pointer-events: none;
                  user-select: none;
                }
      
                /* Countdown timer */
                .countdown-timer {
                  display: flex;
                  justify-content: center;
                  gap: 1rem;
                  margin-top: 2rem;
                }
      
                .countdown-item {
                  background: rgba(255, 255, 255, 0.1);
                  padding: 1rem;
                  border-radius: 10px;
                  min-width: 80px;
                }
      
                .countdown-number {
                  font-size: 2rem;
                  font-weight: bold;
                  display: block;
                }
      
                .countdown-label {
                  font-size: 0.9rem;
                  opacity: 0.8;
                }
      
                /* Custom button styles */
                .coming-soon-btn {
                  background: #FF5E15;
                  color: white;
                  border: none;
                  padding: 0.75rem 2rem;
                  border-radius: 30px;
                  font-weight: 500;
                  text-decoration: none;
                  display: inline-block;
                  transition: all 0.3s ease;
                  font-family: 'Playfair Display', serif;
                }
      
                .coming-soon-btn:hover {
                  background: #e05512;
                  transform: translateY(-2px);
                  color: white;
                  text-decoration: none;
                }
      
                /* Progress bar */
                .progress-container {
                  width: 100%;
                  max-width: 400px;
                  margin: 2rem auto;
                }
      
                .progress {
                  height: 8px;
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 4px;
                  overflow: hidden;
                }
      
                .progress-bar {
                  height: 100%;
                  background: linear-gradient(90deg, #FF5E15, #FF8C42);
                  border-radius: 4px;
                  animation: progressAnimation 2s ease-in-out infinite;
                }
      
                @keyframes progressAnimation {
                  0% { width: 0%; }
                  50% { width: 70%; }
                  100% { width: 100%; }
                }
      
                /* Social icons */
                .social-icons {
                  display: flex;
                  justify-content: center;
                  gap: 1rem;
                  margin-top: 2rem;
                }
      
                .social-icon {
                  width: 40px;
                  height: 40px;
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  text-decoration: none;
                  transition: all 0.3s ease;
                }
      
                .social-icon:hover {
                  background: #FF5E15;
                  transform: translateY(-3px);
                }
              `}
      </style>

      {/* Coming Soon Overlay */}
      <div className="coming-soon-overlay">
        <div className="coming-soon-content">
          <div className="coming-soon-badge">Coming Soon</div>
          <h2>Global Market Entry Support</h2>
          <p>
            We're preparing something amazing for you. This section will be
            available soon!
          </p>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">15</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">08</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">45</span>
              <span className="countdown-label">Minutes</span>
            </div>
          </div>

          {/* Back to our business page */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {/* Back to our business page */}
            <Link to="/our-business" className="coming-soon-btn">
              Our Business
            </Link>

            {/* Contact Button */}
            <Link to="/contact" className="coming-soon-btn">
              Contact Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section - Matching the provided structure */}
      <div className="et_pb_section et_pb_with_background et_section_regular">
        <Container>
          <Row className="et_pb_row align-items-center">
            <Col lg={8} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <h1 style={{ color: "#001659" }}>
                        Global Market Entry Support
                      </h1>
                      <p>
                        JCM Import Export provides comprehensive support
                        services for businesses looking to enter new
                        international markets. With our extensive experience in
                        global trade, we offer expertise in market research,
                        regulatory compliance, logistics, and market strategy
                        development to help your business expand successfully
                        into new territories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="et_pb_column et-last-child">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img
                    src={globalMarketImage}
                    alt="Global Market Entry Support"
                    className="img-fluid wp-image-7714"
                    style={{
                      width: "534px",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Full Width Section - Matching the provided structure */}
      <div
        id="full-width"
        className="et_pb_section et_pb_with_background et_section_regular"
      >
        <Container>
          <Row className="et_pb_row">
            <Col lg={6} className="et_pb_column">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img
                    src={marketResearchImage}
                    alt="Market Research Services"
                    className="img-fluid wp-image-7715"
                    style={{
                      width: "534px",
                      height: "408px",
                      objectFit: "cover",
                    }}
                  />
                </span>
              </div>
            </Col>
            <Col lg={6} className="et_pb_column et-last-child">
              <div className="et_pb_text pad-sec et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <h2 style={{ color: "#001659" }}>
                        Comprehensive Market Analysis
                      </h2>
                      <p>
                        Our market entry services include detailed analysis of
                        target markets, competition assessment, consumer
                        behavior studies, and regulatory landscape mapping. We
                        provide customized strategies for different regions
                        including Asia, Europe, Middle East, Africa, and the
                        Americas. Our team helps you navigate cultural
                        differences, legal requirements, and business practices
                        to ensure successful market penetration and sustainable
                        growth in new territories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                {/* <Button 
                  className="et_pb_button pad-sec2 et_pb_bg_layout_light"
                  style={{ 
                    backgroundColor: "#001659", 
                    border: "none",
                    borderRadius: "0",
                    padding: "0.5rem 1.5rem"
                  }}
                >
                  Start Expanding
                </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Additional Content Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular">
        <Container>
          <Row className="et_pb_row">
            <Col lg={12}>
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <h2>Our Market Entry Services</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i
                      className="fas fa-chart-line fa-2x"
                      style={{ color: "#001659" }}
                    ></i>
                  </div>
                  <h4>Market Research</h4>
                  <p>
                    Comprehensive analysis of target markets, competition
                    landscape, consumer behavior, and growth opportunities to
                    inform your expansion strategy.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i
                      className="fas fa-file-contract fa-2x"
                      style={{ color: "#001659" }}
                    ></i>
                  </div>
                  <h4>Regulatory Compliance</h4>
                  <p>
                    Guidance on international trade regulations, certifications,
                    documentation requirements, and compliance with local laws
                    in target markets.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i
                      className="fas fa-handshake fa-2x"
                      style={{ color: "#001659" }}
                    ></i>
                  </div>
                  <h4>Partnership Development</h4>
                  <p>
                    Connecting businesses with reliable partners, distributors,
                    agents, and local representatives in target markets to
                    facilitate successful market entry.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GlobalMarket;
