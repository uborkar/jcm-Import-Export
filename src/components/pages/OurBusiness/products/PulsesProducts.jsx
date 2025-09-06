import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import pulsesBanner from "../../../../assets/img/daal.jpg";
import toorDalImage from "../../../../assets/img/Toor.jpg";
import moongDalImage from "../../../../assets/img/moong.jpg";
import chanaDalImage from "../../../../assets/img/chana.jpg";
import udadDalImage from "../../../../assets/img/urad.jpg";
import masoorDalImage from "../../../../assets/img/masoor.jpg";
import packagingImage from "../../../../assets/img/pack.jpg";

export const PulsesProducts = () => {
  const [activeTab, setActiveTab] = useState("toor");

  const products = {
    toor: {
      name: "Toor Dal (Arhar Dal)",
      image: toorDalImage,
      description: "Premium quality Toor Dal, also known as Arhar Dal or Pigeon Peas, sourced from the finest farms. Rich in protein, fiber, and essential nutrients, making it a staple in Indian households.",
      details: "Our Toor Dal is carefully selected from the best crops and processed using modern technology to ensure superior quality. It has a rich, earthy flavor and creamy texture when cooked, making it perfect for traditional Indian dishes like sambar, dal tadka, and rasam.",
      specs: {
        type: "Toor Dal / Arhar Dal / Pigeon Peas",
        origin: "Select farms across India",
        color: "Golden yellow",
        moisture: "Max 12%",
        protein: "Min 22%",
        shelfLife: "12 months"
      },
      nutrition: {
        energy: "343 kcal",
        protein: "22g",
        carbs: "63g",
        fiber: "15g",
        fat: "1.5g"
      }
    },
    moong: {
      name: "Moong Dal (Green Gram)",
      image: moongDalImage,
      description: "Premium quality Moong Dal, made from green gram, known for its light texture and easy digestibility. Rich in protein, low in fat, and packed with essential nutrients.",
      details: "Our Moong Dal is made from carefully selected green grams that are hulled and split to perfection. It has a mild flavor and soft texture when cooked, making it versatile for various culinary applications including dal fry, khichdi, soups, and salads.",
      specs: {
        type: "Moong Dal / Green Gram",
        origin: "Premium farms across India",
        color: "Pale yellow",
        moisture: "Max 11%",
        protein: "Min 24%",
        shelfLife: "18 months"
      },
      nutrition: {
        energy: "347 kcal",
        protein: "24g",
        carbs: "62g",
        fiber: "16g",
        fat: "1.2g"
      }
    },
    chana: {
      name: "Chana Dal (Bengal Gram)",
      image: chanaDalImage,
      description: "High-quality Chana Dal made from Bengal gram, known for its rich, nutty flavor and firm texture. Packed with protein, fiber, and essential nutrients.",
      details: "Our Chana Dal is made from carefully selected Bengal grams that are hulled and split to perfection. It has a rich, nutty flavor and maintains its shape well when cooked, making it ideal for various dishes including traditional curries and snacks.",
      specs: {
        type: "Chana Dal / Bengal Gram",
        origin: "Select farms across North India",
        color: "Golden yellow",
        moisture: "Max 12%",
        protein: "Min 20%",
        shelfLife: "24 months"
      },
      nutrition: {
        energy: "360 kcal",
        protein: "20g",
        carbs: "65g",
        fiber: "17g",
        fat: "1.8g"
      }
    },
    udad: {
      name: "Udad Dal (Black Gram)",
      image: udadDalImage,
      description: "Premium Udad Dal, also known as Black Gram, known for its rich, earthy flavor and high nutritional value. Essential for South Indian dishes like idli and dosa.",
      details: "Our Udad Dal is carefully processed to retain its natural flavor and nutritional benefits. It's a key ingredient in many Indian recipes and is known for its high protein content and digestive benefits.",
      specs: {
        type: "Udad Dal / Black Gram",
        origin: "Select farms across India",
        color: "Black (whole), White (split)",
        moisture: "Max 11%",
        protein: "Min 25%",
        shelfLife: "18 months"
      },
      nutrition: {
        energy: "341 kcal",
        protein: "25g",
        carbs: "59g",
        fiber: "18g",
        fat: "1.4g"
      }
    },
    masoor: {
      name: "Masoor Dal (Red Lentils)",
      image: masoorDalImage,
      description: "High-quality Masoor Dal, known for its quick cooking time and rich nutritional profile. Perfect for soups, stews, and various dal preparations.",
      details: "Our Masoor Dal is sourced from the best quality red lentils and processed to ensure quick cooking and excellent taste. It's rich in protein, iron, and essential nutrients, making it a healthy choice for everyday meals.",
      specs: {
        type: "Masoor Dal / Red Lentils",
        origin: "Select farms across India",
        color: "Orange-red",
        moisture: "Max 10%",
        protein: "Min 26%",
        shelfLife: "15 months"
      },
      nutrition: {
        energy: "353 kcal",
        protein: "26g",
        carbs: "60g",
        fiber: "11g",
        fat: "1.1g"
      }
    }
  };

  const currentProduct = products[activeTab];

  return (
    <>
      {/* Hero Section with Enhanced Styling */}
      <div className="et_pb_section et_pb_with_background et_section_regular bg-gradient-primary" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <Container className="py-5">
          <Row className="et_pb_row align-items-center">
            <Col lg={8} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <Badge bg="warning" className="mb-3 fs-6">Premium Quality</Badge>
                      <h1 className="display-4 fw-bold mb-4 " style={{ color: "#001659" }}>Premium Pulses Collection</h1>
                      <p className="lead text-muted">
                        JCM Import Export offers a diverse range of high-quality pulses sourced from 
                        the finest farms across India. Our pulses are carefully processed, packed with 
                        essential nutrients, and perfect for creating delicious, wholesome meals for 
                        your family.
                      </p>
                      <div className="d-flex flex-wrap gap-2 mt-4">
                        <Badge bg="success" className="fs-6">100% Natural</Badge>
                        <Badge bg="info" className="fs-6">Rich in Protein</Badge>
                        <Badge bg="primary" className="fs-6">Premium Quality</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="et_pb_column et-last-child">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img
                    src={pulsesBanner}
                    alt="Premium Pulses Collection"
                    className="img-fluid rounded shadow-lg"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Products Tabs Section with Enhanced Styling */}
      <div id="tab-Flexible" className="et_pb_section et_section_regular py-5">
        <Container>
          <Row className="et_pb_row">
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold  mb-3" style={{ color: "#001659" }}>Explore Our Pulse Varieties</h2>
                <p className="lead text-muted">Select from our premium range of pulses</p>
              </div>
              
              <Card className="shadow-lg border-0">
                <Card.Header className="bg-white border-0">
                  <ul className="nav nav-tabs nav-fill border-0" role="tablist">
                    {Object.entries(products).map(([key, product]) => (
                      <li key={key} className="nav-item">
                        <button
                          className={`nav-link ${activeTab === key ? 'active' : ''} fw-semibold`}
                          onClick={() => setActiveTab(key)}
                          style={{
                            color: activeTab === key ? '#001659' : '#6c757d',
                            border: 'none',
                            borderBottom: activeTab === key ? '3px solid #001659' : 'none',
                            padding: '1rem 1.5rem',
                            backgroundColor: 'transparent'
                          }}
                        >
                          {product.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Card.Header>
                
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col lg={6} className="text-center">
                      <img
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        className="img-fluid rounded shadow"
                        style={{ width: "300px", height: "400px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col lg={6}>
                      <div className="ps-lg-4">
                        <h3 className="fw-bold  mb-3" style={{ color: "#001659" }}>{currentProduct.name}</h3>
                        <p className="text-muted mb-4">{currentProduct.description}</p>
                        <p className="mb-4">{currentProduct.details}</p>
                        
                        <Row className="g-4">
                          <Col md={6}>
                            <Card className="h-100 border-0 shadow-sm">
                              <Card.Header className="bg-primary text-white">
                                <h6 className="mb-0">Specifications</h6>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  <li className="mb-2"><strong>Type:</strong> {currentProduct.specs.type}</li>
                                  <li className="mb-2"><strong>Origin:</strong> {currentProduct.specs.origin}</li>
                                  <li className="mb-2"><strong>Color:</strong> {currentProduct.specs.color}</li>
                                  <li className="mb-2"><strong>Moisture:</strong> {currentProduct.specs.moisture}</li>
                                  <li className="mb-2"><strong>Protein:</strong> {currentProduct.specs.protein}</li>
                                  <li><strong>Shelf Life:</strong> {currentProduct.specs.shelfLife}</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                          
                          <Col md={6}>
                            <Card className="h-100 border-0 shadow-sm">
                              <Card.Header className="bg-success text-white">
                                <h6 className="mb-0">Nutritional Value (per 100g)</h6>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  <li className="mb-2"><strong>Energy:</strong> {currentProduct.nutrition.energy}</li>
                                  <li className="mb-2"><strong>Protein:</strong> {currentProduct.nutrition.protein}</li>
                                  <li className="mb-2"><strong>Carbs:</strong> {currentProduct.nutrition.carbs}</li>
                                  <li className="mb-2"><strong>Fiber:</strong> {currentProduct.nutrition.fiber}</li>
                                  <li><strong>Fat:</strong> {currentProduct.nutrition.fat}</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Packaging Information Section with Enhanced Styling */}
      <div className="et_pb_section et_pb_with_background et_section_regular bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src={packagingImage}
                  alt="Packaging Options"
                  className="img-fluid rounded shadow-lg"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 start-0 bg-primary text-white p-3 rounded-end">
                  <h6 className="mb-0">Premium Packaging</h6>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h2 className="fw-bold  mb-4" style={{ color: "#001659" }}>Packaging Solutions</h2>
                <p className="text-muted mb-4">
                  We offer comprehensive packaging solutions designed to preserve quality and ensure customer satisfaction:
                </p>
                
                <Row className="g-3">
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle p-3 me-3">
                        <i className="fas fa-box text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Retail Packs</h6>
                        <small className="text-muted">500g, 1kg, 2kg, 5kg bags</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-success rounded-circle p-3 me-3">
                        <i className="fas fa-pallet text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Bulk Packs</h6>
                        <small className="text-muted">25kg, 50kg for distributors</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-warning rounded-circle p-3 me-3">
                        <i className="fas fa-cog text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Custom Packaging</h6>
                        <small className="text-muted">Tailored to your needs</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-info rounded-circle p-3 me-3">
                        <i className="fas fa-shield-alt text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Quality Assurance</h6>
                        <small className="text-muted">Airtight & moisture-resistant</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Enhanced Contact Information Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular py-5" >
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold  mb-3"style={{ color: "#001659" }}>Get In Touch</h2>
                <p className="lead text-dark opacity-75">Ready to discuss your pulse requirements?</p>
              </div>
              
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Body className="p-5">
                  <Row>
                    <Col md={4} className="text-center mb-4 mb-md-0">
                      <div className="bg-primary rounded-circle p-4 d-inline-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-map-marker-alt fa-2x text-white"></i>
                      </div>
                      <h5 className="fw-bold text-dark">Address</h5>
                      <p className="text-muted mb-0">
                        Business Center, Trade Tower<br />
                        Mumbai 400001
                      </p>
                    </Col>
                    
                    <Col md={4} className="text-center mb-4 mb-md-0">
                      <div className="bg-success rounded-circle p-4 d-inline-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-phone fa-2x text-white"></i>
                      </div>
                      <h5 className="fw-bold text-dark">Contact</h5>
                      <p className="text-muted mb-0">
                        Tel: +91-22-66296100<br />
                        Mobile: +91-9876543210
                      </p>
                    </Col>
                    
                    <Col md={4} className="text-center">
                      <div className="bg-warning rounded-circle p-4 d-inline-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-envelope fa-2x text-white"></i>
                      </div>
                      <h5 className="fw-bold text-dark">Email</h5>
                      <p className="text-muted mb-0">
                        info@jcmimportexport.com<br />
                        agro@jcmimportexport.com
                      </p>
                    </Col>
                  </Row>
                  
                  <div className="text-center mt-5">
                    <Link 
                      to="/contact" 
                      className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
                    >
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Inquiry
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PulsesProducts;