import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import globalMarketImage from "../../../assets/img/Hero-2.jpg"; // You'll need to add this image
import marketResearchImage from "../../../assets/img/Hero-3.jpg"; // You'll need to add this image

export const GlobalMarket = () => {
  return (
    <>
      {/* Hero Section - Matching the provided structure */}
      <div className="et_pb_section et_pb_with_background et_section_regular">
        <Container>
          <Row className="et_pb_row align-items-center">
            <Col lg={8} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <h1>Global Market Entry Support</h1>
                      <p>
                        JCM Import Export provides comprehensive support services for businesses looking 
                        to enter new international markets. With our extensive experience in global trade, 
                        we offer expertise in market research, regulatory compliance, logistics, and market 
                        strategy development to help your business expand successfully into new territories.
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
                    style={{ width: "534px", height: "450px", objectFit: "cover" }}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Full Width Section - Matching the provided structure */}
      <div id="full-width" className="et_pb_section et_pb_with_background et_section_regular">
        <Container>
          <Row className="et_pb_row">
            <Col lg={6} className="et_pb_column">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img
                    src={marketResearchImage}
                    alt="Market Research Services"
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
                      <h2>Comprehensive Market Analysis</h2>
                      <p>
                        Our market entry services include detailed analysis of target markets, competition 
                        assessment, consumer behavior studies, and regulatory landscape mapping. We provide 
                        customized strategies for different regions including Asia, Europe, Middle East, 
                        Africa, and the Americas. Our team helps you navigate cultural differences, legal 
                        requirements, and business practices to ensure successful market penetration and 
                        sustainable growth in new territories.
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
                    <i className="fas fa-chart-line fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Market Research</h4>
                  <p>
                    Comprehensive analysis of target markets, competition landscape, consumer behavior, 
                        and growth opportunities to inform your expansion strategy.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-file-contract fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Regulatory Compliance</h4>
                  <p>
                    Guidance on international trade regulations, certifications, documentation requirements, 
                        and compliance with local laws in target markets.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-handshake fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Partnership Development</h4>
                  <p>
                    Connecting businesses with reliable partners, distributors, agents, and local 
                        representatives in target markets to facilitate successful market entry.
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