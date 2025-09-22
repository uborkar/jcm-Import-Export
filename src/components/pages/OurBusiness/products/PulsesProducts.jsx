import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import pulsesBanner from "../../../../assets/img/daal.jpg";
import soyaBanner from "../../../../assets/img/soya-pro.png";
import soypro from "../../../../assets/img/grains.jpg";
import oil from "../../../../assets/img/soyoil.jpg";
import meat  from "../../../../assets/img/soymeat.jpg";
import milk  from "../../../../assets/img/soymilk.jpg";
import tempeh  from "../../../../assets/img/soytempeh.jpg";
import sauce  from "../../../../assets/img/soysauce.jpg";
import tofu  from "../../../../assets/img/soytofu.jpg";
import flour  from "../../../../assets/img/soyflour.jpg";
import toorDalImage from "../../../../assets/img/Toor-re.jpg";
import moongDalImage from "../../../../assets/img/mung.jpg";
import chanaDalImage from "../../../../assets/img/chana.jpg";
import udadDalImage from "../../../../assets/img/urad.jpg";
import masoorDalImage from "../../../../assets/img/masoor-re.jpg";
import packagingImage from "../../../../assets/img/pack.jpg";

export const PulsesProducts = () => {
  const [activeTab, setActiveTab] = useState("soya");
  const [activeCategory, setActiveCategory] = useState("soya");

  const soyaProducts = {
    soya: {
      name: "Raw Soyabean",
      image: soypro,
      description: "Premium quality soybean products, known for their high protein content and versatility in culinary applications. Soybeans are a complete protein source containing all essential amino acids.",
      details: "Our soybean products are processed using state-of-the-art technology to preserve nutritional value and ensure superior quality. Soybeans are an excellent plant-based protein source, rich in fiber, vitamins, and minerals.",
      specs: {
        type: "Various Soybean Products",
        origin: "Select farms across India",
        color: "Varies by product",
        moisture: "Max 10%",
        protein: "Min 35%",
        shelfLife: "6-24 months depending on product",
      },
      nutrition: {
        energy: "446 kcal",
        protein: "36g",
        carbs: "30g",
        fiber: "9g",
        fat: "20g",
      },
      varieties: ["Soybean Oil", "Soy Meat (Textured Vegetable Protein)", "Soy Milk", "Tempeh", "Soy Sauce", "Tofu", "Soy Flour"],
    },
    Soyaoil: {
      name: "Soybean Oil",
      image: oil,
      description: "High-quality soybean oil, extracted from premium soybeans. Known for its light flavor and high smoke point, making it ideal for cooking and frying.",
      details: "Our soybean oil is cold-pressed to retain its natural flavor and nutritional benefits. It's rich in polyunsaturated fats, including omega-3 and omega-6 fatty acids, which are essential for heart health.",
      specs: {
        type: "Refined Soybean Oil",
        origin: "Select farms across India",
        color: "Light yellow",
        moisture: "Max 0.1%",
        protein: "0g",
        shelfLife: "12 months",
      },
      nutrition: {
        energy: "884 kcal",
        protein: "0g",
        carbs: "0g",
        fiber: "0g",
        fat: "100g",
      },
    },
    SoyMeat: {
      name: "Soy Meat (Textured Vegetable Protein)",
      image: meat,
      description: "Textured vegetable protein made from defatted soy flour, a high-protein meat alternative that absorbs flavors beautifully.",
      details: "Our soy meat is made through a process of extrusion that gives it a meat-like texture. It's an excellent source of plant-based protein that's low in fat and cholesterol-free.",
      specs: {
        type: "Textured Vegetable Protein",
        origin: "Select farms across India",
        color: "Light brown",
        moisture: "Max 8%",
        protein: "Min 50%",
        shelfLife: "12 months",
      },
      nutrition: {
        energy: "335 kcal",
        protein: "52g",
        carbs: "30g",
        fiber: "14g",
        fat: "0.5g",
      },
    },
    SoyMilk: {
      name: "Soy Milk",
      image: milk,
      description: "Creamy, nutritious plant-based milk alternative made from whole soybeans. Lactose-free and rich in essential nutrients.",
      details: "Our soy milk is made from carefully selected non-GMO soybeans, soaked, ground and strained to create a smooth, creamy beverage. It's fortified with calcium and vitamins for enhanced nutritional value.",
      specs: {
        type: "Plant-Based Milk",
        origin: "Select farms across India",
        color: "Creamy white",
        moisture: "Max 90%",
        protein: "Min 3.5%",
        shelfLife: "6 months (unopened)",
      },
      nutrition: {
        energy: "54 kcal",
        protein: "3.5g",
        carbs: "6g",
        fiber: "0.5g",
        fat: "1.8g",
      },
    },
    Tempeh: {
      name: "Tempeh",
      image: tempeh,
      description: "Traditional fermented soybean product with a firm texture and nutty flavor, originating from Indonesia.",
      details: "Our tempeh is made through natural fermentation of whole soybeans, which binds them into a compact cake. This process enhances digestibility and increases vitamin content, particularly B vitamins.",
      specs: {
        type: "Fermented Soybean Cake",
        origin: "Select farms across India",
        color: "White with black spots",
        moisture: "Max 60%",
        protein: "Min 19%",
        shelfLife: "2 weeks refrigerated",
      },
      nutrition: {
        energy: "193 kcal",
        protein: "19g",
        carbs: "9g",
        fiber: "5g",
        fat: "11g",
      },
    },
    SoySauce: {
      name: "Soy Sauce",
      image: sauce,
      description: "Traditional fermented seasoning sauce made from soybeans, wheat, salt, and fermenting mold. Adds umami flavor to dishes.",
      details: "Our soy sauce is naturally brewed using traditional methods, aged for several months to develop its complex flavor profile. It's a versatile condiment that enhances the taste of various cuisines.",
      specs: {
        type: "Fermented Seasoning Sauce",
        origin: "Select farms across India",
        color: "Dark brown",
        moisture: "Max 70%",
        protein: "Min 7%",
        shelfLife: "24 months",
      },
      nutrition: {
        energy: "60 kcal",
        protein: "7g",
        carbs: "5g",
        fiber: "0g",
        fat: "0g",
      },
    },
    Tofu: {
      name: "Tofu",
      image: tofu,
      description: "Versatile soybean curd with a soft, cheese-like texture. Made by coagulating soy milk and pressing the resulting curds.",
      details: "Our tofu is made using traditional methods with natural coagulants. It's an excellent source of plant-based protein that absorbs flavors well and can be used in both savory and sweet dishes.",
      specs: {
        type: "Soybean Curd",
        origin: "Select farms across India",
        color: "White",
        moisture: "Max 85%",
        protein: "Min 8%",
        shelfLife: "1 week refrigerated",
      },
      nutrition: {
        energy: "76 kcal",
        protein: "8g",
        carbs: "2g",
        fiber: "0.5g",
        fat: "4.5g",
      },
    },
    SoyFlour: {
      name: "Soy Flour",
      image: flour,
      description: "Finely ground powder made from roasted soybeans. A protein-rich alternative to wheat flour in baking and cooking.",
      details: "Our soy flour is made from carefully selected soybeans that are roasted and ground to a fine consistency. It's gluten-free and adds nutritional value to baked goods while improving moisture retention.",
      specs: {
        type: "Ground Soybean Powder",
        origin: "Select farms across India",
        color: "Creamy yellow",
        moisture: "Max 8%",
        protein: "Min 40%",
        shelfLife: "12 months",
      },
      nutrition: {
        energy: "400 kcal",
        protein: "40g",
        carbs: "35g",
        fiber: "18g",
        fat: "20g",
      },
    },
  };

  const pulsesProducts = {
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
        shelfLife: "12 months",
      },
      nutrition: {
        energy: "343 kcal",
        protein: "22g",
        carbs: "63g",
        fiber: "15g",
        fat: "1.5g",
      },
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
        shelfLife: "18 months",
      },
      nutrition: {
        energy: "347 kcal",
        protein: "24g",
        carbs: "62g",
        fiber: "16g",
        fat: "1.2g",
      },
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
        shelfLife: "24 months",
      },
      nutrition: {
        energy: "360 kcal",
        protein: "20g",
        carbs: "65g",
        fiber: "17g",
        fat: "1.8g",
      },
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
        shelfLife: "18 months",
      },
      nutrition: {
        energy: "341 kcal",
        protein: "25g",
        carbs: "59g",
        fiber: "18g",
        fat: "1.4g",
      },
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
        shelfLife: "15 months",
      },
      nutrition: {
        energy: "353 kcal",
        protein: "26g",
        carbs: "60g",
        fiber: "11g",
        fat: "1.1g",
      },
    },
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Set the first tab as active when switching categories
    if (category === "soya") {
      setActiveTab("soya");
    } else {
      setActiveTab("toor");
    }
  };

  const currentProducts = activeCategory === "soya" ? soyaProducts : pulsesProducts;
  const currentProduct = currentProducts[activeTab];

  return (
    <>
      <div className="et_pb_section et_pb_with_background et_section_regular bg-gradient-primary" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <Container className="py-5">
          <Row className="et_pb_row align-items-center">
            <Col lg={8} className="et_pb_column">
              <div className="et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <div className="inner-page-top fullpage-banner">
                    <div className="inner-left">
                      <Badge bg="warning" className="mb-3 fs-6">Premium Quality</Badge>
                      <h1 className="display-4 fw-bold mb-4" style={{ color: "#001659" }}>Soybean & Pulses Collection</h1>
                      <p className="lead text-muted">JCM Import Export offers a diverse range of high-quality soybean products and pulses sourced from the finest farms across India. Our products are carefully processed, packed with essential nutrients, and perfect for creating delicious, wholesome meals for your family.</p>
                      <div className="d-flex flex-wrap gap-2 mt-4">
                        <Badge bg="success" className="fs-6">100% Natural</Badge>
                        <Badge bg="info" className="fs-6">Rich in Protein</Badge>
                        <Badge bg="primary" className="fs-6">Premium Quality</Badge>
                        <Badge bg="secondary" className="fs-6">Plant-Based Protein</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="et_pb_column et-last-child">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img src={activeCategory === "soya" ? soyaBanner : pulsesBanner} alt="Soybean & Pulses Collection" className="img-fluid rounded shadow-lg" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="et_pb_section et_section_regular py-4 bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <div className="btn-group" role="group" aria-label="Product categories">
                  <button type="button" className={`btn ${activeCategory === "soya" ? "btn-primary" : "btn-outline-primary"} px-4 py-2 rounded-pill me-2`} onClick={() => handleCategoryChange("soya")}>Soybean Products</button>
                  <button type="button" className={`btn ${activeCategory === "pulses" ? "btn-primary" : "btn-outline-primary"} px-4 py-2 rounded-pill`} onClick={() => handleCategoryChange("pulses")}>Pulses</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="tab-Flexible" className="et_pb_section et_section_regular py-5">
        <Container>
          <Row className="et_pb_row">
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#001659" }}>{activeCategory === "soya" ? "Explore Our Soybean Products" : "Explore Our Pulse Varieties"}</h2>
                <p className="lead text-muted">{activeCategory === "soya" ? "Select from our premium range of soybean products" : "Select from our premium range of pulses"}</p>
              </div>

              <Card className="shadow-lg border-0">
                <Card.Header className="bg-white border-0">
                  <ul className="nav nav-tabs nav-fill border-0" role="tablist">
                    {Object.entries(currentProducts).map(([key, product]) => (
                      <li key={key} className="nav-item">
                        <button className={`nav-link ${activeTab === key ? "active" : ""} fw-semibold`} onClick={() => setActiveTab(key)} style={{ color: activeTab === key ? "#001659" : "#6c757d", border: "none", borderBottom: activeTab === key ? "3px solid #001659" : "none", padding: "1rem 1.5rem", backgroundColor: "transparent" }}>
                          {product.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Card.Header>

                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col lg={6} className="text-center">
                      <img src={currentProduct.image} alt={currentProduct.name} className="img-fluid rounded shadow" style={{ width: "300px", height: "400px", objectFit: "cover" }} />
                    </Col>
                    <Col lg={6}>
                      <div className="ps-lg-4">
                        <h3 className="fw-bold mb-3" style={{ color: "#001659" }}>{currentProduct.name}</h3>
                        <p className="text-muted mb-4">{currentProduct.description}</p>
                        <p className="mb-4">{currentProduct.details}</p>

                        {activeTab === "soya" && currentProduct.varieties && (
                          <Card className="mb-4 border-0 shadow-sm">
                            <Card.Header className="bg-info text-white">
                              <h6 className="mb-0">Soybean Product Varieties</h6>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                {currentProduct.varieties.map((variety, index) => (
                                  <Col md={6} key={index}>
                                    <div className="d-flex align-items-center mb-2">
                                      <i className="fas fa-check-circle text-success me-2"></i>
                                      <span>{variety}</span>
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

      <div className="et_pb_section et_pb_with_background et_section_regular bg-light py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#001659" }}>Health Benefits</h2>
                <p className="lead text-muted">Why choose our soybean products and pulses?</p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-primary rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-heart text-white fs-3"></i>
                  </div>
                  <h5 className="fw-bold">Heart Health</h5>
                  <p className="text-muted">Rich in fiber and low in saturated fat, helping to maintain healthy cholesterol levels and support cardiovascular health.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-success rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-dumbbell text-white fs-3"></i>
                  </div>
                  <h5 className="fw-bold">Muscle Building</h5>
                  <p className="text-muted">Excellent source of plant-based protein, essential for muscle growth, repair, and maintenance.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-warning rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-apple-alt text-white fs-3"></i>
                  </div>
                  <h5 className="fw-bold">Nutrient Rich</h5>
                  <p className="text-muted">Packed with essential vitamins, minerals, and antioxidants that support overall health and wellbeing.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="et_pb_section et_pb_with_background et_section_regular py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img src={packagingImage} alt="Packaging Options" className="img-fluid rounded shadow-lg" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                <div className="position-absolute top-0 start-0 bg-primary text-white p-3 rounded-end">
                  <h6 className="mb-0">Premium Packaging</h6>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-lg-4">
                <h2 className="fw-bold mb-4" style={{ color: "#001659" }}>Packaging Solutions</h2>
                <p className="text-muted mb-4">We offer comprehensive packaging solutions designed to preserve quality and ensure customer satisfaction:</p>

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

      <div className="et_pb_section et_pb_with_background et_section_regular py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#001659" }}>Get In Touch</h2>
                <p className="lead text-dark opacity-75">Ready to discuss your soybean or pulse requirements?</p>
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
                    <Link to="/contact" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
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