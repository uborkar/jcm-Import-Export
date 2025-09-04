import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Legacy.css';

// Import available images
import jcmLegacyLogo from '../../assets/img/jcm-legacy.jpg';
import inheritValues from '../../assets/img/founder.jpg';
import thePassion from '../../assets/img/agro-veg.jpg';
import readyOpportunities from '../../assets/img/project-3.jpg';
import uniqueStyle from '../../assets/img/founder.jpg';
import failureSuccess from '../../assets/img/leadership-banner.jpg';
import doitLearn from '../../assets/img/food-agro.jpg';

const Legacy = () => {
  const [activeTab, setActiveTab] = useState('origin');
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for sharing your story with JCM Import Export!');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  // Bootstrap Icons for timeline items
  const timelineIcons = {
    origin: [
      'bi-people-fill', // INHERITANCE OF VALUES
      'bi-heart-fill',  // THE PASSION
      'bi-lightning-fill', // READY BEFORE OPPORTUNITIES
      'bi-star-fill',   // A UNIQUE STYLE
      'bi-exclamation-triangle-fill', // FAILURE IS IMPORTANT FOR SUCCESS
      'bi-book-fill',   // DO IT TO LEARN IT!
      'bi-shield-fill'  // BELIEFS FROM THE HEART
    ],
    evolution: [
      'bi-building',    // FOUNDATION YEARS
      'bi-basket-fill', // EXPANSION INTO TEXTILES
      'bi-grid-3x3',    // DIVERSIFYING INDUSTRIES
      'bi-globe',       // GLOBAL REACH
      'bi-cpu-fill',    // TECHNOLOGY & INNOVATION
      'bi-tree-fill'    // SUSTAINABILITY & FUTURE
    ],
    future: [
      'bi-code-slash',  // DIGITAL TRANSFORMATION
      'bi-geo-fill',    // EXPANSION INTO NEW MARKETS
      'bi-lightbulb-fill', // INNOVATION IN PRODUCTS
      'bi-recycle',     // SUSTAINABILITY GOALS
      'bi-mortarboard-fill', // SKILL DEVELOPMENT & EMPLOYMENT
      'bi-award-fill'   // LEGACY FOR FUTURE GENERATIONS
    ]
  };

  // Timeline data for Origin Story
  const originTimeline = [
    {
      title: "INHERITANCE OF VALUES",
      image: inheritValues,
      icon: timelineIcons.origin[0],
      content: "Born on June 12, 1945, in a small town of Gujarat, Rajmalji Mehta was the eldest son of Devichandji Mehta, who managed a modest cotton trading shop. From an early age, Rajmalji inherited the values of honesty, discipline, and dedication that became the foundation of his entrepreneurial journey."
    },
    {
      title: "THE PASSION",
      image: thePassion,
      icon: timelineIcons.origin[1],
      content: "Rajmalji's early exposure to his father's cotton shop inspired him to explore bigger opportunities. With an eagerness to learn and a hunger to grow, he developed a strong interest in the trading of food grains, textiles, and agro products. His curiosity soon expanded towards global trade and the possibilities of import-export."
    },
    {
      title: "READY BEFORE OPPORTUNITIES",
      image: readyOpportunities,
      icon: timelineIcons.origin[2],
      content: "Hard work and courage led him to Mumbai, India's business hub, where he discovered opportunities in the textile and garments sector. Rajmalji often traveled across states, meeting suppliers and manufacturers, while also exploring global markets. His readiness to adapt and his determination helped him seize opportunities in chemicals and electronic appliances."
    },
    {
      title: "A UNIQUE STYLE",
      image: uniqueStyle,
      icon: timelineIcons.origin[3],
      content: "Believing that business is not only about transactions but also about impressions, Rajmalji always emphasized professionalism. Whether it was arriving for international meetings in a crisp suit, or showcasing Indian fabrics with pride, his style and confidence made JCM stand out in the crowd of global traders."
    },
    {
      title: "FAILURE IS IMPORTANT FOR SUCCESS",
      image: failureSuccess,
      icon: timelineIcons.origin[4],
      content: "Initial attempts to expand into chemicals and electronic appliances brought hurdles, but Rajmalji believed failures were stepping stones. Each challenge taught him lessons in international logistics, supplier management, and quality assurance. His resilience laid the foundation for JCM's strong presence in multiple industries."
    },
    {
      title: "DO IT TO LEARN IT!",
      image: doitLearn,
      icon: timelineIcons.origin[5],
      content: "Rajmalji was known for his hands-on approach. Instead of relying only on advisors, he personally visited factories, ports, and markets. From overseeing textile shipments to inspecting electronic consignments, he believed that true learning comes only from active involvement."
    },
    {
      title: "BELIEFS FROM THE HEART",
      icon: timelineIcons.origin[6],
      content: "A firm believer in ethical business practices, Rajmalji Mehta integrated values of trust and integrity into every aspect of JCM's operations. He emphasized that success should benefit not just the company but also employees, partners, and the community, creating a legacy of responsible business leadership."
    }
  ];

  // Timeline data for Evolution
  const evolutionTimeline = [
    {
      title: "FOUNDATION YEARS",
      icon: timelineIcons.evolution[0],
      content: "JCM Import Export began its journey in the late 1970s with small-scale trading of food grains and agro products. What started as a local operation soon became a strong network of suppliers and buyers across India, establishing the company's reputation for reliability and quality."
    },
    {
      title: "EXPANSION INTO TEXTILES",
      icon: timelineIcons.evolution[1],
      content: "In the mid-1980s, JCM expanded into the textile and garment sector. With a focus on quality fabrics and reliable delivery, the company built partnerships with mills and exporters, becoming a trusted name in the textile trade both domestically and internationally."
    },
    {
      title: "DIVERSIFYING INDUSTRIES",
      icon: timelineIcons.evolution[2],
      content: "The 1990s marked a new era of diversification. JCM stepped into chemicals and electronic appliances, aligning with the growing demand in both domestic and international markets. This bold step strengthened the company's multi-industry presence and expanded its global footprint."
    },
    {
      title: "GLOBAL REACH",
      icon: timelineIcons.evolution[3],
      content: "By the early 2000s, JCM expanded beyond Indian borders. With exports to the Middle East, Europe, and Southeast Asia, the company positioned itself as a global player in food, textiles, and electronics, establishing long-term partnerships across continents."
    },
    {
      title: "TECHNOLOGY & INNOVATION",
      icon: timelineIcons.evolution[4],
      content: "In the 2010s, JCM embraced modern supply chain technologies, digital platforms, and innovative trade practices. This shift improved efficiency in logistics, inventory management, and global communication, keeping the company at the forefront of the import-export industry."
    },
    {
      title: "SUSTAINABILITY & FUTURE",
      icon: timelineIcons.evolution[5],
      content: "Today, JCM is committed to sustainable business practices. From promoting eco-friendly textiles to ensuring ethical sourcing in chemicals and agro products, the company continues to evolve with a vision to create a greener, globally connected future for international trade."
    }
  ];

  // Timeline data for Future
  const futureTimeline = [
    {
      title: "DIGITAL TRANSFORMATION",
      icon: timelineIcons.future[0],
      content: "JCM aims to fully integrate AI-driven supply chain systems, blockchain for trade transparency, and advanced ERP solutions to ensure seamless import-export operations in the digital era, enhancing efficiency and customer experience across all touchpoints."
    },
    {
      title: "EXPANSION INTO NEW MARKETS",
      icon: timelineIcons.future[1],
      content: "With a vision to grow globally, JCM plans to strengthen its presence in Africa, Latin America, and emerging Asian economies, tapping into new opportunities in food, textiles, and electronics while building sustainable trade relationships worldwide."
    },
    {
      title: "INNOVATION IN PRODUCTS",
      icon: timelineIcons.future[2],
      content: "The company is set to expand into high-tech electronic appliances, eco-friendly textiles, and next-generation agro-chemical solutions that meet the demands of modern consumers worldwide while maintaining the highest quality standards."
    },
    {
      title: "SUSTAINABILITY GOALS",
      icon: timelineIcons.future[3],
      content: "JCM is committed to achieving carbon-neutral operations by 2035. From renewable energy-powered warehouses to sustainable sourcing, the company aims to be a leader in green trade practices that benefit both business and the environment."
    },
    {
      title: "SKILL DEVELOPMENT & EMPLOYMENT",
      icon: timelineIcons.future[4],
      content: "The future vision includes training young entrepreneurs and providing employment opportunities in the import-export sector, especially in rural India, to uplift communities and create a new generation of trade professionals."
    },
    {
      title: "LEGACY FOR FUTURE GENERATIONS",
      icon: timelineIcons.future[5],
      content: "Carrying forward the legacy of its founders, JCM envisions becoming one of the most respected global trading hubs, balancing profitability with social responsibility and innovation to create lasting value for all stakeholders."
    }
  ];

  // Get the current timeline based on active tab
  const getCurrentTimeline = () => {
    switch(activeTab) {
      case 'origin': return originTimeline;
      case 'evolution': return evolutionTimeline;
      case 'future': return futureTimeline;
      default: return originTimeline;
    }
  };

  const currentTimeline = getCurrentTimeline();

  // Reset timeline index when tab changes
  useEffect(() => {
    setActiveTimeline(0);
  }, [activeTab]);

  return (
    <div id="main-content">
      <article className="legacy-page">
        <div className="entry-content">
          <div className="et-l et-l--post">
            <div className="et_builder_inner_content et_pb_gutters3">
              
              {/* Banner Section */}
              <div className="container-fluid py-5 legacy-banner" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container text-center">
                  <img 
                    src={jcmLegacyLogo} 
                    alt="JCM Import Export Legacy" 
                    className="img-fluid mb-4"
                    style={{ width: "150px", height: "154px" }}
                  />
                  <h1 className="display-4 fw-bold mb-4" style={{ color: "#001659" }}>Our Legacy</h1>
                  <p className="lead mb-4 mx-auto" style={{ maxWidth: "800px" }}>
                    A journey through the history, evolution and future of JCM Import Export, which began over four decades ago. 
                    The foundation of our company was laid by our visionary founder who started with modest beginnings but boundless determination. 
                    The only thing he never learned was to give up. Explore our origin story, evolution, and vision for the future.
                  </p>
                  <Link 
                    to="/leadership" 
                    className="btn py-3 px-5 mt-3" 
                    style={{ 
                      backgroundColor: "#001659", 
                      color: "white",
                      borderRadius: "0",
                      border: "none",
                      textDecoration: "none",
                      display: "inline-block"
                    }}
                  >
                    Back to Leadership
                  </Link>
                </div>
              </div>

              {/* Timeline Navigation Tabs */}
              <div className="container-fluid py-4 timeline-tabs" style={{ backgroundColor: "#e9ecef" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                          <button 
                            className={`nav-link ${activeTab === 'origin' ? 'active' : ''}`}
                            onClick={() => setActiveTab('origin')}
                          >
                            THE ORIGIN STORY (1970 – 1985)
                          </button>
                        </li>
                        <li className="nav-item">
                          <button 
                            className={`nav-link ${activeTab === 'evolution' ? 'active' : ''}`}
                            onClick={() => setActiveTab('evolution')}
                          >
                            THE EVOLUTION (1985 – 2010)
                          </button>
                        </li>
                        <li className="nav-item">
                          <button 
                            className={`nav-link ${activeTab === 'future' ? 'active' : ''}`}
                            onClick={() => setActiveTab('future')}
                          >
                            A STEP INTO THE FUTURE (2010 ONWARDS)
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Content */}
              <div className="container-fluid py-5">
                <div className="container">
                  <div className="timeline-content">
                    <div className="horizontal-timeline">
                      <div className="events-wrapper">
                        <div className="events">
                          <ol>
                            {currentTimeline.map((item, index) => (
                              <li key={index} className={index === activeTimeline ? 'selected' : ''}>
                                <a 
                                  href="#0" 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTimeline(index);
                                  }}
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ol>
                          <span className="filling-line" aria-hidden="true"></span>
                        </div>
                      </div>
                      
                      <div className="events-content">
                        <ol>
                          {currentTimeline.map((item, index) => (
                            <li key={index} className={index === activeTimeline ? 'selected' : ''}>
                              <div className="row">
                                <div className="col-md-6 text-center mb-4 mb-md-0">
                                  {item.image ? (
                                    <img 
                                      src={item.image} 
                                      alt={item.title} 
                                      className="img-fluid"
                                      style={{ maxHeight: '300px', objectFit: 'contain' }}
                                    />
                                  ) : (
                                    <div className="timeline-icon-container">
                                      <i className={`bi ${item.icon}`} style={{ fontSize: '5rem', color: '#001659' }}></i>
                                    </div>
                                  )}
                                </div>
                                <div className="col-md-6">
                                  <h3 style={{ color: '#001659' }}>{item.title}</h3>
                                  <p>{item.content}</p>
                                  <div className="timeline-navigation mt-4">
                                    <button 
                                      className="btn btn-sm me-2"
                                      disabled={activeTimeline === 0}
                                      onClick={() => setActiveTimeline(activeTimeline - 1)}
                                      style={{ 
                                        backgroundColor: '#001659', 
                                        color: 'white',
                                        borderRadius: '0'
                                      }}
                                    >
                                      Previous
                                    </button>
                                    <button 
                                      className="btn btn-sm"
                                      disabled={activeTimeline === currentTimeline.length - 1}
                                      onClick={() => setActiveTimeline(activeTimeline + 1)}
                                      style={{ 
                                        backgroundColor: '#001659', 
                                        color: 'white',
                                        borderRadius: '0'
                                      }}
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Your Story Section */}
              <div className="container-fluid py-5 share-story" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <h2 className="mb-3" style={{ color: '#001659' }}>Share Your Story</h2>
                      <p className="mb-5">
                        We would like to hear your stories! Please take a few moments to share your experience with JCM Import Export. 
                        Simply fill out this form and send it our way. We'd love to hear from you! Your words of 
                        appreciation help build our reputation. Please share your story using the form below.
                      </p>
                      
                      <form onSubmit={handleSubmit} className="story-form">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name*"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '0' }}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name*"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '0' }}
                            />
                          </div>
                        </div>
                        
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email Address*"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '0' }}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Phone Number*"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '0' }}
                            />
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Share your experience with us"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            style={{ borderRadius: '0' }}
                          ></textarea>
                        </div>
                        
                        <div className="text-center">
                          <button 
                            type="submit" 
                            className="btn btn-lg"
                            style={{ 
                              backgroundColor: '#001659', 
                              color: 'white',
                              borderRadius: '0',
                              padding: '0.75rem 2rem'
                            }}
                          >
                            Share Your Story
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Legacy;