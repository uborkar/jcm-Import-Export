import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
   const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <div className="container-fluid sticky-top px-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3 px-4">
          <Link to="/" className="navbar-brand p-0">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <img
                src={jcmlogo}
                alt="JCM Logo"
                style={{
                  height: "65px",
                  width: "100px",
                  objectFit: "contain",
                  marginRight: "10px",
                }}
              /> */}
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

             <div className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle text-dark ${
                  isActive("/our-business") ||
                  isActive("/food-agro") ||
                  isActive("/Textile") ||
                  isActive("/Midc") ||
                  isActive("/global-market") ||
                  isActive("/chemical")  ||
                  isActive("/logistics")
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth > 992) {
                    navigate("/our-business");
                  }
                }}
                data-bs-toggle="dropdown"
              >
                Our Business
              </a>
              <div className="dropdown-menu m-lg-0">
                <Link to="/food-agro" className="dropdown-item">
                  Agro & Food Products
                </Link>
                <Link to="/Textile" className="dropdown-item">
                  Textile & Garments
                </Link>
                <Link to="/Midc" className="dropdown-item">
                  Industrial Goods
                </Link>
                <Link to="/global-market" className="dropdown-item">
                  Global Market Entry Support
                </Link>
                <Link to="/chemical" className="dropdown-item">
                  Chemicals & Raw Materials
                </Link>
                 <Link to="/logistics" className="dropdown-item">
                  Logistics
                </Link>
              </div>
            </div>
              <Link
                to="/projects"
                className={`nav-item nav-link ${isActive("/projects")}`}
              >
                Leadership
              </Link>
              <Link
                to="/contact"
                className={`nav-item nav-link ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </div>
            <div className="d-flex align-items-center flex-nowrap pt-3 pt-lg-0 ms-lg-2">
              {/* <button
                className="btn btn-primary py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                style={{
                  backgroundColor: "#001659",
                  borderRadius: "0",
                  border: "none",
                }}
              >
                <i className="fas fa-search"></i>
              </button> */}
              <Link
                to="/contact"
                className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0"
                style={{
                  backgroundColor: "#FF5E15",
                  borderRadius: "0",
                  color: "white",
                  textDecoration: "none",
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
