import React from 'react';
import { Link } from 'react-router-dom';

// Features section component
const Features = () => {
  const features = [
    {
      id: 1,
      icon: "fa fa-cog",
      title: "Advanced Technology",
      description: "Our cutting-edge technology ensures optimal performance and reliability for all your needs."
    },
    {
      id: 2,
      icon: "fa fa-users",
      title: "User-Friendly",
      description: "Designed with the user in mind, our features are intuitive and easy to navigate."
    },
    {
      id: 3,
      icon: "fa fa-shield",
      title: "Secure & Safe",
      description: "Security is our top priority with enterprise-grade protection for your data."
    },
    {
      id: 4,
      icon: "fa fa-rocket",
      title: "Fast Performance",
      description: "Experience lightning-fast performance with our optimized systems and infrastructure."
    },
    {
      id: 5,
      icon: "fa fa-mobile",
      title: "Mobile Responsive",
      description: "Our features work seamlessly across all devices and screen sizes."
    },
    {
      id: 6,
      icon: "fa fa-support",
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you."
    }
  ];

  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "700px"}}>
          <h1 className="display-4 mb-4">Amazing Features</h1>
          <p className="mb-0">Discover the powerful features that make our product stand out from the competition.</p>
        </div>
        <div className="row g-4">
          {features.map(feature => (
            <div key={feature.id} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`0.${feature.id + 1}s`}>
              <div className="feature-item rounded">
                <div className="feature-icon mb-4">
                  <i className={`${feature.icon} fa-3x text-primary`}></i>
                </div>
                <h4 className="mb-3">{feature.title}</h4>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Features page component
const FeaturesPage = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Features</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            {/* <li className="breadcrumb-item"><Link to="#">Pages</Link></li> */}
            <li className="breadcrumb-item active text-secondary">Features</li>
          </ol>    
        </div>
      </div>
      <Features />
    </>
  );
};

export default FeaturesPage;