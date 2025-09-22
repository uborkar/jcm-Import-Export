import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import textileBanner from "../../../../assets/img/trendy-fabris-shades.jpg";
import naturalFibersImage from "../../../../assets/img/naturalfiber.jpg";
import syntheticFibersImage from "../../../../assets/img/syntheticfiber.jpg";
import blendedFibersImage from "../../../../assets/img/blendedfiber.jpg";
import cottonImage from "../../../../assets/img/cotton.jpg";
import linenImage from "../../../../assets/img/Linen.jpg";
import silkImage from "../../../../assets/img/Silk.jpg";
import woolImage from "../../../../assets/img/wool.jpg";
import juteImage from "../../../../assets/img/jute.jpg";
import polyesterImage from "../../../../assets/img/polyester.jpg";
import nylonImage from "../../../../assets/img/nylon.jpg";
import acrylicImage from "../../../../assets/img/Acrylic.jpg";
import rayonImage from "../../../../assets/img/rayon.jpg";
import polycottonImage from "../../../../assets/img/poly-cotton.jpg";
import cottonSilkImage from "../../../../assets/img/cotton-silk.jpg";

export const Textile = () => {
  const [activeTab, setActiveTab] = useState("cotton");
  const [activeCategory, setActiveCategory] = useState("natural");

  const textileCategories = {
    natural: {
      name: "Natural Fiber Textiles",
      image: naturalFibersImage,
      description: "Premium natural fibers sourced from plants and animals. Eco-friendly, breathable, and perfect for sustainable fashion.",
      details: "Our natural fiber collection includes the finest quality materials sourced from ethical and sustainable producers. These textiles are biodegradable, hypoallergenic, and offer superior comfort for various applications from fashion to home textiles.",
      fibers: {
        cotton: {
          name: "Cotton",
          image: cottonImage,
          description: "Soft, breathable natural fiber from cotton plants with excellent moisture absorption.",
          details: "Our premium cotton is sourced from the finest farms, offering exceptional softness, durability, and comfort. Perfect for clothing, bedding, and various textile applications. Cotton is hypoallergenic and perfect for sensitive skin.",
          specs: {
            type: "Natural Plant Fiber",
            origin: "Select farms across India and global sources",
            strength: "High tensile strength",
            absorbency: "Excellent moisture absorption",
            comfort: "Breathable and skin-friendly",
            applications: "Clothing, bedding, towels, medical textiles"
          },
          features: ["Hypoallergenic", "Biodegradable", "Breathable", "Moisture-wicking", "Durable"]
        },
        linen: {
          name: "Linen",
          image: linenImage,
          description: "Strong, durable fiber from flax plants with natural texture and excellent cooling properties.",
          details: "Our linen fabrics are known for their exceptional strength, coolness, and freshness. Ideal for summer clothing and home textiles with a natural, rustic appeal. Linen becomes softer with each wash and is perfect for hot climates.",
          specs: {
            type: "Natural Plant Fiber",
            origin: "European and Indian flax sources",
            strength: "Very strong (2-3 times stronger than cotton)",
            absorbency: "Excellent moisture wicking",
            comfort: "Cool and fresh feeling",
            applications: "Summer clothing, tableware, bedding, upholstery"
          },
          features: ["Highly absorbent", "Thermoregulating", "Antibacterial", "Eco-friendly", "Durable"]
        },
        silk: {
          name: "Silk",
          image: silkImage,
          description: "Luxurious natural protein fiber with brilliant shine and smooth texture.",
          details: "Our silk collection features the finest quality fibers known for their smooth texture, natural sheen, and luxurious feel. Perfect for high-end fashion and elegant home décor. Silk is naturally temperature-regulating and hypoallergenic.",
          specs: {
            type: "Natural Protein Fiber",
            origin: "Mulberry silk worms from premium sources",
            strength: "Strongest natural fiber",
            texture: "Smooth and lustrous",
            comfort: "Thermoregulating properties",
            applications: "Luxury clothing, sarees, scarves, bedding"
          },
          features: ["Luxurious feel", "Temperature regulating", "Hypoallergenic", "Strong and durable", "Natural sheen"]
        },
        wool: {
          name: "Wool",
          image: woolImage,
          description: "Natural fiber from sheep with excellent insulation and moisture-wicking properties.",
          details: "Our wool textiles offer exceptional warmth, moisture management, and natural elasticity. Sourced from premium sheep breeds for superior quality and performance. Wool is naturally flame-resistant and perfect for winter clothing.",
          specs: {
            type: "Natural Animal Fiber",
            origin: "Merino and other premium sheep varieties",
            insulation: "Excellent thermal regulation",
            moisture: "Wicks moisture away from body",
            elasticity: "Natural stretch and recovery",
            applications: "Winter clothing, blankets, carpets, upholstery"
          },
          features: ["Thermal insulation", "Moisture-wicking", "Flame-resistant", "Elastic", "Biodegradable"]
        },
        jute: {
          name: "Jute",
          image: juteImage,
          description: "Eco-friendly, biodegradable fiber with natural golden shine and rustic appeal.",
          details: "Our jute products are sustainable, durable, and perfect for various applications. Known as the 'golden fiber,' it's completely biodegradable and environmentally friendly. Jute is strong, breathable, and perfect for eco-conscious products.",
          specs: {
            type: "Natural Bast Fiber",
            origin: "Ganges Delta region and other premium sources",
            sustainability: "100% biodegradable and compostable",
            strength: "High tensile strength",
            texture: "Coarse and natural",
            applications: "Packaging, carpets, rugs, geotextiles"
          },
          features: ["100% biodegradable", "Eco-friendly", "Strong and durable", "Breathable", "Cost-effective"]
        }
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
          image: polyesterImage,
          description: "Versatile synthetic fiber with excellent durability, wrinkle resistance, and quick-drying properties.",
          details: "Our polyester fabrics are engineered for performance, offering exceptional strength, quick drying, and resistance to shrinking and stretching. Ideal for activewear, everyday clothing, and home textiles. Polyester is often blended with natural fibers for enhanced performance.",
          specs: {
            type: "Synthetic Polymer Fiber",
            composition: "Polyethylene terephthalate (PET)",
            strength: "High strength and durability",
            maintenance: "Wrinkle-resistant and easy care",
            drying: "Quick-drying properties",
            applications: "Activewear, clothing, upholstery, textiles"
          },
          features: ["Wrinkle-resistant", "Quick-drying", "Durable", "Colorfast", "Easy care"]
        },
        nylon: {
          name: "Nylon",
          image: nylonImage,
          description: "Strong, elastic synthetic fiber with excellent abrasion resistance and durability.",
          details: "Our nylon textiles offer exceptional strength, elasticity, and resistance to wear and tear. Perfect for applications requiring durability and performance under stress. Nylon was the world's first fully synthetic fiber and remains popular for its excellent properties.",
          specs: {
            type: "Synthetic Polyamide Fiber",
            strength: "Exceptionally strong and durable",
            elasticity: "Excellent stretch and recovery",
            resistance: "Abrasion and chemical resistant",
            weight: "Lightweight yet strong",
            applications: "Hosiery, sportswear, ropes, parachutes"
          },
          features: ["High strength", "Excellent elasticity", "Abrasion-resistant", "Lightweight", "Quick-drying"]
        },
        acrylic: {
          name: "Acrylic",
          image: acrylicImage,
          description: "Soft, wool-like synthetic fiber with excellent warmth retention and lightweight comfort.",
          details: "Our acrylic fabrics provide the warmth and softness of wool with the benefits of synthetic fibers. Lightweight, hypoallergenic, and perfect for knitwear, blankets, and winter clothing. Acrylic is colorfast and maintains its shape well.",
          specs: {
            type: "Synthetic Polymer Fiber",
            warmth: "Excellent insulation properties",
            weight: "Lightweight and soft",
            maintenance: "Machine washable and quick drying",
            resistance: "Moth and chemical resistant",
            applications: "Sweaters, blankets, fake fur, upholstery"
          },
          features: ["Wool-like warmth", "Lightweight", "Hypoallergenic", "Colorfast", "Shape-retaining"]
        },
        rayon: {
          name: "Rayon (Viscose)",
          image: rayonImage,
          description: "Semi-synthetic fiber with silk-like feel, excellent drape, and moisture absorption.",
          details: "Our rayon fabrics offer the luxurious feel of natural silk with enhanced durability and affordability. Excellent drape and moisture absorption make it perfect for clothing, linings, and home textiles. Rayon is made from regenerated cellulose from wood pulp.",
          specs: {
            type: "Semi-Synthetic Cellulose Fiber",
            source: "Regenerated wood pulp",
            feel: "Soft and silk-like",
            drape: "Excellent hanging properties",
            absorbency: "High moisture absorption",
            applications: "Dresses, blouses, linings, medical supplies"
          },
          features: ["Silk-like feel", "Excellent drape", "Highly absorbent", "Breathable", "Versatile"]
        }
      }
    },
    blended: {
      name: "Blended Textiles",
      image: blendedFibersImage,
      description: "Innovative fabric blends that combine the best properties of natural and synthetic fibers for enhanced performance.",
      details: "Our blended textiles offer the perfect combination of comfort, durability, and functionality. By merging natural fibers with synthetics, we create materials that outperform pure fabrics in various applications while maintaining cost-effectiveness.",
      fibers: {
        polycotton: {
          name: "Poly-Cotton",
          image: polycottonImage,
          description: "Perfect blend of polyester and cotton combining comfort with durability and easy care.",
          details: "Our poly-cotton blends combine the comfort of cotton with the durability of polyester. This creates fabrics that are easy to care for, resistant to wrinkles, and comfortable to wear. Available in various blend ratios to meet specific requirements.",
          specs: {
            type: "Blended Fabric (Polyester + Cotton)",
            ratios: "65/35, 50/50, 35/65 blends available",
            durability: "Enhanced strength and longevity",
            comfort: "Maintains cotton's breathability",
            maintenance: "Wrinkle-resistant and easy iron",
            applications: "Uniforms, workwear, bed linens, shirts"
          },
          features: ["Wrinkle-resistant", "Easy care", "Durable", "Comfortable", "Cost-effective"]
        },
        cottonSilk: {
          name: "Cotton-Silk",
          image: cottonSilkImage,
          description: "Luxurious blend combining cotton's comfort with silk's elegance and natural sheen.",
          details: "Our cotton-silk blends offer the best of both worlds - the affordability and comfort of cotton with the luxurious sheen and drape of silk. Perfect for premium clothing, sarees, and special occasion wear. Various blend ratios available.",
          specs: {
            type: "Blended Fabric (Cotton + Silk)",
            ratios: "Various blends from 70/30 to 50/50",
            feel: "Soft with subtle sheen",
            comfort: "Breathable and skin-friendly",
            appearance: "Elegant and luxurious",
            applications: "Premium clothing, sarees, scarves, blouses"
          },
          features: ["Luxurious appearance", "Comfortable", "Breathable", "Elegant drape", "Versatile"]
        }
      }
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Set the first fiber as active when switching categories
    const firstFiber = Object.keys(textileCategories[category].fibers)[0];
    setActiveTab(firstFiber);
  };

  const currentCategory = textileCategories[activeCategory];
  const currentFiber = currentCategory.fibers[activeTab];

  return (
    <>
      {/* Hero Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular bg-gradient-primary" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <Container className="py-5">
          <Row className="et_pb_row align-items-center">
            <Col lg={8} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <Badge bg="warning" className="mb-3 fs-6">Premium Quality</Badge>
                      <h1 className="display-4 fw-bold mb-4" style={{ color: "#001659" }}>Textile & Fabric Collection</h1>
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

      {/* Category Selection */}
      <div className="et_pb_section et_section_regular py-4 bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <div className="btn-group" role="group" aria-label="Textile categories">
                  <button type="button" className={`btn ${activeCategory === "natural" ? "btn-primary" : "btn-outline-primary"} px-4 py-2 rounded-pill me-2`} onClick={() => handleCategoryChange("natural")}>Natural Fiber</button>
                  <button type="button" className={`btn ${activeCategory === "synthetic" ? "btn-primary" : "btn-outline-primary"} px-4 py-2 rounded-pill me-2`} onClick={() => handleCategoryChange("synthetic")}>Synthetic Fiber</button>
                  <button type="button" className={`btn ${activeCategory === "blended" ? "btn-primary" : "btn-outline-primary"} px-4 py-2 rounded-pill`} onClick={() => handleCategoryChange("blended")}>Blended Fiber</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Products Tabs Section */}
      <div id="tab-Flexible" className="et_pb_section et_section_regular py-5">
        <Container>
          <Row className="et_pb_row">
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#001659" }}>{currentCategory.name}</h2>
                <p className="lead text-muted">{currentCategory.description}</p>
              </div>

              <Card className="shadow-lg border-0">
                <Card.Header className="bg-white border-0">
                  <ul className="nav nav-tabs nav-fill border-0" role="tablist">
                    {Object.entries(currentCategory.fibers).map(([key, fiber]) => (
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
                          {fiber.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Card.Header>

                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col lg={6} className="text-center">
                      <img
                        src={currentFiber.image}
                        alt={currentFiber.name}
                        className="img-fluid rounded shadow"
                        style={{ width: "300px", height: "400px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col lg={6}>
                      <div className="ps-lg-4">
                        <h3 className="fw-bold mb-3" style={{ color: "#001659" }}>{currentFiber.name}</h3>
                        <p className="text-muted mb-4">{currentFiber.description}</p>
                        <p className="mb-4">{currentFiber.details}</p>

                        {/* Fiber Features */}
                        {currentFiber.features && (
                          <Card className="mb-4 border-0 shadow-sm">
                            <Card.Header className="bg-info text-white">
                              <h6 className="mb-0">{currentFiber.name} Features</h6>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                {currentFiber.features.map((feature, index) => (
                                  <Col md={6} key={index}>
                                    <div className="d-flex align-items-center mb-2">
                                      <i className="fas fa-check-circle text-success me-2"></i>
                                      <span>{feature}</span>
                                    </div>
                                  </Col>
                                ))}
                              </Row>
                            </Card.Body>
                          </Card>
                        )}

                        <Row className="g-4">
                          <Col md={6}>
                            <Card className="h-100 border-0 shadow-sm">
                              <Card.Header className="bg-primary text-white">
                                <h6 className="mb-0">Specifications</h6>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  <li className="mb-2"><strong>Type:</strong> {currentFiber.specs.type}</li>
                                  <li className="mb-2"><strong>Origin:</strong> {currentFiber.specs.origin}</li>
                                  <li className="mb-2"><strong>Strength:</strong> {currentFiber.specs.strength}</li>
                                  <li className="mb-2"><strong>Comfort:</strong> {currentFiber.specs.comfort}</li>
                                  <li><strong>Applications:</strong> {currentFiber.specs.applications}</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col md={6}>
                            <Card className="h-100 border-0 shadow-sm">
                              <Card.Header className="bg-success text-white">
                                <h6 className="mb-0">Key Properties</h6>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  {currentFiber.specs.absorbency && (
                                    <li className="mb-2"><strong>Absorbency:</strong> {currentFiber.specs.absorbency}</li>
                                  )}
                                  {currentFiber.specs.maintenance && (
                                    <li className="mb-2"><strong>Maintenance:</strong> {currentFiber.specs.maintenance}</li>
                                  )}
                                  {currentFiber.specs.drying && (
                                    <li className="mb-2"><strong>Drying:</strong> {currentFiber.specs.drying}</li>
                                  )}
                                  {currentFiber.specs.elasticity && (
                                    <li className="mb-2"><strong>Elasticity:</strong> {currentFiber.specs.elasticity}</li>
                                  )}
                                  {currentFiber.specs.insulation && (
                                    <li><strong>Insulation:</strong> {currentFiber.specs.insulation}</li>
                                  )}
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

      {/* Benefits Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular bg-light py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#001659" }}>Textile Benefits</h2>
                <p className="lead text-muted">Why choose our textile products?</p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-primary rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-leaf text-white fs-3"></i>
                  </div>
                  <h5 className="fw-bold">Eco-Friendly Options</h5>
                  <p className="text-muted">Natural and biodegradable fibers that are environmentally sustainable and perfect for eco-conscious consumers.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-success rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-medal text-white fs-3"></i>
                  </div>
                  <h5 className="fw-bold">Premium Quality</h5>
                  <p className="text-muted">All our textiles undergo strict quality control to ensure superior durability, comfort, and performance.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-warning rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-tshirt text-white fs-3"></i>
                  </div>
                  <h5 className="fw-bold">Versatile Applications</h5>
                  <p className="text-muted">From fashion to home textiles and industrial applications, our fabrics meet diverse needs and requirements.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Manufacturing Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src={cottonImage}
                  alt="Textile Manufacturing"
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
                <h2 className="fw-bold mb-4" style={{ color: "#001659" }}>Manufacturing & Wholesale</h2>
                <p className="text-muted mb-4">
                  Our textile products are available for wholesale and large-scale orders. 
                  We supply to fashion brands, retail chains, and manufacturers across 
                  global markets. Our manufacturing capabilities include:
                </p>

                <Row className="g-3">
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

                <div className="mt-4">
                  <Link to="/contact" className="btn btn-primary btn-lg px-4">
                    Request Bulk Quote
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Enhanced Contact Information Section */}
      <div className="et_pb_section et_pb_with_background et_section_regular py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#001659" }}>Get In Touch</h2>
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
                        <br />
                        Pimpri Chinchwad, Pune
                      </p>
                    </Col>

                    <Col md={4} className="text-center mb-4 mb-md-0">
                      <div className="bg-success rounded-circle p-4 d-inline-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-phone fa-2x text-white"></i>
                      </div>
                      <h5 className="fw-bold text-dark">Contact</h5>
                      <p className="text-muted mb-0">
                        <br />
                        Mobile: +91-9370936583
                      </p>
                    </Col>

                    <Col md={4} className="text-center">
                      <div className="bg-warning rounded-circle p-4 d-inline-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-envelope fa-2x text-white"></i>
                      </div>
                      <h5 className="fw-bold text-dark">Email</h5>
                      <p className="text-muted mb-0">
                        <br />
                        jcmimportexporthub@gmail.com
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