import React, { useState } from "react";
import {  Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/agro-food.png";
import img2 from "../../assets/img/cotton-fabric.jpg";
import img3 from "../../assets/img/machinepart.jpg";
import img4 from "../../assets/img/logistics-1.jpg";
import img5 from "../../assets/img/chem1.jpg";
import img6 from "../../assets/img/logistic-partner.jpg";

const BusinessSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const businessData = [
    {
      id: 1,
      title: "Agro & Food Products",
      description: "We source and export high-quality agricultural and food products from trusted suppliers worldwide.",
      image: img1,
      link: "/food-agro"
    },
    {
      id: 2,
      title: "Textiles & Garments",
      description: "Premium textiles and garments for fashion industry, manufactured to the highest standards.",
      image: img2,
      link: "/Textile"
    },
    {
      id: 3,
      title: "Industrial Goods",
      description: "Durable industrial goods and equipment for various sectors including manufacturing and construction.",
      image: img3,
      link: "/Midc"
    },
    {
      id: 4,
      title: "Global Market Entry Support",
      description: "Comprehensive support services for businesses looking to enter new international markets.",
      image: img4,
      link: "/global-market"
    },
    {
      id: 5,
      title: "Chemicals & Raw Materials",
      description: "High-purity chemicals and raw materials for various industries including pharmaceuticals and manufacturing.",
      image: img5,
      link: "/chemical"
    },
    {
      id: 6,
      title: "Logistics",
      description: "End-to-end logistics solutions including shipping, warehousing, and supply chain management.",
      image: img6,
      link: "/logistics"
    }
  ];

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  const handleReadMore = (link) => {
    navigate(link);
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-12">
            <div className="text-center mb-5">
              <p className="text-uppercase fs-5 mb-0" style={{ color: "#FF5E15" }}>
                Our Business Areas
              </p>
              <h2 className="display-4 text-capitalize mb-3" style={{color: "#001659"}}>
                Comprehensive Global Trade Solutions
              </h2>
              <p className="mb-4 fs-5">
                JCM Import Export Hub offers specialized services across multiple industries, 
                connecting global markets with excellence and reliability.
              </p>
            </div>
            
            <Row className="g-4">
              {businessData.map((business) => (
                <Col md={6} lg={4} key={business.id}>
                  <div 
                    className="card h-100 shadow-sm border-0 overflow-hidden position-relative"
                    onMouseEnter={() => handleCardHover(business.id)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => handleCardClick(business.link)}
                    style={{ 
                      transition: 'all 0.3s ease', 
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Card Image */}
                    <div 
                      className="card-img-top"
                      style={{ 
                        height: '200px', 
                        backgroundImage: `url(${business.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'all 0.4s ease',
                        filter: activeCard === business.id ? 'brightness(0.7)' : 'brightness(1)'
                      }}
                    />
                    
                    {/* Card Overlay Content */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center p-3"
                      style={{ 
                        opacity: activeCard === business.id ? 1 : 0,
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(0, 22, 89, 0.85)',
                        color: 'white',
                        textAlign: 'center'
                      }}
                    >
                      <p className="mb-3">{business.description}</p>
                      <button 
                        className="btn mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(business.link);
                        }}
                        style={{
                          backgroundColor: "#FF5E15",
                          color: "white",
                          borderRadius: "4px",
                          border: "none",
                          padding: "8px 16px"
                        }}
                      >
                        Read More <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                    
                    {/* Card Body */}
                    <div className="card-body text-center d-flex flex-column justify-content-between">
                      <h5 className="card-title fw-bold" style={{color: "#001659"}}>{business.title}</h5>
                      <div>
                        <p className="card-text text-muted small mt-2">
                          Click or hover to learn more
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;