import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/chem2.jpg";
import chemicalImage from "../../../assets/img/chem1.jpg";

export const Chemical = () => {
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
          <h2>Chemicals & Raw Materials Section</h2>
          <p>We're preparing something amazing for you. This section will be available soon!</p>
          
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

          {/* Contact Button */}
          <Link to="/contact" className="coming-soon-btn mt-4">
            Contact Us
          </Link>

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

      {/* Hero Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular blurred-content">
        <Container>
          <Row className="et_pb_row align-items-center">
            <Col lg={8} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <h1 style={{ color: "#001659" }}>Chemicals & Raw Materials</h1>
                      <p>
                        JCM Import Export is a leading supplier of high-purity chemicals and raw materials 
                        for various industries including pharmaceuticals, manufacturing, agriculture, and 
                        research applications. We provide industrial chemicals, pharmaceutical-grade materials, 
                        agricultural chemicals, and specialty raw materials from trusted global manufacturers 
                        with strict quality assurance protocols.
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
                    src={img1}
                    alt="Chemicals and Raw Materials"
                    className="img-fluid wp-image-7714"
                    style={{ width: "534px", height: "450px", objectFit: "cover" }}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Full Width Section */}
      <div id="full-width" className="et_pb_section et_pb_with_background et_section_regular blurred-content">
        <Container>
          <Row className="et_pb_row">
            <Col lg={6} className="et_pb_column">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img
                    src={chemicalImage}
                    alt="Chemical Products"
                    className="img-fluid wp-image-7715"
                    style={{ width: "534px", height: "408px", objectFit: "cover" }}
                  />
                </span>
              </div>
            </Col>
            <Col lg={6} className="et_pb_column et-last-child">
              <div className="et_pb_text pad-sec et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <h2 style={{ color: "#001659" }}>Bulk Chemical Supply</h2>
                      <p>
                        Our bulk chemical products are available for industrial and commercial applications 
                        with various packaging options including drums, totes, and custom containers. We supply 
                        to manufacturers, pharmaceutical companies, agricultural businesses, and research 
                        institutions worldwide. Our logistics network ensures safe handling and timely delivery 
                        of chemical products with proper documentation and compliance with international regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Additional Content Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular blurred-content">
        <Container>
          <Row className="et_pb_row">
            <Col lg={12}>
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <h2>Our Chemical Products Range</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-flask fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Industrial Chemicals</h4>
                  <p>
                    High-quality chemicals for manufacturing, processing, water treatment, and various 
                    industrial applications with consistent purity and reliability.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-pills fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Pharmaceutical Grade</h4>
                  <p>
                    USP, BP, and EP grade chemicals, APIs, excipients, and raw materials for pharmaceutical, 
                    nutraceutical, and healthcare industries.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-leaf fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Agricultural Chemicals</h4>
                  <p>
                    Fertilizers, pesticides, herbicides, and other agro-chemicals to support modern 
                    farming practices and enhance agricultural productivity.
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

export default Chemical;