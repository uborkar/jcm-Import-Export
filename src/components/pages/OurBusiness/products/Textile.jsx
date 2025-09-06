import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import textileBanner from "../../../../assets/img/trendy-fabris-shades.jpg";
import apparelImage from "../../../../assets/img/apparels.jpg"; // You'll need to add this image
import fabricsImage from "../../../../assets/img/cotton-fabric.jpg"; // You'll need to add this image
import garmentsImage from "../../../../assets/img/towels.jpg"; // You'll need to add this image
import packagingImage from "../../../../assets/img/cotton-fabric.jpg"; // You'll need to add this image

export const Textile = () => {
  const [activeTab, setActiveTab] = useState("apparel");

  const products = {
    apparel: {
      name: "Apparel Collection",
      image: apparelImage,
      description: "Premium quality apparel collection featuring trendy and timeless fashion pieces. Our garments are crafted with precision, using the finest fabrics and following the latest fashion trends.",
      details: "Our apparel collection includes a wide range of clothing items from casual wear to formal attire. Each piece is designed with attention to detail, ensuring perfect fit, comfort, and style. We follow sustainable practices in our manufacturing process and maintain strict quality control standards.",
      specs: {
        type: "Ready-to-Wear Apparel",
        materials: "Cotton, Silk, Linen, Blends",
        sizes: "XS to XXL (International Sizing)",
        finish: "Premium stitching and finishing",
        quality: "Export Quality Standards",
        packaging: "Individual poly bags with hangers"
      },
      features: {
        trend: "Latest fashion trends",
        comfort: "Superior comfort and fit",
        durability: "Long-lasting quality",
        variety: "Wide range of styles",
        sustainable: "Eco-friendly practices"
      }
    },
    fabrics: {
      name: "Premium Fabrics",
      image: fabricsImage,
      description: "High-quality fabrics sourced from the best mills across India and beyond. Our fabric collection includes natural fibers, blends, and specialty textiles for various applications.",
      details: "We offer an extensive range of fabrics including cotton, silk, linen, wool, and synthetic blends. Our fabrics are known for their superior quality, texture, and durability. Whether you need fabrics for fashion, home textiles, or specialized applications, we have the right material for your needs.",
      specs: {
        type: "Woven and Knitted Fabrics",
        materials: "Natural and Synthetic Fibers",
        width: "44/45\", 56/58\", and custom widths",
        weight: "Lightweight to Heavyweight",
        finish: "Various finishes available",
        application: "Fashion, Home, Technical"
      },
      features: {
        quality: "Mill-direct quality",
        variety: "Extensive range of options",
        custom: "Customization available",
        consistency: "Consistent quality across batches",
        sustainable: "Eco-friendly options"
      }
    },
    garments: {
      name: "Garment Manufacturing",
      image: garmentsImage,
      description: "Complete garment manufacturing solutions from design to delivery. We specialize in producing high-quality garments for brands and retailers worldwide.",
      details: "Our state-of-the-art manufacturing facilities are equipped with modern technology and operated by skilled professionals. We offer end-to-end solutions including design development, pattern making, sampling, production, quality control, and packaging. Our commitment to ethical manufacturing practices ensures fair working conditions and environmental responsibility.",
      specs: {
        type: "Cut-Make-Trim Services",
        capacity: "50,000 pieces monthly",
        leadTime: "4-6 weeks for production",
        minOrder: "500 pieces per style",
        compliance: "ISO, SEDEX, BSCI certified",
        quality: "Stringent QC at each stage"
      },
      features: {
        expertise: "Years of manufacturing experience",
        technology: "Modern equipment and technology",
        flexibility: "Small to large order acceptance",
        compliance: "Ethical and compliant practices",
        reliability: "On-time delivery guarantee"
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
                      <h1 className="display-4 fw-bold mb-4 " style={{ color: "#001659" }}>Textile & Garments Collection</h1>
                      <p className="lead text-muted">
                        JCM Import Export is a premier supplier of high-quality textiles and garments, 
                        offering a diverse range of fabrics, clothing, and textile products. We source 
                        from trusted manufacturers and provide premium materials including cotton, silk, 
                        wool, synthetic fabrics, and finished garments for the fashion industry and 
                        retail markets worldwide.
                      </p>
                      <div className="d-flex flex-wrap gap-2 mt-4">
                        <Badge bg="success" className="fs-6">Export Quality</Badge>
                        <Badge bg="info" className="fs-6">Sustainable</Badge>
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
                    alt="Textile and Garments Collection"
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
                <h2 className="display-5 fw-bold  mb-3" style={{ color: "#001659" }}>Explore Our Textile Varieties</h2>
                <p className="lead text-muted">Select from our premium range of textile products</p>
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
                                  <li className="mb-2"><strong>Materials:</strong> {currentProduct.specs.materials}</li>
                                  <li className="mb-2"><strong>Sizes:</strong> {currentProduct.specs.sizes}</li>
                                  <li className="mb-2"><strong>Finish:</strong> {currentProduct.specs.finish}</li>
                                  <li className="mb-2"><strong>Quality:</strong> {currentProduct.specs.quality}</li>
                                  <li><strong>Packaging:</strong> {currentProduct.specs.packaging}</li>
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
                                  <li className="mb-2"><strong>Trend:</strong> {currentProduct.features.trend}</li>
                                  <li className="mb-2"><strong>Comfort:</strong> {currentProduct.features.comfort}</li>
                                  <li className="mb-2"><strong>Durability:</strong> {currentProduct.features.durability}</li>
                                  <li className="mb-2"><strong>Variety:</strong> {currentProduct.features.variety}</li>
                                  <li><strong>Sustainable:</strong> {currentProduct.features.sustainable}</li>
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
                  Our bulk textile products are available for wholesale and large-scale orders. 
                  We supply to fashion brands, retail chains, and garment manufacturers across 
                  global markets. Our manufacturing capabilities include:
                </p>
                
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle p-3 me-3">
                        <i className="fas fa-pencil-ruler text-white fs-4"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Custom Designs</h6>
                        <small className="text-muted">Tailored to your specifications</small>
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
                <h2 className="display-5 fw-bold  mb-3" style={{ color: "#001659" }}>Our Textile & Garment Solutions</h2>
                <p className="lead text-muted">Comprehensive services for the fashion and textile industry</p>
              </div>
            </Col>
          </Row>
          <Row className="et_pb_row">
            <Col md={4} className="et_pb_column mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-tshirt fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4 className="fw-bold">Finished Garments</h4>
                  <p className="text-muted">
                    Ready-to-wear clothing including shirts, dresses, trousers, and outerwear 
                    manufactured to international quality standards and fashion trends. We offer 
                    both contemporary and traditional designs to meet diverse market needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="et_pb_column mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-cut fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4 className="fw-bold">Fabrics & Textiles</h4>
                  <p className="text-muted">
                    Premium quality fabrics including cotton, silk, wool, linen, and synthetic 
                    materials for fashion designers, manufacturers, and textile businesses. 
                    We source from certified mills ensuring ethical and sustainable production.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="et_pb_column mb-4 et-last-child">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                    <i className="fas fa-shipping-fast fa-2x" style={{ color: "#001659" }}></i>
                  </div>
                  <h4 className="fw-bold">Global Logistics</h4>
                  <p className="text-muted">
                    Efficient supply chain management and international shipping solutions 
                    to ensure timely delivery of textile products to markets worldwide. 
                    Our logistics network spans across continents with reliable partners.
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