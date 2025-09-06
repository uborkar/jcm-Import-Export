import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/machine.jpg";
import industrialImage from "../../../assets/img/machinepart.jpg"; // You'll need to add this image

// Midc Page (Industrial Goods)
export const Midc = () => {
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
                      <h1>Industrial Goods</h1>
                      <p>
                        JCM Import Export supplies high-quality industrial goods and equipment for various 
                        sectors including manufacturing, construction, infrastructure development, and 
                        industrial maintenance. We provide machinery, tools, components, and safety equipment 
                        from trusted manufacturers worldwide, ensuring reliability and performance for 
                        industrial applications.
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
                    alt="Industrial Goods"
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
                    src={industrialImage}
                    alt="Industrial Products"
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
                      <h2>Industrial Solutions</h2>
                      <p>
                        Our industrial goods range includes heavy machinery, precision tools, industrial 
                        components, and safety equipment for various applications. We cater to manufacturing 
                        plants, construction companies, infrastructure projects, and maintenance operations. 
                        Our products are sourced from reputable manufacturers and undergo strict quality 
                        checks to ensure they meet industrial standards and performance requirements for 
                        demanding environments.
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
                  View Products
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
                  <h2>Our Industrial Products Range</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-cogs fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Machinery & Equipment</h4>
                  <p>
                    High-quality industrial machinery, manufacturing equipment, and processing systems 
                    for various industrial applications and production needs.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-tools fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Tools & Components</h4>
                  <p>
                    Precision tools, industrial components, spare parts, and maintenance equipment 
                    for manufacturing, construction, and industrial operations.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-hard-hat fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Safety Equipment</h4>
                  <p>
                    Certified safety equipment, protective gear, and industrial safety solutions 
                    to ensure workplace safety and compliance with safety regulations.
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
export default Midc;