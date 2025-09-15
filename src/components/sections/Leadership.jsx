import React, { useState } from "react";
// import { Link } from "react-router-dom";
import img1 from "../../assets/img/ceo-e.jpg";
import img2 from "../../assets/img/head1-e.jpg";
import img3 from "../../assets/img/head2-e.jpg";
// import img4 from '../../assets/img/MD.jpg';
import leadershipBanner from "../../assets/img/leadership-banner.jpg";

const Leadership = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const leaderDetails = {
    leader1: {
      name: "Mr. Siddharam Maindargi",
      title: "Founder and CEO",
      fullDescription: [
        "Mr. Siddharam Maindargi is the visionary Founder and CEO of JCM Group, providing the strategic direction and driving force behind the company's success. With a distinguished career spanning over 25 years, he brings a wealth of expertise in commodities, logistics, and international business.",
        "His extensive domestic and global exposure has been instrumental in shaping JCM's vision and mission. A true entrepreneur at heart, Mr. Maindargi combines deep industry knowledge with an innovative mindset, focusing on sustainable global growth and building a resilient business model for the future."
      ]
    },
    leader2: {
      name: "Mr. Dhanaji Thore",
      title: "Head – Marketing & Finance",
      fullDescription: [
        "Mr. Dhanaji Thore is a dynamic leader who heads the integrated Marketing and Finance portfolio for the JCM Group. An MBA graduate from a premier institute, he brings over 12 years of rich and diverse experience across both domains.",
        "His unique expertise allows for a synergistic approach to business strategy, seamlessly aligning market-facing initiatives with robust financial planning. Dhanaji is passionately driven by a vision for global expansion, focusing on establishing JCM as a trusted international brand."
      ]
    },
    leader3: {
      name: "Mrs. Shruti Zunja",
      title: "Head -Exim & CS",
      fullDescription: [
        "Shruti Zunja leads the Exim and Company Secretary Department at JCM Group. With a dynamic personality and expertise in handling EXIM operations and corporate portfolios, she drives excellence in every aspect of her work.",
        "She envisions making JCM 100% compliant with a zero-tolerance approach, ensuring the highest standards of trust and transparency for all stakeholders and customers."
      ]
    },
  };

  const openModal = (leader) => {
    setShowModal(leader);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div id="main-content">
      <article
        id="post-7550"
        className="post-7550 page type-page status-publish hentry"
      >
        <div className="entry-content">
          <div className="et-l et-l--post">
            <div className="et_builder_inner_content et_pb_gutters3">
              {/* Banner Section */}
              <div
                className="container-fluid py-5"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="inner-left">
                        <h1
                          className="display-4 fw-bold mb-4"
                          style={{ color: "#001659" }}
                        >
                          Leadership
                        </h1>
                        <p className="lead mb-4">
                          As the fate of a ship depends on the decision of the
                          Captain, so does the fortune and growth of a business
                          depend on the decisions taken by the team that heads
                          the Management. Leaders in the top rungs of the
                          company are responsible for taking decisions that will
                          work in favor for the company driving it to success.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src={leadershipBanner}
                        alt="Leadership Banner"
                        className="img-fluid rounded"
                        style={{ 
                          maxHeight: "500px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Team Section */}
              <div id="Leadershipbx" className="container-fluid py-5">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    {/* Leader 1 */}
                    <div className="col-md-6 col-lg-4 d-flex">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img1}
                            alt="Siddharam Maindargi"
                            className="img-fluid w-100 h-150"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description p-4 d-flex flex-column flex-grow-1">
                          <h4
                            className="fw-bold mb-2"
                            style={{ color: "#001659" }}
                          >
                            Mr. Siddharam Maindargi
                          </h4>
                          <p
                            className="text-uppercase mb-3"
                            style={{ color: "#FF5E15" }}
                          >
                            Founder and CEO
                          </p>
                          <div className="mb-4 flex-grow-1">
                            <p className="text-start">
                              Mr. Siddharam Maindargi is the visionary Founder
                              and CEO of JCM Group, providing the strategic
                              direction and driving force behind the company's
                              success. With a distinguished career spanning over
                              25 years, he brings a wealth of expertise in
                              commodities, logistics, and international
                              business...
                            </p>
                          </div>
                          <button
                            className="btn py-2 px-4 mt-auto"
                            style={{
                              backgroundColor:
                                hoveredBtn === "btn1" ? "#FF5E15" : "#001659",
                              color: "white",
                              borderRadius: "0",
                              border: "none",
                            }}
                            onMouseEnter={() => setHoveredBtn("btn1")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal("leader1")}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Leader 2 */}
                    <div className="col-md-6 col-lg-4 d-flex">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img2}
                            alt="Dhanaji Thore"
                            className="img-fluid w-100 h-150"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description p-4 d-flex flex-column flex-grow-1">
                          <h4
                            className="fw-bold mb-2"
                            style={{ color: "#001659" }}
                          >
                            Mr. Dhanaji Thore
                          </h4>
                          <p
                            className="text-uppercase mb-3"
                            style={{ color: "#FF5E15" }}
                          >
                            Head – Marketing & Finance
                          </p>
                          <div className="mb-4 flex-grow-1">
                            <p className="text-start">
                              Mr. Dhanaji Thore is a dynamic leader who heads
                              the integrated Marketing and Finance portfolio for
                              the JCM Group. An MBA graduate from a premier
                              institute, he brings over 12 years of rich and
                              diverse experience across both domains...
                            </p>
                          </div>
                          <button
                            className="btn py-2 px-4 mt-auto"
                            style={{
                              backgroundColor:
                                hoveredBtn === "btn2" ? "#FF5E15" : "#001659",
                              color: "white",
                              borderRadius: "0",
                              border: "none",
                            }}
                            onMouseEnter={() => setHoveredBtn("btn2")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal("leader2")}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Leader 3 */}
                    <div className="col-md-6 col-lg-4 d-flex">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img3}
                            alt="Shruti Zunja"
                            className="img-fluid w-100 h-150"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="team-member-description p-4 d-flex flex-column flex-grow-1">
                          <h4
                            className="fw-bold mb-2"
                            style={{ color: "#001659" }}
                          >
                            Mrs. Shruti Zunja
                          </h4>
                          <p
                            className="text-uppercase mb-3"
                            style={{ color: "#FF5E15" }}
                          >
                            Head -Exim & CS
                          </p>
                          <div className="mb-4 flex-grow-1">
                            <p className="text-start">
                              Shruti Zunja leads the Exim and Company Secretary
                              Department at JCM Group. With a dynamic
                              personality and expertise in handling EXIM
                              operations and corporate portfolios, she drives
                              excellence in every aspect of her work...
                            </p>
                          </div>
                          <button
                            className="btn py-2 px-4 mt-auto"
                            style={{
                              backgroundColor:
                                hoveredBtn === "btn3" ? "#FF5E15" : "#001659",
                              color: "white",
                              borderRadius: "0",
                              border: "none",
                            }}
                            onMouseEnter={() => setHoveredBtn("btn3")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal("leader3")}
                          >
                            Read More
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
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#001659", color: "white" }}
              >
                <h5 className="modal-title">{leaderDetails[showModal].name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  style={{ filter: "invert(1)" }}
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-4">
                <h6 style={{ color: "#FF5E15" }}>
                  {leaderDetails[showModal].title}
                </h6>
                {leaderDetails[showModal].fullDescription.map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-3" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#001659",
                    color: "white",
                    borderRadius: "0",
                  }}
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