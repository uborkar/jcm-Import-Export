import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/chem2.jpg";
import chemicalImage from "../../../assets/img/chem1.jpg"; // You'll need to add this image

export const Chemical = () => {
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
                      <h1>Chemicals & Raw Materials</h1>
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

      {/* Full Width Section - Matching the provided structure */}
      <div id="full-width" className="et_pb_section et_pb_with_background et_section_regular">
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
                      <h2>Bulk Chemical Supply</h2>
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
                  Request Catalog
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