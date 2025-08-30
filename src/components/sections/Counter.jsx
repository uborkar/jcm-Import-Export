import React, { useState } from "react";

const Counter = () => {
  // Button hover state
  const [isHovered, setIsHovered] = useState(false);

  // Button styles
  const buttonStyle = {
    backgroundColor: isHovered ? "#ffffff" : "#FF5E15", // hover white else orange
    color: isHovered ? "#FF5E15" : "#ffffff",           // hover orange else white
    border: "2px solid #001659",
    padding: "12px 30px",
    fontWeight: "600",
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    borderRadius: "0px", // no border radius
    display: "inline-block",
  };

  return (
    <div className="container-fluid counter py-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* Counter Item 1 */}
          <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
            <div className="counter-box">
              <div className="counter-item">
                <div className="counter-item-style"></div>
                <div className="counter-item-inner p-5">
                  <i className="fas fa-ship fa-4x " style={{color: "#FF5E15"}}></i>
                  <h4 className="text-dark my-4">Global Shipments</h4>
                  <div className="counter-counting">
                    <span
                      className="fs-2 fw-bold"
                      data-toggle="counter-up"
                      style={{color: "#FF5E15"}}
                    >
                      2500
                    </span>
                    <span className="h1 fw-bold " style={{color: "#FF5E15"}}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Item 2 */}
          <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
            <div className="counter-box">
              <div className="counter-item">
                <div className="counter-item-style"></div>
                <div className="counter-item-inner p-5">
                  <i className="fas fa-handshake fa-4x " style={{color: "#FF5E15"}}></i>
                  <h4 className="text-dark my-4">Trusted Partners</h4>
                  <div className="counter-counting">
                    <span
                      className="fs-2 fw-bold"
                      data-toggle="counter-up"
                      style={{color: "#FF5E15"}}
                    >
                      1200
                    </span>
                    <span className="h1 fw-bold "style={{color: "#FF5E15"}}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Item 3 */}
          <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
            <div className="counter-box">
              <div className="counter-item">
                <div className="counter-item-style"></div>
                <div className="counter-item-inner p-5">
                  <i className="fas fa-globe-americas fa-4x " style={{color: "#FF5E15"}}></i>
                  <h4 className="text-dark my-4">Countries Connected</h4>
                  <div className="counter-counting">
                    <span
                      className="fs-2 fw-bold"
                      data-toggle="counter-up"
                      style={{color: "#FF5E15"}}
                    >
                      45
                    </span>
                    <span className="h1 fw-bold"style={{color: "#FF5E15"}}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Item 4 */}
          <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
            <div className="counter-box">
              <div className="counter-item">
                <div className="counter-item-style"></div>
                <div className="counter-item-inner p-5">
                  <i className="fas fa-business-time fa-4x " style={{color: "#FF5E15"}}></i>
                  <h4 className="text-dark my-4">Years of Expertise</h4>
                  <div className="counter-counting">
                    <span
                      className="fs-2 fw-bold"
                      data-toggle="counter-up"
                      style={{color: "#FF5E15"}}
                    >
                      10
                    </span>
                    <span className="h1 fw-bold " style={{color: "#FF5E15"}}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div
            className="col-12 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.9s"
          >
            <a
              href="#"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Join With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
