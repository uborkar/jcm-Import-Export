import React from 'react';

const Topbar = () => {
  // Hover handlers for inline style change
  const handleMouseEnter = (e) => {
    e.target.style.color = "#FF5E15";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "white";
  };

  return (
    <div
      className="container-fluid topbar d-none d-xl-block w-100"
      style={{ backgroundColor: "#001248" }}
    >
      <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
        {/* Left side */}
        <div className="col-lg-6 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap align-items-center">
            <a
              href="#"
              style={{ color: "#7D7D7D", textDecoration: "none" }}
              className="me-4 d-flex align-items-center"
            >
              <i
                className="fas fa-map-marker-alt me-2"
                style={{ color: "#ff5e15" }}
              ></i>
              Find A Location
            </a>
            <a
              href="#"
              style={{ color: "#7D7D7D", textDecoration: "none" }}
              className="me-4 d-flex align-items-center"
            >
              <i
                className="fas fa-phone-alt me-2"
                style={{ color: "#ff5e15" }}
              ></i>
              +91-9270350972
            </a>
            <a
              href="#"
              style={{ color: "#7D7D7D", textDecoration: "none" }}
              className="me-0 d-flex align-items-center"
            >
              <i
                className="fas fa-envelope me-2"
                style={{ color: "#ff5e15" }}
              ></i>
              jcmimportexporthub@gmail.com
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="col-lg-6 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a
              href="#"
              style={{ color: "#7D7D7D", textDecoration: "none" }}
              className="me-3 d-flex align-items-center"
            >
              <i
                className="fas fa-clock me-2"
                style={{ color: "#ff5e15" }}
              ></i>
              Mon - Sat 8:00 - 17:30, Sunday - CLOSED
            </a>

            {/* Social Icons with hover */}
            <a
              href="https://www.facebook.com/profile.php?id=61579213025965"
              className="btn btn-square border border-white me-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "transparent",
                width: "30px",
                height: "30px",
                borderRadius: "0",
              }}
            >
              <i
                className="fab fa-facebook-f"
                style={{ color: "white" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></i>
            </a>
            {/* <a
              href="#"
              className="btn btn-square border border-white me-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "transparent",
                width: "30px",
                height: "30px",
                borderRadius: "0",
              }}
            >
              <i
                className="fab fa-twitter"
                style={{ color: "white" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></i>
            </a> */}
            <a
              href="https://www.instagram.com/jcmimportexporthub/"
              className="btn btn-square border border-white me-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "transparent",
                width: "30px",
                height: "30px",
                borderRadius: "0",
              }}
            >
              <i
                className="fab fa-instagram"
                style={{ color: "white" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></i>
            </a>
            {/* <a
              href="#"
              className="btn btn-square border border-white me-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "transparent",
                width: "30px",
                height: "30px",
                borderRadius: "0",
              }}
            >
              <i
                className="fab fa-linkedin-in"
                style={{ color: "white" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
