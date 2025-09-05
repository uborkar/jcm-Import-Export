import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/trendy-fabris-shades.jpg";
import textileImage from "../../../assets/img/towels.jpg"; // You'll need to add this image

export const Textile = () => {
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
                      <h1>Textile & Garments</h1>
                      <p>
                        JCM Import Export is a premier supplier of high-quality textiles and garments, 
                        offering a diverse range of fabrics, clothing, and textile products. We source 
                        from trusted manufacturers and provide premium materials including cotton, silk, 
                        wool, synthetic fabrics, and finished garments for the fashion industry and 
                        retail markets worldwide.
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
                    alt="Textile and Garments"
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
                    src={textileImage}
                    alt="Textile Products"
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
                      <h2>Bulk Manufacturing</h2>
                      <p>
                        Our bulk textile products are available for wholesale and large-scale orders. 
                        We supply to fashion brands, retail chains, and garment manufacturers across 
                        global markets. Our manufacturing capabilities include custom designs, private 
                        labeling, and OEM production with strict quality control measures to ensure 
                        superior product quality and consistency.
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
                  Explore Collections
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
                  <h2>Our Textile & Garment Products</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-tshirt fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Finished Garments</h4>
                  <p>
                    Ready-to-wear clothing including shirts, dresses, trousers, and outerwear 
                    manufactured to international quality standards and fashion trends.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-cut fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Fabrics & Textiles</h4>
                  <p>
                    Premium quality fabrics including cotton, silk, wool, linen, and synthetic 
                    materials for fashion designers, manufacturers, and textile businesses.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-shipping-fast fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4>Global Logistics</h4>
                  <p>
                    Efficient supply chain management and international shipping solutions 
                    to ensure timely delivery of textile products to markets worldwide.
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

export default Textile;