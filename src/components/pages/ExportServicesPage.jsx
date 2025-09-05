import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../assets/img/daal.jpg';

const ExportServicesPage = () => {
  const exportServices = [
    {
      title: "Agro & Food Products",
      description: "Spices, grains, pulses, sugar, tea, coffee, fresh fruits, and vegetables.",
      icon: "fas fa-leaf"
    },
    {
      title: "Textiles & Garments",
      description: "Cotton fabrics, ready-made apparel, and home furnishings.",
      icon: "fas fa-tshirt"
    },
    {
      title: "Industrial Goods",
      description: "Engineering products, auto parts, and industrial machinery.",
      icon: "fas fa-cogs"
    },
    {
      title: "Global Market Entry Support",
      description: "Helping businesses expand into international markets.",
      icon: "fas fa-globe-americas"
    },
    {
      title: "Export Documentation & Licensing",
      description: "Complete paperwork and certification handling for smooth transactions.",
      icon: "fas fa-file-contract"
    },
    {
      title: "Trade Promotion & Marketing",
      description: "Connecting exporters with potential overseas buyers.",
      icon: "fas fa-chart-line"
    },
    {
      title: "Efficient Shipping Solutions",
      description: "End-to-end export logistics from origin to destination.",
      icon: "fas fa-shipping-fast"
    }
  ];

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4">Export Services</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
            <li className="breadcrumb-item active text-secondary">Export Services</li>
          </ol>    
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 pt-5">
              <img src={service1} className="img-fluid rounded" alt="Export Services" />
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 mb-4" style={{color: "#001659"}}>Comprehensive Export Solutions</h2>
              <p className="mb-4">Our export services are designed to help businesses of all sizes navigate the complexities of international trade. We provide end-to-end solutions that ensure your products reach global markets efficiently and profitably.</p>
              
              <div className="row g-4 mt-4">
                {exportServices.map((service, index) => (
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

export default ExportServicesPage;