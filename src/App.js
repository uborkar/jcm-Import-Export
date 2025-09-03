import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Head from "./components/common/Head";
import Spinner from "./components/common/Spinner";
import Topbar from "./components/common/Topbar";
import Header from "./components/common/Header";
import SearchModal from "./components/common/SearchModal";
import Footer from "./components/common/Footer";

// Import pages
import Home from "./components/pages/Home";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ExportServicesPage from "./components/pages/ExportServicesPage";
import ImportServicesPage from "./components/pages/ImportServicesPage";
import ValueAddedServicesPage from "./components/pages/ValueAddedServicesPage";
import BusinessPage from "./components/pages/BusinessPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import BlogPage from "./components/pages/BlogPage";
import TradeTrendsArticle from "./components/pages/TradeTrendsArticle";
import ImportExportTipsArticle from "./components/pages/ImportExportTipsArticle";
import ExportGuidesArticle from "./components/pages/ExportGuidesArticle";
import TeamPage from "./components/pages/TeamPage";
import TestimonialPage from "./components/pages/TestimonialPage";
import FeaturePage from "./components/pages/FeaturePage";
import ContactPage from "./components/pages/ContactPage";
import NotFound from "./components/pages/NotFound";

// Import OurBusiness pages - FIXED IMPORTS
import AgroFood from "./components/pages/OurBusiness/Agrofood";
import Textile from "./components/pages/OurBusiness/Textile";
import Midc from "./components/pages/OurBusiness/Midc";
import Global from "./components/pages/OurBusiness/Global";
import Chemicals from "./components/pages/OurBusiness/Chemical";
import Logistics from "./components/pages/OurBusiness/Logistics";

// Import ONLY essential CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./assets/css/style.css";
import BusinessSection from "./components/sections/BusinessSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Fake preloading delay
    const timer = setTimeout(() => setLoading(false), 1000);

    // ✅ WOW.js animation
    if (window.WOW) {
      new window.WOW().init();
    }

    // ✅ Sticky Navbar
    const handleScroll = () => {
      const navbar = document.querySelector(".sticky-top");
      if (navbar) {
        if (window.scrollY > 200) {
          navbar.classList.add("shadow-sm");
          navbar.style.top = "0px";
        } else {
          navbar.classList.remove("shadow-sm");
          navbar.style.top = "-200px";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // ✅ Counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll("[data-counter]");
      counters.forEach((counter) => {
        let countTo = parseInt(counter.getAttribute("data-counter"), 10);
        let count = 0;
        const increment = Math.ceil(countTo / 200);
        const updateCounter = () => {
          count += increment;
          if (count >= countTo) {
            counter.innerText = countTo;
          } else {
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
          }
        };
        updateCounter();
      });
    };
    animateCounters();

    // ✅ Back-to-top button
    const backToTop = document.querySelector(".back-to-top");
    const toggleBackToTop = () => {
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.style.display = "block";
          backToTop.style.opacity = "1";
          backToTop.style.transition = "opacity 0.5s ease";
        } else {
          backToTop.style.opacity = "0";
          setTimeout(() => (backToTop.style.display = "none"), 500);
        }
      }
    };
    if (backToTop) {
      window.addEventListener("scroll", toggleBackToTop);
      backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // ✅ Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      if (backToTop) {
        window.removeEventListener("scroll", toggleBackToTop);
      }
    };
  }, []);

  if (loading) {
    return <Spinner />; // Show preloader first
  }

  return (
    <Router>
      <div className="App">
        <Head />
        <Topbar />
        <Header />
        <SearchModal />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-business" element={<BusinessPage />} />
          <Route path="/export-services" element={<ExportServicesPage />} />
          <Route path="/import-services" element={<ImportServicesPage />} />
          {/* REMOVED DUPLICATE ROUTE: <Route path="/our-business" element={<OurBusiness />} /> */}
          <Route path="/food-agro" element={<AgroFood />} />
          <Route path="/Textile" element={<Textile />} />
          <Route path="/Midc" element={<Midc />} />
          <Route path="/global-market" element={<Global />} />
          <Route path="/chemical" element={<Chemicals />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route
            path="/value-added-services"
            element={<ValueAddedServicesPage />}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/trade-trends" element={<TradeTrendsArticle />} />
          <Route
            path="/blog/import-export-tips"
            element={<ImportExportTipsArticle />}
          />
          <Route path="/blog/export-guides" element={<ExportGuidesArticle />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;