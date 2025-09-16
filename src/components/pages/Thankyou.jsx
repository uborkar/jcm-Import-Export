import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 text-center">
            <div className="card border-0 shadow-lg rounded-3 overflow-hidden mb-5">
              <div className="card-header py-5" style={{ backgroundColor: "#001659" }}>
                <div className="position-relative d-inline-block">
                  <i className="fas fa-check-circle display-1 text-white"></i>
                  <div className="position-absolute top-0 start-100 translate-middle p-2 bg-white border rounded-circle">
                    <i className="fas fa-smile text-warning fa-lg"></i>
                  </div>
                </div>
              </div>
              <div className="card-body p-5">
                <h2 className="fw-bold mb-3" style={{ color: "#001659" }}>
                  Thank You For Your Message!
                </h2>
                <p className="lead text-muted mb-4">
                  We've received your inquiry and our team will get back to you within 24 hours. 
                  Your business is important to us at JCM Import Export Hub.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
                  <Link 
                    to="/" 
                    className="btn py-3 px-5 fw-bold text-uppercase position-relative overflow-hidden"
                    style={{ 
                      backgroundColor: "#001659", 
                      color: "white",
                      borderRadius: "0",
                      border: "none",
                      transition: "all 0.3s ease",
                      zIndex: 1
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#FF5E15";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#001659";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="fas fa-home me-2"></i>Back to Home
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn py-3 px-5 fw-bold text-uppercase position-relative overflow-hidden"
                    style={{ 
                      backgroundColor: "transparent", 
                      color: "#001659",
                      borderRadius: "0",
                      border: "2px solid #001659",
                      transition: "all 0.3s ease",
                      zIndex: 1
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#001659";
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#001659";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="fas fa-envelope me-2"></i>Send Another Message
                  </Link>
                </div>
                <div className="alert alert-info mt-4 border-0 rounded-0" style={{ backgroundColor: "#e8f4ff" }}>
                  <i className="fas fa-info-circle me-2 text-primary"></i>
                  <strong>What to expect:</strong> We'll contact you shortly to discuss your requirements in detail.
                </div>
              </div>
              <div className="card-footer py-4 bg-light">
                <div className="row align-items-center">
                  <div className="col-md-6 text-md-start mb-3 mb-md-0">
                    <p className="text-muted mb-0 small">
                      <i className="fas fa-clock me-1 text-primary"></i>
                      We typically respond within 1 business day
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="d-flex justify-content-md-end justify-content-center gap-3">
                      <a href="tel:+919370936583" className="text-decoration-none text-muted small">
                        <i className="fas fa-phone me-1 text-success"></i>+91-9370936583
                      </a>
                      <a href="mailto:jcmimportexporthub@gmail.com" className="text-decoration-none text-muted small">
                        <i className="fas fa-envelope me-1 text-primary"></i>Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-5">
              <h5 className="text-uppercase fw-bold mb-4" style={{ color: "#FF5E15", letterSpacing: "1px" }}>What Happens Next?</h5>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="bg-white p-4 rounded shadow-sm h-100 text-center border-top" style={{ borderTop: "4px solid #001659" }}>
                    <div className="mb-3">
                      <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px" }}>
                        <i className="fas fa-phone fa-2x text-white"></i>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-2">Initial Contact</h6>
                    <p className="small text-muted mb-0">Our representative will reach out to discuss your specific requirements and understand your business needs.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white p-4 rounded shadow-sm h-100 text-center border-top" style={{ borderTop: "4px solid #FF5E15" }}>
                    <div className="mb-3">
                      <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px" }}>
                        <i className="fas fa-clipboard-list fa-2x text-white"></i>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-2">Custom Solution</h6>
                    <p className="small text-muted mb-0">We'll prepare a tailored proposal addressing your specific import/export needs with competitive pricing.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white p-4 rounded shadow-sm h-100 text-center border-top" style={{ borderTop: "4px solid #28a745" }}>
                    <div className="mb-3">
                      <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px" }}>
                        <i className="fas fa-handshake fa-2x text-white"></i>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-2">Partnership</h6>
                    <p className="small text-muted mb-0">We'll work together to ensure seamless global trade operations and build a long-term business relationship.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-start" style={{ borderLeft: "4px solid #FF5E15" }}>
              <h6 className="fw-bold mb-3" style={{ color: "#001659" }}>
                <i className="fas fa-question-circle me-2 text-warning"></i>
                Have Immediate Questions?
              </h6>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <p className="mb-0 small">Call us directly</p>
                      <a href="tel:+919370936583" className="text-decoration-none fw-bold text-dark">+91-9370936583</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="mb-0 small">Email us at</p>
                      <a href="mailto:jcmimportexporthub@gmail.com" className="text-decoration-none fw-bold text-dark">jcmimportexporthub@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;