import React from "react";
import { useState } from "react";
import aboutImage from "../../assets/img/masala.jpg";
import aboutImage3 from "../../assets/img/soy.jpg";
import aboutImage1 from "../../assets/img/Hero-2.jpg";
import aboutImage2 from "../../assets/img/grains-agro.jpg";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="about-item-image d-flex">
              <img
                src={aboutImage}
                className="img-1 img-fluid w-50"
                alt="Construction site overview"
              />
              <img
                src={aboutImage3}
                className="img-2 img-fluid w-50"
                alt="Construction workers"
              />
              <div className="about-item-image-content">
                <img
                  src={aboutImage1}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt="Construction details"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.1s">
            <div className="about-item-content">
              <p
                className="text-uppercase  fs-5 mb-0"
                style={{ color: "#FF5E15" }}
              >
                JCM Import-Export Hub
              </p>
              <h2
                className="display-4 text-capitalize mb-3"
                style={{ color: "#001659" }}
              >
                Making global trade simple with JCM expertise
              </h2>
              <p className="mb-4 fs-5">
                JCM Import Export Hub, a proud division of JCM Techedge Pvt.
                Ltd., leads the way in global trade solutions. With a strong
                focus on quality, efficiency, and innovation, we connect
                businesses across continents. Leveraging technology and
                expertise, we ensure reliability, transparency, and customer
                satisfaction—empowering partners to achieve sustainable growth
                worldwide.
              </p>
              <div className="pb-4 mb-4 border-bottom">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="about-item-content-img">
                      <img
                        src={aboutImage2}
                        className="img-fluid w-100"
                        alt="Quality construction work"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="d-flex mb-4">
                      <div className="text-secondary">
                        <i
                          className="bi bi-eye-fill fa-2x"
                          style={{ color: "#FF5E15" }}
                        ></i>
                      </div>
                      <div className="ms-3">
                        <h4 style={{ color: "#001659" }}>Our Vision</h4>
                        <p className="mb-0">
                          To be the world's most trusted import-export partner,
                          connecting global markets with quality products and
                          exceptional service.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="text-secondary">
                        <i
                          className="bi bi-bullseye fa-2x"
                          style={{ color: "#FF5E15" }}
                        ></i>
                      </div>
                      <div className="ms-3">
                        <h4 style={{ color: "#001659" }}>Our Mission</h4>
                        <p className="mb-0">
                          To deliver superior value through reliable supply
                          chain solutions, innovative trade practices, and
                          unwavering commitment to customer satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gy-0 gx-4 justify-content-between pb-4">
                <div className="col-lg-6">
                  <p style={{ color: "#001659" }}>
                    <i
                      className="fas fa-check me-1"
                      style={{ color: "#FF5E15" }}
                    ></i>
                    Competitive pricing
                  </p>
                  <p style={{ color: "#001659" }}>
                    <i
                      className="fas fa-check me-1"
                      style={{ color: "#FF5E15" }}
                    ></i>
                    End-to-end supply chain support
                  </p>
                </div>
                <div className="col-lg-6">
                  <p style={{ color: "#001659" }}>
                    <i
                      className="fas fa-check me-1"
                      style={{ color: "#FF5E15" }}
                    ></i>
                    Certified & compliant operations
                  </p>
                  <p style={{ color: "#001659", marginBottom: "0" }}>
                    <i
                      className="fas fa-check me-1"
                      style={{ color: "#FF5E15" }}
                    ></i>
                    Global trade expertise
                  </p>
                </div>
              </div>
              {/* <a
                className="btn btn-secondary d-inline-block py-3 px-5 me-2 flex-shrink-0 wow fadeInUp"
                data-wow-delay="0.1s"
                href="#"
                style={{
                  backgroundColor: hover ? "#FF5E15" : "#001659",
                  borderRadius: "0",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Discover More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
