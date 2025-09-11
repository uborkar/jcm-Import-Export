import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import textileBanner from "../../../../assets/img/trendy-fabris-shades.jpg";
import naturalFibersImage from "../../../../assets/img/naturalfiber.jpg";
import syntheticFibersImage from "../../../../assets/img/syntheticfiber.jpg";
import blendedFibersImage from "../../../../assets/img/blendedfiber.jpg";
import packagingImage from "../../../../assets/img/cotton-fabric.jpg";

export const Textile = () => {
  const [activeTab, setActiveTab] = useState("natural");

  const textileCategories = {
    natural: {
      name: "Natural Fiber Textiles",
      image: naturalFibersImage,
      description: "Premium natural fibers sourced from plants and animals. Eco-friendly, breathable, and perfect for sustainable fashion.",
      details: "Our natural fiber collection includes the finest quality materials sourced from ethical and sustainable producers. These textiles are biodegradable, hypoallergenic, and offer superior comfort for various applications from fashion to home textiles.",
      fibers: {
        cotton: {
          name: "Cotton",
          source: "Plant (Cotton plant)",
          properties: "Soft, breathable, lightweight, absorbent",
          uses: "Shirts, dresses, bed sheets, towels, undergarments",
          specialNotes: "Hypoallergenic, suitable for sensitive skin"
        },
        linen: {
          name: "Linen",
          source: "Plant (Flax plant)",
          properties: "Strong, absorbent, natural shine, quick-drying",
          uses: "Summer clothing, tablecloths, handkerchiefs, upholstery",
          specialNotes: "Gets softer with every wash, ideal for hot climates"
        },
        silk: {
          name: "Silk",
          source: "Animal (Silkworm cocoons)",
          properties: "Smooth, shiny, luxurious, lightweight yet strong",
          uses: "Sarees, ties, dresses, scarves, upholstery",
          specialNotes: "Symbol of elegance, requires delicate care"
        },
        wool: {
          name: "Wool",
          source: "Animal (Sheep, goats, alpacas, etc.)",
          properties: "Warm, elastic, wrinkle-resistant, insulating",
          uses: "Sweaters, coats, blankets, carpets",
          specialNotes: "Naturally flame-resistant, excellent for winters"
        },
        jute: {
          name: "Jute",
          source: "Plant (Jute stem)",
          properties: "Coarse, strong, eco-friendly, biodegradable",
          uses: "Bags, ropes, mats, carpets, packaging",
          specialNotes: "Known as 'Golden Fiber' due to its natural sheen"
        }
      },
      specs: {
        type: "Natural Plant and Animal Fibers",
        materials: "Cotton, Linen, Silk, Wool, Jute",
        sustainability: "Biodegradable and Eco-friendly",
        comfort: "Breathable and Skin-friendly",
        applications: "Fashion, Home Textiles, Accessories",
        quality: "Premium Grade A Quality"
      },
      features: {
        ecoFriendly: "Environmentally sustainable",
        comfort: "Superior comfort and breathability",
        durability: "Long-lasting natural fibers",
        variety: "Wide range of natural options",
        health: "Hypoallergenic and skin-friendly"
      }
    },
    synthetic: {
      name: "Synthetic Fiber Textiles",
      image: syntheticFibersImage,
      description: "High-performance synthetic fibers engineered for durability, functionality, and versatile applications.",
      details: "Our synthetic fiber collection offers advanced materials with specialized properties for various industrial and fashion applications. These textiles are designed for durability, easy care, and specific performance characteristics.",
      fibers: {
        polyester: {
          name: "Polyester",
          source: "Man-made (Petrochemical-based)",
          properties: "Durable, wrinkle-resistant, quick-drying, lightweight",
          uses: "T-shirts, pants, sportswear, curtains, upholstery",
          specialNotes: "Commonly blended with cotton for comfort"
        },
        nylon: {
          name: "Nylon",
          source: "Man-made (Polyamide polymer)",
          properties: "Strong, stretchable, resistant to abrasion",
          uses: "Hosiery, activewear, swimwear, ropes, tents",
          specialNotes: "Known as the world's first fully synthetic fiber"
        },
        acrylic: {
          name: "Acrylic",
          source: "Man-made (Polyacrylonitrile polymer)",
          properties: "Soft, wool-like, warm, lightweight",
          uses: "Sweaters, blankets, shawls, carpets",
          specialNotes: "Affordable alternative to wool"
        },
        rayon: {
          name: "Rayon (Viscose)",
          source: "Semi-synthetic (Wood pulp + chemical process)",
          properties: "Soft, breathable, silk-like finish",
          uses: "Dresses, linings, upholstery, sarees",
          specialNotes: "Called 'artificial silk,' versatile for fashion & home décor"
        }
      },
      specs: {
        type: "Synthetic and Semi-Synthetic Fibers",
        materials: "Polyester, Nylon, Acrylic, Rayon",
        durability: "High strength and longevity",
        maintenance: "Easy care and quick drying",
        applications: "Sportswear, Outdoor Gear, Home Textiles",
        quality: "Industrial Grade Standards"
      },
      features: {
        performance: "Engineered for specific functions",
        durability: "Exceptional strength and wear resistance",
        maintenance: "Low maintenance and easy care",
        versatility: "Wide range of applications",
        costEffective: "Affordable production and pricing"
      }
    },
    blended: {
      name: "Blended Textiles",
      image: blendedFibersImage,
      description: "Innovative fabric blends that combine the best properties of natural and synthetic fibers for enhanced performance.",
      details: "Our blended textiles offer the perfect combination of comfort, durability, and functionality. By merging natural fibers with synthetics, we create materials that outperform pure fabrics in various applications while maintaining cost-effectiveness.",
      fibers: {
        polycotton: {
          name: "Polycotton (Polyester + Cotton)",
          source: "Blend (Natural + Synthetic)",
          properties: "Durable, wrinkle-resistant, breathable, cost-effective",
          uses: "Uniforms, shirts, bed linen, trousers",
          specialNotes: "Combines comfort of cotton with durability of polyester"
        },
        cottonSilk: {
          name: "Cotton-Silk",
          source: "Blend (Natural Cotton + Natural Silk)",
          properties: "Lightweight, soft, shiny, breathable",
          uses: "Festive wear, sarees, kurtas, dresses",
          specialNotes: "Elegant look with affordable pricing compared to pure silk"
        }
      },
      specs: {
        type: "Natural-Synthetic Hybrid Fabrics",
        materials: "Polycotton, Cotton-Silk, and Custom Blends",
        benefits: "Combined advantages of multiple fibers",
        applications: "Fashion, Uniforms, Home Textiles",
        customization: "Tailored blend ratios available",
        quality: "Optimized performance standards"
      },
      features: {
        balanced: "Best properties of combined fibers",
        value: "Cost-effective without compromising quality",
        versatility: "Suitable for diverse applications",
        durability: "Enhanced strength and longevity",
        comfort: "Maintains natural fiber comfort"
      }
    }
  };

  const currentCategory = textileCategories[activeTab];

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
                      <h1 className="display-4 fw-bold mb-4 " style={{ color: "#001659" }}>Textile & Fabric Collection</h1>
                      <p className="lead text-muted">
                        JCM Import Export offers a comprehensive range of premium textiles including natural,
                        synthetic, and blended fabrics. We source from trusted manufacturers worldwide to provide
                        high-quality materials for fashion, home textiles, and industrial applications.
                      </p>
                      <div className="d-flex flex-wrap gap-2 mt-4">
                        <Badge bg="success" className="fs-6">Export Quality</Badge>
                        <Badge bg="info" className="fs-6">Sustainable Options</Badge>
                        <Badge bg="primary" className="fs-6">Customizable</Badge>
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
                    src={textileBanner}
                    alt="Textile and Fabric Collection"
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
                <h2 className="display-5 fw-bold  mb-3" style={{ color: "#001659" }}>Explore Our Textile Categories</h2>
                <p className="lead text-muted">Select from our premium range of textile products</p>
              </div>
              
              <Card className="shadow-lg border-0">
                <Card.Header className="bg-white border-0">
                  <ul className="nav nav-tabs nav-fill border-0" role="tablist">
                    {Object.entries(textileCategories).map(([key, category]) => (
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
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Card.Header>
                
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col lg={6} className="text-center">
                      <img
                        src={currentCategory.image}
                        alt={currentCategory.name}
                        className="img-fluid rounded shadow"
                        style={{ width: "300px", height: "400px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col lg={6}>
                      <div className="ps-lg-4">
                        <h3 className="fw-bold  mb-3" style={{ color: "#001659" }}>{currentCategory.name}</h3>
                        <p className="text-muted mb-4">{currentCategory.description}</p>
                        <p className="mb-4">{currentCategory.details}</p>
                        
                        <Row className="g-4 mb-4">
                          <Col md={6}>
                            <Card className="h-100 border-0 shadow-sm">
                              <Card.Header className="bg-primary text-white">
                                <h6 className="mb-0">Specifications</h6>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  <li className="mb-2"><strong>Type:</strong> {currentCategory.specs.type}</li>
                                  <li className="mb-2"><strong>Materials:</strong> {currentCategory.specs.materials}</li>
                                  <li className="mb-2"><strong>Sustainability:</strong> {currentCategory.specs.sustainability}</li>
                                  <li className="mb-2"><strong>Applications:</strong> {currentCategory.specs.applications}</li>
                                  <li><strong>Quality:</strong> {currentCategory.specs.quality}</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                          
                          <Col md={6}>
                            <Card className="h-100 border-0 shadow-sm">
                              <Card.Header className="bg-success text-white">
                                <h6 className="mb-0">Key Features</h6>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  <li className="mb-2"><strong>Eco-Friendly:</strong> {currentCategory.features.ecoFriendly}</li>
                                  <li className="mb-2"><strong>Comfort:</strong> {currentCategory.features.comfort}</li>
                                  <li className="mb-2"><strong>Durability:</strong> {currentCategory.features.durability}</li>
                                  <li className="mb-2"><strong>Variety:</strong> {currentCategory.features.variety}</li>
                                  <li><strong>Value:</strong> {currentCategory.features.value || "Excellent price-performance ratio"}</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                        
                        {/* Fiber Details Accordion */}
                        <h4 className="fw-bold mt-4 mb-3" style={{ color: "#001659" }}>Fiber Types</h4>
                        <Accordion defaultActiveKey="0" className="mb-4">
                          {Object.entries(currentCategory.fibers).map(([fiberKey, fiber], index) => (
                            <Accordion.Item key={fiberKey} eventKey={index.toString()}>
                              <Accordion.Header>
                                <strong>{fiber.name}</strong>
                              </Accordion.Header>
                              <Accordion.Body>
                                <Row>
                                  <Col md={6}>
                                    <p><strong>Source:</strong> {fiber.source}</p>
                                    <p><strong>Properties:</strong> {fiber.properties}</p>
                                  </Col>
                                  <Col md={6}>
                                    <p><strong>Uses:</strong> {fiber.uses}</p>
                                    <p><strong>Special Notes:</strong> {fiber.specialNotes}</p>
                                  </Col>
                                </Row>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bulk Manufacturing Section */}
      <div id="full-width" className="et_pb_section et_pb_with_background et_section_regular bg-light py-5">
        <Container>
          <Row className="et_pb_row align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src={packagingImage}
                  alt="Bulk Manufacturing"
                  className="img-fluid rounded shadow-lg"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 start-0 bg-primary text-white p-3 rounded-end">
                  <h6 className="mb-0">Bulk Manufacturing</h6>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h2 className="fw-bold  mb-4" style={{ color: "#001659" }}>Bulk Manufacturing & Wholesale</h2>
                <p className="text-muted mb-4">
                  Our textile products are available for wholesale and large-scale orders. 
                  We supply to fashion brands, retail chains, and manufacturers across 
                  global markets. Our manufacturing capabilities include:
                </p>
                
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle p-3 me-3">
                        <i className="fas fa-pencil-ruler text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Custom Blends</h6>
                        <small className="text-muted">Tailored fiber combinations</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-success rounded-circle p-3 me-3">
                        <i className="fas fa-tag text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Private Labeling</h6>
                        <small className="text-muted">Your brand, our production</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-warning rounded-circle p-3 me-3">
                        <i className="fas fa-check-circle text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Quality Control</h6>
                        <small className="text-muted">Stringent quality measures</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-info rounded-circle p-3 me-3">
                        <i className="fas fa-globe text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Global Supply</h6>
                        <small className="text-muted">Worldwide distribution</small>
                      </div>
                    </div>
                  </Col>
                </Row>
                
                <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                  <Link to="/contact" className="btn btn-primary btn-lg px-4">
                    Request Bulk Quote
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Additional Content Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular py-5">
        <Container>
          <Row className="et_pb_row">
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold  mb-3" style={{ color: "#001659" }}>Our Textile Solutions</h2>
                <p className="lead text-muted">Comprehensive services for the fashion and textile industry</p>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-leaf fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4 className="fw-bold">Natural Fibers</h4>
                  <p className="text-muted">
                    Premium natural textiles including cotton, linen, silk, wool, and jute.
                    Sourced from ethical producers with sustainable practices and certified quality standards.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="et_pb_column mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-cogs fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4 className="fw-bold">Synthetic Fibers</h4>
                  <p className="text-muted">
                    High-performance synthetic materials including polyester, nylon, acrylic, and rayon.
                    Engineered for specific applications with consistent quality and durability.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="et_pb_column mb-4 et-last-child">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-blender fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4 className="fw-bold">Blended Fabrics</h4>
                  <p className="text-muted">
                    Innovative fabric blends that combine the best properties of different fibers.
                    Custom blend ratios available to meet specific performance requirements.
                  </p>
                </Card.Body>
              </Card>
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
                <p className="lead text-dark opacity-75">Ready to discuss your textile requirements?</p>
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
                        textiles@jcmimportexport.com
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

export default Textile;