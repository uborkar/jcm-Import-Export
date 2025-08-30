import React, { useState } from 'react';
import project1 from '../../assets/img/project-1.jpg';
import project2 from '../../assets/img/project-2.jpg';
import project3 from '../../assets/img/project-3.jpg';
import project4 from '../../assets/img/project-4.jpg';

const Projects = () => {

  // Track hover states for buttons
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div className="container-fluid project py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
          <p className="text-uppercase fs-5 mb-0"  style={{color: "#FF5E15"}}>Our Projects</p>
          <h2 className="display-4 text-capitalize mb-3"  style={{color: "#001659"}}>Recent Completed Projects</h2>
        </div>
        <div className="row g-5">
          
          {/* Project 1 */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="project-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="project-img">
                    <img src={project1} className="img-fluid w-100 pt-3 ps-3" alt="Architecture project" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="project-content mb-4">
                    <p className="fs-5  mb-2"  style={{color: "#FF5E15"}}>Architecture</p>
                    <a href="#" className="h4"  style={{color: "#001659", textDecoration: "none"}}>We Building Everything</a>
                    <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                  </div>
                  <a 
                    className="btn btn-primary py-2 px-4" 
                    href="#"  
                    style={{ 
                      backgroundColor: hoveredBtn === "btn1" ? "#FF5E15" : "#001659", 
                      borderRadius:"0",
                      border:"none" 
                    }}
                    onMouseEnter={() => setHoveredBtn("btn1")}
                    onMouseLeave={() => setHoveredBtn(null)}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="project-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="project-img">
                    <img src={project2} className="img-fluid w-100 pt-3 ps-3" alt="Interior design project" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="project-content mb-4">
                    <p className="fs-5 mb-2"  style={{color: "#FF5E15"}}>Interior Design</p>
                    <a href="#" className="h4"  style={{color: "#001659", textDecoration: "none"}}>We Building Everything</a>
                    <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                  </div>
                  <a 
                    className="btn btn-primary py-2 px-4" 
                    href="#"  
                    style={{ 
                      backgroundColor: hoveredBtn === "btn2" ? "#FF5E15" : "#001659", 
                      borderRadius:"0",
                      border:"none" 
                    }}
                    onMouseEnter={() => setHoveredBtn("btn2")}
                    onMouseLeave={() => setHoveredBtn(null)}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="project-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="project-img">
                    <img src={project3} className="img-fluid w-100 pt-3 ps-3" alt="House exterior project" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="project-content mb-4">
                    <p className="fs-5  mb-2"  style={{color: "#FF5E15"}}>House & Exterior</p>
                    <a href="#" className="h4"  style={{color: "#001659", textDecoration: "none"}}>We Building Everything</a>
                    <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                  </div>
                  <a 
                    className="btn btn-primary py-2 px-4" 
                    href="#"  
                    style={{ 
                      backgroundColor: hoveredBtn === "btn3" ? "#FF5E15" : "#001659", 
                      borderRadius:"0",
                      border:"none" 
                    }}
                    onMouseEnter={() => setHoveredBtn("btn3")}
                    onMouseLeave={() => setHoveredBtn(null)}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="project-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="project-img">
                    <img src={project4} className="img-fluid w-100 pt-3 ps-3" alt="Interior design project" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="project-content mb-4">
                    <p className="fs-5  mb-2"  style={{color: "#FF5E15"}}>Interior Design</p>
                    <a href="#" className="h4"  style={{color: "#001659", textDecoration: "none"}}>We Building Everything</a>
                    <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                  </div>
                  <a 
                    className="btn btn-primary py-2 px-4" 
                    href="#"  
                    style={{ 
                      backgroundColor: hoveredBtn === "btn4" ? "#FF5E15" : "#001659", 
                      borderRadius:"0",
                      border:"none" 
                    }}
                    onMouseEnter={() => setHoveredBtn("btn4")}
                    onMouseLeave={() => setHoveredBtn(null)}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Last "More Projects" Button */}
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
            <a 
              className="btn btn-secondary py-3 px-5" 
              href="#"  
              style={{ 
                backgroundColor: hoveredBtn === "btn5" ? "#001659" : "#FF5E15", 
                borderRadius:"0",
                border:"none"
              }}
              onMouseEnter={() => setHoveredBtn("btn5")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              More Projects
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
