import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/img/blog1.jpg';
import blog2 from '../../assets/img/blog2.png';
import blog3 from '../../assets/img/globe.jpg';


const ExportGuidesArticle = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Country Export Guides</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
            <li className="breadcrumb-item active text-secondary">Export Guides</li>
          </ol>    
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="blog-detail">
                <img src={blog3} className="img-fluid w-100 rounded mb-4" alt="Country Export Guides" />
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">
                    <i className="fa fa-calendar-check me-1" style={{ color: '#FF5E15' }}></i> 30 April 2025
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-user me-1" style={{ color: '#FF5E15' }}></i> Admin
                  </p>
                </div>
                
                <h2 className="mb-4" style={{ color: '#001659' }}>Country-specific export guides for global trade</h2>
                
                <p className="mb-4">Expanding to new international markets requires understanding each country's unique regulations, cultural nuances, and business practices. Our comprehensive guides help you navigate these complexities.</p>
                
                <h4 className="mb-3" style={{ color: '#001659' }}>European Union Markets</h4>
                <p className="mb-4">The EU has specific product standards, labeling requirements, and certification processes. Understanding CE marking and REACH regulations is essential for success in these markets.</p>
                
                <h4 className="mb-3" style={{ color: '#001659' }}>North American Trade</h4>
                <p className="mb-4">The USMCA (formerly NAFTA) governs trade between the US, Canada, and Mexico. Each country has distinct customs procedures and product safety standards that exporters must follow.</p>
                
                <h4 className="mb-3" style={{ color: '#001659' }}>Asia-Pacific Opportunities</h4>
                <p className="mb-5">Emerging markets in Southeast Asia offer significant growth potential but require careful attention to import regulations, cultural business practices, and distribution networks.</p>
                
                <div className="share-article border-top pt-4">
                  <h5 className="mb-3" style={{ color: '#001659' }}>Share this article</h5>
                  <div className="d-flex">
                    <a href="#" className="btn btn-sm me-2" style={{ backgroundColor: '#3b5998', color: 'white' }}>
                      <i className="fab fa-facebook-f me-1"></i> Facebook
                    </a>
                    <a href="#" className="btn btn-sm me-2" style={{ backgroundColor: '#1da1f2', color: 'white' }}>
                      <i className="fab fa-twitter me-1"></i> Twitter
                    </a>
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: '#0077b5', color: 'white' }}>
                      <i className="fab fa-linkedin-in me-1"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
             <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="sidebar">
                        <div className="sidebar-widget mb-5">
                          <h4 className="mb-4" style={{ color: '#001659' }}>Recent Posts</h4>
                          <div className="d-flex mb-3">
                            <img src={blog1} className="img-fluid rounded" style={{width: '80px', height: '60px', objectFit: 'cover'}} alt="Post" />
                            <div className="ms-3">
                              <Link to="/blog/trade-trends" className="h6" style={{ color: '#001659', textDecoration: 'none' }}>
                                Global Trade Trends
                              </Link>
                              <div className="text-muted small">
                                <i className="fa fa-calendar me-1"></i> 26 Apr 2025
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mb-3">
                            <img src={blog2} className="img-fluid rounded" style={{width: '80px', height: '60px', objectFit: 'cover'}} alt="Post" />
                            <div className="ms-3">
                              <Link to="/blog/import-export-tips" className="h6" style={{ color: '#001659', textDecoration: 'none' }}>
                                Import/Export Tips
                              </Link>
                              <div className="text-muted small">
                                <i className="fa fa-calendar me-1"></i> 28 Apr 2025
                              </div>
                            </div>
                          </div>
                          <div className="d-flex">
                            <img src={blog3} className="img-fluid rounded" style={{width: '80px', height: '60px', objectFit: 'cover'}} alt="Post" />
                            <div className="ms-3">
                              <Link to="/blog/export-guides" className="h6" style={{ color: '#001659', textDecoration: 'none' }}>
                                Country Export Guides
                              </Link>
                              <div className="text-muted small">
                                <i className="fa fa-calendar me-1"></i> 30 Apr 2025
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="sidebar-widget">
                          <h4 className="mb-4" style={{ color: '#001659' }}>Categories</h4>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              <Link to="#" style={{ color: '#001659', textDecoration: 'none' }}>Market Trends</Link>
                              <span className="badge bg-primary rounded-pill">5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              <Link to="#" style={{ color: '#001659', textDecoration: 'none' }}>Import Guidelines</Link>
                              <span className="badge bg-primary rounded-pill">8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              <Link to="#" style={{ color: '#001659', textDecoration: 'none' }}>Export Regulations</Link>
                              <span className="badge bg-primary rounded-pill">3</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              <Link to="#" style={{ color: '#001659', textDecoration: 'none' }}>Country Guides</Link>
                              <span className="badge bg-primary rounded-pill">7</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExportGuidesArticle;