import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/chem2.jpg";



export const Chemical = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold  mb-4" style={{ color: "#001659" }}>Chemicals & Raw Materials</h1>
              <p className="lead mb-4">
                High-purity chemicals and raw materials for various industries including pharmaceuticals, 
                manufacturing, agriculture, and research applications.
              </p>
              <Button variant="primary" size="lg" style={{ backgroundColor: "#001659", borderRadius:"0" }}>Request Catalog</Button>
            </Col>
            <Col lg={6}>
              <img 
                src={img1}
                alt="Chemicals" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Chemical Products</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-flask fa-2x text-primary"></i>
                  </div>
                  <Card.Title>Industrial Chemicals</Card.Title>
                  <Card.Text>
                    High-quality chemicals for manufacturing, processing, and industrial applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-pills fa-2x text-info"></i>
                  </div>
                  <Card.Title>Pharmaceutical Grade</Card.Title>
                  <Card.Text>
                    USP and BP grade chemicals for pharmaceutical and healthcare industries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-leaf fa-2x text-success"></i>
                  </div>
                  <Card.Title>Agricultural Chemicals</Card.Title>
                  <Card.Text>
                    Fertilizers, pesticides, and other agro-chemicals for modern farming needs.
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
              <h2 className="mb-4">Contact Our Chemical Division</h2>
              <p className="mb-4">Reach out to our chemical specialists for high-purity raw materials.</p>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope  me-3 fa-lg"  style={{ color: "#FF5E15" }}></i>
                <span>chemicals@jcmimportexport.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone  me-3 fa-lg"  style={{ color: "#FF5E15" }}></i>
                <span>+1 (555) 123-CHEM</span>
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
export default Chemical;