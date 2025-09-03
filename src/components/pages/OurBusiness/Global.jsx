import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// GlobalMarket Page
export const GlobalMarket = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold  mb-4" style={{ color: "#001659" }}>Global Market Entry Support</h1>
              <p className="lead mb-4">
                Comprehensive support services for businesses looking to enter new international markets, 
                with expertise in regulations, logistics, and market strategy.
              </p>
              <Button variant="primary" size="lg" style={{ backgroundColor: "#001659", borderRadius:"0" }}>Start Expanding</Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Global Market" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Market Entry Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-chart-line fa-2x text-primary"></i>
                  </div>
                  <Card.Title>Market Research</Card.Title>
                  <Card.Text>
                    Comprehensive analysis of target markets, competition, and consumer behavior.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-file-contract fa-2x text-info"></i>
                  </div>
                  <Card.Title>Regulatory Compliance</Card.Title>
                  <Card.Text>
                    Guidance on international trade regulations, certifications, and documentation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-handshake fa-2x text-success"></i>
                  </div>
                  <Card.Title>Partnership Development</Card.Title>
                  <Card.Text>
                    Connecting businesses with reliable partners and distributors in target markets.
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
              <h2 className="mb-4">Contact Our Market Entry Team</h2>
              <p className="mb-4">Reach out to our global expansion specialists for market entry support.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope text-primary me-3 fa-lg"></i>
                <span>global@jcmimportexport.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone text-primary me-3 fa-lg"></i>
                <span>+1 (555) 123-GLOBAL</span>
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

export default GlobalMarket;