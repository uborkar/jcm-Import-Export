import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchModal from "./SearchModal"; // Make sure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save search history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleSearch = (searchTerm) => {
    // Add to search history if not already present
    if (!searchHistory.includes(searchTerm)) {
      const newHistory = [searchTerm, ...searchHistory].slice(0, 5); // Keep only 5 most recent
      setSearchHistory(newHistory);
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <>
      <div className="container-fluid sticky-top px-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3 px-4">
          <Link to="/" className="navbar-brand p-0">
            <div style={{ display: "flex", alignItems: "center" }}>
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
                    isActive("/chemical") ||
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
              {/*In your Header component, replace the Leadership link with: */} 
              {/* <Link
                to="/gallery"
                className={`nav-item nav-link ${isActive("/gallery")}`}
              >
                Gallery
              </Link> */}
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
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <i className="fas fa-search"></i>
              </button>
              <Link
                to="/contact"
                className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0"
                style={{
                  backgroundColor: "#FF5E15",
                  borderRadius: "5px",
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

      <SearchModal
        onSearch={handleSearch}
        searchHistory={searchHistory}
        onClearHistory={clearSearchHistory}
      />
    </>
  );
};

export default Header;
