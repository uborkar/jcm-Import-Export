import React from 'react';
import { Link } from 'react-router-dom';
import service3 from '../../assets/img/other_re.jpg';

const ValueAddedServicesPage = () => {
  const valueAddedServices = [
    {
      title: "Logistics Solutions",
      description: "Land transportation with reliable partners for efficient delivery.",
      icon: "fas fa-truck"
    },
    {
      title: "Product Sourcing & Quality Inspection",
      description: "Quality check, product testing, and reliable sourcing.",
      icon: "fas fa-search"
    },
    {
      title: "Private Labeling & Packaging",
      description: "Custom branding and packaging solutions.",
      icon: "fas fa-tag"
    },
    {
      title: "Market Research & Trade Consulting",
      description: "Comprehensive research and expert consulting services.",
      icon: "fas fa-chart-bar"
    }
  ];

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4">Value Added Services</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
            <li className="breadcrumb-item active text-secondary">Value Added Services</li>
          </ol>    
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <img src={service3} className="img-fluid rounded" alt="Value Added Services" />
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 mb-4" style={{color: "#001659"}}>Enhanced Trade Solutions</h2>
              <p className="mb-4">Our value-added services go beyond basic import/export to provide comprehensive solutions that enhance your trade operations, reduce costs, and maximize your business potential in global markets.</p>
              
              <div className="row g-4 mt-4">
                {valueAddedServices.map((service, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 me-3" style={{width: "60px", height: "60px", backgroundColor: "#FF5E15", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <i className={`${service.icon} fa-2x`} style={{color: "white"}}></i>
                      </div>
                      <div className="flex-grow-1">
                        <h5 style={{color: "#001659"}}>{service.title}</h5>
                        <p className="mb-0 text-muted">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueAddedServicesPage;