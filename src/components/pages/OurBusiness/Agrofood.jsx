import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/food-agro.jpg";
import consumerImage from "../../../assets/img/food-materials.jpg"; // You'll need to add this image

// FoodAgro Page
export const FoodAgro = () => {
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
                      <h1>Pulses & Grains</h1>
                      <p>
                        JCM Import Export is a leading importer and supplier of
                        high-quality pulses and grains, offering a variety of
                        products including Toor (Arhar), Moong, Udad, Masoor,
                        Chana, and various peas. Our products are sourced from
                        trusted suppliers worldwide and processed with modern
                        machinery to ensure the highest quality while
                        maintaining food safety standards.
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
                    alt="Pulses and Grains"
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
                    src={consumerImage}
                    alt="Bulk Pack Products"
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
                      <h2>Bulk Pack</h2>
                      <p>
                        Our bulk products are available in various packaging
                        options to meet different market needs. We supply to
                        distributors, wholesalers, and large-scale food
                        processing companies across India and international
                        markets. Our bulk packaging ensures product freshness
                        and quality during transportation and storage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                <Link
                  to="/pulsesproducts"
                  className="et_pb_button pad-sec2 et_pb_bg_layout_light"
                  style={{
                    backgroundColor: "#001659",
                    border: "none",
                    borderRadius: "0",
                    padding: "0.5rem 1.5rem",
                    color: "white",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Know More
                </Link>
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
                  <h2>Our Agro & Food Products Range</h2>
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
                      className="fas fa-seedling fa-2x"
                      style={{ color: "#001659" }}
                    ></i>
                  </div>
                  <h4>Fresh Pulses</h4>
                  <p>
                    High-quality pulses including Toor, Moong, Udad, Masoor, and
                    Chana sourced directly from certified farms and suppliers.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i
                      className="fas fa-wheat-alt fa-2x"
                      style={{ color: "#001659" }}
                    ></i>
                  </div>
                  <h4>Grains & Cereals</h4>
                  <p>
                    Premium quality grains and cereals including rice, wheat,
                    and specialty grains for diverse culinary applications.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="et_pb_column et-last-child">
              <div className="et_pb_text et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i
                      className="fas fa-truck-loading fa-2x"
                      style={{ color: "#001659" }}
                    ></i>
                  </div>
                  <h4>Supply Chain</h4>
                  <p>
                    Efficient logistics and temperature-controlled supply chain
                    to maintain product freshness and quality from farm to
                    table.
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

export default FoodAgro;
