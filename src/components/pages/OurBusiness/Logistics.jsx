import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logisticsImage from "../../../assets/img/logistic-partner.jpg"; // You'll need to add this image
import shippingImage from "../../../assets/img/logistics-1.jpg"; // You'll need to add this image

export const Logistics = () => {
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
                      <h1>Logistics Solutions</h1>
                      <p>
                        JCM Import Export provides comprehensive end-to-end logistics solutions including 
                        international shipping, warehousing, customs clearance, and supply chain management 
                        for seamless global trade operations. Our expertise in logistics ensures that your 
                        goods move efficiently across borders with minimal delays and maximum cost-effectiveness.
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
                    src={logisticsImage}
                    alt="Logistics Solutions"
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
                    src={shippingImage}
                    alt="Shipping Services"
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
                      <h2>Comprehensive Logistics Services</h2>
                      <p>
                        Our logistics services cover the entire supply chain from origin to destination. 
                        We offer sea freight, air freight, and land transportation with global coverage 
                        and competitive rates. Our warehousing solutions include secure storage facilities 
                        with advanced inventory management systems. We also provide expert customs clearance 
                        services, handling all documentation and regulatory compliance to ensure smooth 
                        passage of goods through customs checkpoints worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                <Button 
                  className="et_pb_button pad-sec2 et_pb_bg_layout_light"
                  style={{ 
                    backgroundColor: "#001659", 
                    border: "none",
                    borderRadius: "0",
                    padding: "0.5rem 1.5rem"
                  }}
                >
                  Get Shipping Quote
                </Button>
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
                  <h2>Our Logistics Services</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-ship fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>International Shipping</h4>
                  <p>
                    Sea, air, and land freight services with global coverage, competitive rates, 
                    and reliable scheduling for all your international shipping needs.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-warehouse fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Warehousing</h4>
                  <p>
                    Secure storage facilities with inventory management, distribution services, 
                    and temperature-controlled options for sensitive goods.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-file-export fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Customs Clearance</h4>
                  <p>
                    Expert handling of customs documentation, regulatory compliance, and 
                    tariff classification to ensure smooth customs clearance processes.
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

export default Logistics;