import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


// Logistics Page
export const Logistics = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold text-primary mb-4">Logistics Solutions</h1>
              <p className="lead mb-4">
                End-to-end logistics solutions including shipping, warehousing, customs clearance, 
                and supply chain management for seamless global trade.
              </p>
              <Button variant="primary" size="lg">Get Shipping Quote</Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Logistics" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Logistics Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-ship fa-2x text-primary"></i>
                  </div>
                  <Card.Title>International Shipping</Card.Title>
                  <Card.Text>
                    Sea, air, and land freight services with global coverage and competitive rates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-warehouse fa-2x text-info"></i>
                  </div>
                  <Card.Title>Warehousing</Card.Title>
                  <Card.Text>
                    Secure storage facilities with inventory management and distribution services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-file-export fa-2x text-success"></i>
                  </div>
                  <Card.Title>Customs Clearance</Card.Title>
                  <Card.Text>
                    Expert handling of customs documentation and regulatory compliance.
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
              <h2 className="mb-4">Contact Our Logistics Team</h2>
              <p className="mb-4">Reach out to our logistics specialists for shipping and supply chain solutions.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope text-primary me-3 fa-lg"></i>
                <span>logistics@jcmimportexport.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone text-primary me-3 fa-lg"></i>
                <span>+1 (555) 123-LOGI</span>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h5 className="card-title mb-4">Request a Quote</h5>
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                      <select className="form-select">
                        <option>Select Service</option>
                        <option>International Shipping</option>
                        <option>Warehousing</option>
                        <option>Customs Clearance</option>
                        <option>Full Logistics Solution</option>
                      </select>
                    </div>
                    <Button variant="primary" className="w-100">Get Quote</Button>
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

export default Logistics;