import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Midc Page (Industrial Goods)
export const Midc = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold text-primary mb-4">Industrial Goods</h1>
              <p className="lead mb-4">
                Durable industrial goods and equipment for various sectors including manufacturing, 
                construction, and infrastructure development.
              </p>
              <Button variant="primary" size="lg">View Products</Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Goods" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Industrial Solutions</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-cogs fa-2x text-primary"></i>
                  </div>
                  <Card.Title>Machinery & Equipment</Card.Title>
                  <Card.Text>
                    High-quality industrial machinery and equipment for various manufacturing needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-tools fa-2x text-warning"></i>
                  </div>
                  <Card.Title>Tools & Components</Card.Title>
                  <Card.Text>
                    Precision tools and components for industrial applications and maintenance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-hard-hat fa-2x text-success"></i>
                  </div>
                  <Card.Title>Safety Equipment</Card.Title>
                  <Card.Text>
                    Certified safety equipment and protective gear for industrial environments.
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
              <h2 className="mb-4">Contact Our Industrial Division</h2>
              <p className="mb-4">Reach out to our industrial specialists for equipment and solutions.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope text-primary me-3 fa-lg"></i>
                <span>industrial@jcmimportexport.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone text-primary me-3 fa-lg"></i>
                <span>+1 (555) 123-INDU</span>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h5 className="card-title mb-4">Send us a message</h5>
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <Button variant="primary" className="w-100">Send Message</Button>
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
export default Midc;