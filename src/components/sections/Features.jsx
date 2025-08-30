import React from 'react';

const Features = () => {
  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto  wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <p
            className="text-uppercase fs-5 mb-0"
            style={{ color: "#FF5E15" }}
          >
            WHY US
          </p>
          <h2
            className="display-4 text-capitalize mb-3"
            style={{ color: "#001659" }}
          >
            Why Choose JCM Import Export Hub
          </h2>
        </div>

        <div className="row g-4">
          {/* Global Trade Network */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="feature-item text-center border p-5">
              <div
                className="feature-img d-inline-flex p-4"
                style={{ backgroundColor: "#FF5E15" }}
              >
                <i className="fas fa-globe fa-5x" style={{ color: "#001659" }}></i>
              </div>
              <a
                href="#"
                className="h4 d-block my-4"
                style={{ color: "#001659", textDecoration: "none" }}
              >
                Global Trade Network
              </a>
              <p className="mb-0">
                Connecting businesses worldwide through seamless import and export
                operations and transparent cross-border trade.
              </p>
            </div>
          </div>

          {/* Reliable Logistics */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className="feature-item text-center border p-5">
              <div
                className="feature-img d-inline-flex p-4"
                style={{ backgroundColor: "#FF5E15" }}
              >
                <i className="fas fa-shipping-fast fa-5x" style={{ color: "#001659" }}></i>
              </div>
              <a
                href="#"
                className="h4 d-block my-4"
                style={{ color: "#001659", textDecoration: "none" }}
              >
                Reliable Logistics
              </a>
              <p className="mb-0">
                From shipping to customs, we manage end-to-end logistics with
                efficiency, delivering your products safely and on time.
              </p>
            </div>
          </div>

          {/* Trusted Partnerships */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className="feature-item text-center border p-5">
              <div
                className="feature-img d-inline-flex p-4"
                style={{ backgroundColor: "#FF5E15" }}
              >
                <i className="fas fa-handshake fa-5x" style={{ color: "#001659" }}></i>
              </div>
              <a
                href="#"
                className="h4 d-block my-4"
                style={{ color: "#001659", textDecoration: "none" }}
              >
                Trusted Partnerships
              </a>
              <p className="mb-0">
                We build long-term global partnerships with integrity and
                innovation, driving mutual success in international trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
