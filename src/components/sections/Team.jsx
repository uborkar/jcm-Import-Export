import React from 'react';
import team1 from '../../assets/img/team-1.jpg';
import team2 from '../../assets/img/team-2.jpg';
import team3 from '../../assets/img/team-3.jpg';
import team4 from '../../assets/img/team-4.jpg';

const Team = () => {
  return (
    <div className="container-fluid team py-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
          <p className="text-uppercase fs-5 mb-0" style={{color: "#FF5E15"}}>Our Team</p>
          <h2 className="display-4 text-capitalize mb-3" style={{color: "#001659"}}>Expert team members.</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <div className="team-item border border-primary p-1">
              <div className="team-border-style-1"></div>
              <div className="team-border-style-2"></div>
              <div className="team-border-style-3"></div>
              <div className="team-border-style-4"></div>
              <div className="team-img">
                <img src={team1} className="img-fluid w-100" alt="Team member Masud Maria" />
                <div className="team-icon d-flex justify-content-around">
                  <a className="btn  btn-md-square text-white mx-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-twitter"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-top-0 bg-white py-3">
                <h4 className="mb-0"  style={{color: "#001659"}}>Masud Maria</h4>
                <p className="mb-0">Foreman</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <div className="team-item border border-primary p-1">
              <div className="team-border-style-1"></div>
              <div className="team-border-style-2"></div>
              <div className="team-border-style-3"></div>
              <div className="team-border-style-4"></div>
              <div className="team-img">
                <img src={team2} className="img-fluid w-100" alt="Team member Masud Maria" />
                <div className="team-icon d-flex justify-content-around">
                <a className="btn  btn-md-square text-white mx-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-twitter"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-top-0 bg-white py-3">
                <h4 className="mb-0"  style={{color: "#001659"}}>Masud Maria</h4>
                <p className="mb-0">Foreman</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
            <div className="team-item border border-primary p-1">
              <div className="team-border-style-1"></div>
              <div className="team-border-style-2"></div>
              <div className="team-border-style-3"></div>
              <div className="team-border-style-4"></div>
              <div className="team-img">
                <img src={team3} className="img-fluid w-100" alt="Team member Masud Maria" />
                <div className="team-icon d-flex justify-content-around">
                    <a className="btn  btn-md-square text-white mx-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-twitter"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-top-0 bg-white py-3">
                <h4 className="mb-0"  style={{color: "#001659"}}>Masud Maria</h4>
                <p className="mb-0">Foreman</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
            <div className="team-item border border-primary p-1">
              <div className="team-border-style-1"></div>
              <div className="team-border-style-2"></div>
              <div className="team-border-style-3"></div>
              <div className="team-border-style-4"></div>
              <div className="team-img">
                <img src={team4} className="img-fluid w-100" alt="Team member Masud Maria" />
                <div className="team-icon d-flex justify-content-around">
                  <a className="btn  btn-md-square text-white mx-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-twitter"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn  btn-md-square text-white me-3" href="#"  style={{backgroundColor: "#FF5E15", borderRadius:"0"}}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center border border-top-0 bg-white py-3">
                <h4 className="mb-0"  style={{color: "#001659"}}>Masud Maria</h4>
                <p className="mb-0">Foreman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;