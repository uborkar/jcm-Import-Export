import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import jcmlogo from "../../assets/img/logo-jcm.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <div className="container-fluid sticky-top px-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3 px-4">
          <Link to="/" className="navbar-brand p-0">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={jcmlogo}
                alt="JCM Logo"
                style={{
                  height: "65px",
                  width: "100px",
                  objectFit: "contain",
                  marginRight: "10px",
                }}
              />
              <h1 className="display-6 m-0" style={{ color: "#FF5E15" }}>
                JCM
              </h1>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="fa fa-bars"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto pt-2 pt-lg-0">
              <Link to="/" className={`nav-item nav-link ${isActive("/")}`}>
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${isActive("/about")}`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`nav-item nav-link ${isActive("/services")}`}
              >
                Services
              </Link>
              {/* <Link
                to="/projects"
                className={`nav-item nav-link ${isActive("/projects")}`}
              >
                Projects
              </Link> */}
              {/* <div className="nav-item dropdown">
                <Link
                  to="#"
                  className={`nav-link dropdown-toggle text-dark ${
                    isActive("/feature") ||
                    isActive("/blog") ||
                    isActive("/team") ||
                    isActive("/testimonial") ||
                    isActive("/404")
                      ? "active"
                      : ""
                  }`}
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu m-lg-0">
                  <Link to="/feature" className="dropdown-item">
                    Our Features
                  </Link>
                  <Link to="/blog" className="dropdown-item">
                    Our Blog
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/404" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div> */}
              <Link
                to="/contact"
                className={`nav-item nav-link ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </div>
            <div className="d-flex align-items-center flex-nowrap pt-3 pt-lg-0 ms-lg-2">
              <button
                className="btn btn-primary py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                style={{ 
                  backgroundColor: "#001659", 
                  borderRadius: "0",
                  border: "none"
                }}
              >
                <i className="fas fa-search"></i>
              </button>
              <Link
                to="/contact"
                className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0"
                style={{ 
                  backgroundColor: "#FF5E15", 
                  borderRadius: "0",
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;