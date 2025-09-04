import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/founder.jpg';
import img2 from '../../assets/img/chairman.jpg';
import img3 from '../../assets/img/MD.jpg';
import img4 from '../../assets/img/MD.jpg';
import leadershipBanner from '../../assets/img/leadership-banner.jpg';


const Leadership = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const leaderDetails = {
    leader1: {
      name: "Raj Singh Rajput",
      title: "Founder and Chairman",
      fullDescription: "Raj Singh Rajput is the founder and currently the chairman of JCM Import Export. With over 35 years of uncompromised experience in international trade, procurement, manufacturing marketing strategies, banking, and finance, he has built the company from the ground up. His visionary leadership and deep industry knowledge have been instrumental in establishing JCM as a trusted name in global trade. Under his guidance, the company has expanded its operations across multiple continents and diversified into various sectors including agro-products, textiles, industrial goods, and logistics."
    },
    leader2: {
      name: "Sameer",
      title: "Chairman",
      fullDescription: "Sameer is the chairman of JCM Import Export. A veteran of the international trade industry with over 25 years of experience, he has played an important role in driving world-class technology in trading operations and expanding our global reach. His expertise in market analysis and strategic planning has enabled the company to enter new markets and establish strong partnerships worldwide. Sameer is particularly focused on sustainable business practices and ethical trading principles that form the core of our company values."
    },
    leader3: {
      name: "Karan",
      title: "Executive Director",
      fullDescription: "Karan is an executive director at JCM Import Export. He drives strategic marketing for the company, ensuring competitive pricing and consistent growth across all product categories and international markets. With his background in international business and digital marketing, Karan has revolutionized our customer engagement strategies and implemented data-driven approaches to market expansion. His innovative thinking has been crucial in adapting to the rapidly changing global trade landscape and leveraging digital platforms for business growth."
    },
    leader4: {
      name: "Yash",
      title: "Managing Director",
      fullDescription: "Yash is the managing director at JCM Import Export. He works closely with the operations team and has helped transform product strategies and customer-facing initiatives to enhance our global market presence. With his exceptional operational expertise and customer-centric approach, Yash has streamlined our supply chain processes, improved efficiency, and strengthened relationships with both suppliers and clients. His leadership in implementing quality control measures has significantly elevated our service standards across all business verticals."
    }
  };

  const openModal = (leader) => {
    setShowModal(leader);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div id="main-content">
      <article id="post-7550" className="post-7550 page type-page status-publish hentry">
        <div className="entry-content">
          <div className="et-l et-l--post">
            <div className="et_builder_inner_content et_pb_gutters3">
              
              {/* Banner Section */}
              <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="inner-left">
                        <h1 className="display-4 fw-bold mb-4" style={{ color: "#001659" }}>Leadership</h1>
                        <p className="lead mb-4">
                          As the fate of a ship depends on the decision of the Captain, so does the fortune and growth of a business depend on the decisions taken by the team that heads the Management. Leaders in the top rungs of the company are responsible for taking decisions that will work in favor for the company driving it to success.
                        </p>
                      </div>
                      <Link 
                        to="/legacy" 
                        className="btn py-3 px-5 mt-3" 
                        style={{ 
                          backgroundColor: hoveredBtn === "legacy" ? "#FF5E15" : "#001659", 
                          color: "white",
                          borderRadius: "0",
                          border: "none",
                          textDecoration: "none",
                          display: "inline-block"
                        }}
                        onMouseEnter={() => setHoveredBtn("legacy")}
                        onMouseLeave={() => setHoveredBtn(null)}
                      >
                        Explore our Legacy
                      </Link>
                    </div>
                    <div className="col-lg-5">
                      <img 
                        src={leadershipBanner} 
                        alt="Leadership Banner" 
                        className="img-fluid"
                        style={{ maxHeight: "500px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Team Section */}
              <div id="Leadershipbx" className="container-fluid py-5">
                <div className="container">
                  <div className="row g-5">
                    
                    {/* Leader 1 */}
                    <div className="col-md-6 col-lg-4">
                      <div className="team-member-card text-center">
                        <div className="team-member-image mb-4">
                          <img 
                            src={img1} 
                            alt="Raj Singh Rajput" 
                            className="img-fluid rounded"
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description">
                          <h4 className="fw-bold mb-2" style={{ color: "#001659" }}>Raj Singh Rajput</h4>
                          <p className="text-uppercase mb-3" style={{ color: "#FF5E15" }}>Founder and Chairman</p>
                          <div className="mb-4">
                            <p>Raj Singh Rajput is the founder and currently the chairman of JCM Import Export. With over 35 years of uncompromised experience in international trade, procurement, manufacturing marketing strategies, banking, finance...</p>
                          </div>
                          <button
                            className="btn py-2 px-4" 
                            style={{ 
                              backgroundColor: hoveredBtn === "btn1" ? "#FF5E15" : "#001659", 
                              color: "white",
                              borderRadius: "0",
                              border: "none"
                            }}
                            onMouseEnter={() => setHoveredBtn("btn1")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal('leader1')}
                          >
                            Read More...
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Leader 2 */}
                    <div className="col-md-6 col-lg-4">
                      <div className="team-member-card text-center">
                        <div className="team-member-image mb-4">
                          <img 
                            src={img2} 
                            alt="Sameer" 
                            className="img-fluid rounded"
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description">
                          <h4 className="fw-bold mb-2" style={{ color: "#001659" }}>Sameer</h4>
                          <p className="text-uppercase mb-3" style={{ color: "#FF5E15" }}>Chairman</p>
                          <div className="mb-4">
                            <p>Sameer is the chairman of JCM Import Export. A veteran of the international trade industry, he has played an important role in driving world-class technology in trading operations and expanding our global reach...</p>
                          </div>
                          <button
                            className="btn py-2 px-4" 
                            style={{ 
                              backgroundColor: hoveredBtn === "btn2" ? "#FF5E15" : "#001659", 
                              color: "white",
                              borderRadius: "0",
                              border: "none"
                            }}
                            onMouseEnter={() => setHoveredBtn("btn2")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal('leader2')}
                          >
                            Read More...
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Leader 3 */}
                    <div className="col-md-6 col-lg-4">
                      <div className="team-member-card text-center">
                        <div className="team-member-image mb-4">
                          <img 
                            src={img3} 
                            alt="Karan" 
                            className="img-fluid rounded"
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description">
                          <h4 className="fw-bold mb-2" style={{ color: "#001659" }}>Karan</h4>
                          <p className="text-uppercase mb-3" style={{ color: "#FF5E15" }}>Executive Director</p>
                          <div className="mb-4">
                            <p>Karan is an executive director at JCM Import Export. He drives strategic marketing for the company, ensuring competitive pricing and consistent growth across all product categories and international markets...</p>
                          </div>
                          <button
                            className="btn py-2 px-4" 
                            style={{ 
                              backgroundColor: hoveredBtn === "btn3" ? "#FF5E15" : "#001659", 
                              color: "white",
                              borderRadius: "0",
                              border: "none"
                            }}
                            onMouseEnter={() => setHoveredBtn("btn3")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal('leader3')}
                          >
                            Read More...
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Leader 4 */}
                    <div className="col-md-6 col-lg-4">
                      <div className="team-member-card text-center">
                        <div className="team-member-image mb-4">
                          <img 
                            src={img4} 
                            alt="Yash" 
                            className="img-fluid rounded"
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description">
                          <h4 className="fw-bold mb-2" style={{ color: "#001659" }}>Yash</h4>
                          <p className="text-uppercase mb-3" style={{ color: "#FF5E15" }}>Managing Director</p>
                          <div className="mb-4">
                            <p>Yash is the managing director at JCM Import Export. He works closely with the operations team and has helped transform product strategies and customer-facing initiatives to enhance our global market presence...</p>
                          </div>
                          <button
                            className="btn py-2 px-4" 
                            style={{ 
                              backgroundColor: hoveredBtn === "btn4" ? "#FF5E15" : "#001659", 
                              color: "white",
                              borderRadius: "0",
                              border: "none"
                            }}
                            onMouseEnter={() => setHoveredBtn("btn4")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal('leader4')}
                          >
                            Read More...
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>

      {/* Modal for Leader Details */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: "#001659", color: "white" }}>
                <h5 className="modal-title">{leaderDetails[showModal].name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  style={{ filter: "invert(1)" }}
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <h6 style={{ color: "#FF5E15" }}>{leaderDetails[showModal].title}</h6>
                <p>{leaderDetails[showModal].fullDescription}</p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn" 
                  style={{ backgroundColor: "#001659", color: "white", borderRadius: "0" }}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leadership;