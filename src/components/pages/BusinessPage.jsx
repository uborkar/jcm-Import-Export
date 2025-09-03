import React from 'react';
import { Link } from 'react-router-dom';
import BusinessSection from '../sections/BusinessSection';

const BusinessPage = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Business</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active text-secondary">Our Business</li>
          </ol>    
        </div>
      </div>
      <BusinessSection />
    </>
  );
};

export default BusinessPage;