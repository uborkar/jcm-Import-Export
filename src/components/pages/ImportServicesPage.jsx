import React from 'react';
import { Link } from 'react-router-dom';
import service2 from '../../assets/img/chem-pro.jpg';

const ImportServicesPage = () => {
  const importServices = [
    {
      title: "Specialty Foods & Ingredients",
      description: "Premium chocolates, exotic fruits, dairy products, and beverages.",
      icon: "fas fa-utensils"
    },
    {
      title: "Machinery & Equipment",
      description: "Industrial machinery, packaging equipment, and tools.",
      icon: "fas fa-tools"
    },
    {
      title: "Consumer Goods",
      description: "Electronics, appliances, and lifestyle products.",
      icon: "fas fa-laptop"
    },
    {
      title: "Chemicals & Raw Materials",
      description: "For manufacturing, pharmaceuticals, and agriculture.",
      icon: "fas fa-flask"
    }
  ];

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4">Import Services</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
            <li className="breadcrumb-item active text-secondary">Import Services</li>
          </ol>    
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <img src={service2} className="img-fluid rounded" alt="Import Services" />
            </div>
            <div className="col-lg-7">
              <h2 className="display-5 mb-4" style={{color: "#001659"}}>Streamlined Import Solutions</h2>
              <p className="mb-4">Our import services ensure smooth and efficient procurement of goods from international markets. We handle all aspects of the import process, from sourcing to delivery, ensuring compliance and timely execution.</p>
              
              <div className="row g-4 mt-4">
                {importServices.map((service, index) => (
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

export default ImportServicesPage;