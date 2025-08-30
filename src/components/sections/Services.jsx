import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../assets/img/Export_re.jpg';
import service2 from '../../assets/img/Import_re.jpg';
import service3 from '../../assets/img/other_re.jpg';

const Services = () => {
  const [hovered, setHovered] = useState(null);

  const hoverSwap = (e, hover) => {
    e.target.style.backgroundColor = hover;
  };
  const hoverReset = (e, initial) => {
    e.target.style.backgroundColor = initial;
  };

  const services = [
    { 
      id: 1, 
      img: service1, 
      icon: "fas fa-globe", 
      title: "Export Services",
      description: "Our comprehensive export solutions help your business reach global markets efficiently and reliably.",
      features: [
        "Agro & Food Products – Grains, spices, fruits,food packages",
        "Textiles & Apparel – Fabrics, garments",
        "Industrial Goods – Engineering products, machinery",
        "Export Documentation & Licensing – Complete paperwork and certification "
      ],
      link: "/export-services"
    },
    { 
      id: 2, 
      img: service2, 
      icon: "fas fa-ship", 
      title: "Import Services",
      description: "Streamlined import services that ensure timely delivery and compliance with all regulations.",
      features: [
        "Specialty Foods & Ingredients – Premium chocolates, exotic fruits",
        "Machinery & Equipment – Industrial machinery",
        "Consumer Goods – Electronics, appliances",
        "Chemicals & Raw Materials – For manufacturing, pharmaceuticals"
      ],
      link: "/import-services"
    },
    { 
      id: 3, 
      img: service3, 
      icon: "fas fa-chart-line", 
      title: "Value Added Services",
      description: "Enhanced services that add value to your trade operations and business growth.",
      features: [
        "Logistics  – Land transportation with reliable partners",
        "Product Sourcing & Quality Inspection – Quality Check, product testing",
        "Private Labeling & Packaging – Custom branding and packaging ",
        "Market Research & Trade Consulting "
      ],
      link: "/value-added-services"
    }
  ];

  return (
    <div className="container-fluid service bg-light py-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <p className="text-uppercase fs-5 mb-0" style={{ color: "#FF5E15" }}>Our Services</p>
          <h2 className="display-4 text-capitalize mb-3" style={{ color: "#001659" }}>
            Global Trade Solutions & Services
          </h2>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div key={s.id} className="col-lg-4">
              <div
                className="service-item position-relative"
                style={{ border: "1px solid #eee", overflow: "hidden" }}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image wrapper */}
                <div className="service-img position-relative" style={{ overflow: "hidden" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="img-fluid w-100"
                    style={{ transition: "transform 0.4s ease", transform: hovered === s.id ? "scale(1.1)" : "scale(1)" }}
                  />

                  {/* Overlay appears on hover */}
                  {hovered === s.id && (
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                      style={{ backgroundColor: "rgba(0,0,0,0.6)", transition: "all 0.3s ease" }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ width: "120px", height: "120px", backgroundColor: "#FF5E15" }}
                      >
                        <i className={`${s.icon} fa-4x`} style={{ color: "#001659" }}></i>
                      </div>
                      <Link to={s.link} className="d-block fs-4 my-4" style={{ color: "white", textDecoration: "none" }}>
                        {s.title}
                      </Link>
                      <div className="text-white mb-4 px-3">
                        <ul className="text-start" style={{ fontSize: "0.9rem" }}>
                          {s.features.map((feature, index) => (
                            <li key={index} className="mb-2">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to={s.link}
                        className="btn py-2 px-4"
                        style={{ backgroundColor: "#FF5E15", color: "white", borderRadius: "0", textDecoration: "none" }}
                        onMouseEnter={(e) => hoverSwap(e, "#001659")}
                        onMouseLeave={(e) => hoverReset(e, "#FF5E15")}
                      >
                        Read More
                      </Link>
                    </div>
                  )}
                </div>

                {/* Always visible bottom bar */}
                <div
                  className="service-tytle d-flex justify-content-between align-items-center p-3"
                  style={{ backgroundColor: "white", borderTop: "1px solid #eee" }}
                >
                  <h4 style={{ color: "#001659" }}>{s.title}</h4>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "80px", height: "80px", backgroundColor: "#FF5E15" }}
                  >
                    <i className={`${s.icon} fa-2x`} style={{ color: "#001659" }}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="col-12 text-center mt-4">
          <Link
            to="/services"
            className="btn py-3 px-5"
            style={{ backgroundColor: "#FF5E15", color: "white", borderRadius: "0", textDecoration: "none" }}
            onMouseEnter={(e) => hoverSwap(e, "#001659")}
            onMouseLeave={(e) => hoverReset(e, "#FF5E15")}
          >
            More Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;