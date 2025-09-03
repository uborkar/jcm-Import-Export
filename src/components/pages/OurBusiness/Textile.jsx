import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Textile = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold  mb-4" style={{ color: "#001659" }}>Textile & Garments</h1>
              <p className="lead mb-4">
                Premium textiles and garments for the fashion industry, manufactured to the highest standards 
                with attention to detail and quality craftsmanship.
              </p>
              <Button variant="primary" size="lg" style={{ backgroundColor: "#001659", borderRadius:"0" }}>Explore Collections</Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1505902987837-52cff4f09182?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Textile Products" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Textile Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-tshirt fa-2x text-primary"></i>
                  </div>
                  <Card.Title>Garment Manufacturing</Card.Title>
                  <Card.Text>
                    High-quality clothing production with attention to detail and craftsmanship.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-cut fa-2x text-info"></i>
                  </div>
                  <Card.Title>Fabric Sourcing</Card.Title>
                  <Card.Text>
                    Premium quality fabrics from trusted suppliers worldwide.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-shipping-fast fa-2x text-success"></i>
                  </div>
                  <Card.Title>Global Distribution</Card.Title>
                  <Card.Text>
                    Efficient logistics network for timely delivery to international markets.
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
              <h2 className="mb-4">Contact Our Textile Division</h2>
              <p className="mb-4">Reach out to our textile specialists for premium fabrics and garments.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope text-primary me-3 fa-lg"></i>
                <span>textile@jcmimportexport.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone text-primary me-3 fa-lg"></i>
                <span>+1 (555) 123-TEXT</span>
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
export default Textile;