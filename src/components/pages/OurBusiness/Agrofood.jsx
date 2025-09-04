import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/food-agro.jpg";

// FoodAgro Page
export const FoodAgro = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1
                className="display-4 fw-bold  mb-4"
                style={{ color: "#001659" }}
              >
                Agro & Food Products
              </h1>
              <p className="lead mb-4">
                We source and export high-quality agricultural and food products
                from trusted suppliers worldwide, ensuring the finest quality
                reaches your table.
              </p>
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#001659", borderRadius: "0" }}
              >
                Get Quote
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src={img1}
                alt="Agro Products"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Agro & Food Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-seedling fa-2x text-primary"></i>
                  </div>
                  <Card.Title>Fresh Produce</Card.Title>
                  <Card.Text>
                    High-quality fruits, vegetables, and grains sourced directly
                    from certified farms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-wine-bottle fa-2x text-success"></i>
                  </div>
                  <Card.Title>Processed Foods</Card.Title>
                  <Card.Text>
                    Premium processed and packaged food products meeting
                    international standards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-truck-loading fa-2x text-warning"></i>
                  </div>
                  <Card.Title>Logistics</Card.Title>
                  <Card.Text>
                    Temperature-controlled supply chain to maintain product
                    freshness and quality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="mb-4">Contact Our Agro Division</h2>
              <p className="mb-4">
                Reach out to our specialists for premium agro and food products.
              </p>
              <div className="d-flex align-items-center mb-3">
                <i
                  className="fas fa-envelope  me-3 fa-lg"
                  style={{ color: "#FF5E15" }}
                ></i>
                <span>agro@jcmimportexport.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i
                  className="fas fa-phone  me-3 fa-lg"
                  style={{ color: "#FF5E15" }}
                ></i>
                <span>+1 (555) 123-AGRO</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i
                  className="fas fa-map-marker-alt me-3 fa-lg"
                  style={{ color: "#FF5E15" }}
                ></i>
                <span>
                  123 Agriculture Street, Food District, Farmland 54321
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h5 className="card-title mb-4">Send us a message</h5>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <Button variant="primary" className="w-100">
                      Send Message
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default FoodAgro;
