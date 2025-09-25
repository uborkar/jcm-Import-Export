import React, { useState } from "react";
// import { Link } from "react-router-dom";
import img1 from "../../assets/img/ceo-e.jpg";
import img2 from "../../assets/img/head1-e.jpg";
import img3 from "../../assets/img/head2-e.jpg";
import img4 from "../../assets/img/head3.jpg";
import img5 from "../../assets/img/head4.jpg";
// import img4 from '../../assets/img/MD.jpg';
// import leadershipBanner from "../../assets/img/leadership-banner.jpg";

const Leadership = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const leaderDetails = {
    leader1: {
      name: "Mr. Siddharam Maindargi",
      title: "Founder and CEO",
      fullDescription: [
        "Mr. Siddharam Maindargi is the visionary Founder and CEO of JCM Group, providing the strategic direction and driving force behind the company's success. With a distinguished career spanning over 25 years, he brings a wealth of expertise in commodities, logistics, and international business.",
        "His extensive domestic and global exposure has been instrumental in shaping JCM's vision and mission. A true entrepreneur at heart, Mr. Maindargi combines deep industry knowledge with an innovative mindset, focusing on sustainable global growth and building a resilient business model for the future.",
      ],
    },
    leader2: {
      name: "Mrs. Shridevi Maindargi",
      title: "Managing Director",
      fullDescription: [
        "Shridevi Maindargi, the Founder Member of JCM Import-Export, currently serves as the Managing Director and a key Board Member of the company, where she plays an instrumental role in shaping the organization’s strategic direction. With her visionary leadership, she has been driving initiatives that are not only focused on building a customer-centric culture, but also on transforming and digitalizing the import and export processes to bring efficiency, transparency, and innovation.",
        " Her long-term vision ensures that JCM stays ahead in the competitive global trade landscape while consistently delivering enhanced value, reliability, and seamless services to its customers worldwide.",
      ],
    },
    leader3: {
      name: "Mr. Dhanaji Thore",
      title: "Head – Marketing & Finance",
      fullDescription: [
        "Mr. Dhanaji Thore is a dynamic leader who heads the integrated Marketing and Finance portfolio for the JCM Group. An MBA from a premier institute, he brings over 12 years of rich and diverse experience across both domains.",
        "His unique expertise allows for a synergistic approach to business strategy, seamlessly aligning market-facing initiatives with robust financial planning. Dhanaji is passionately driven by a vision for global expansion, focusing on establishing JCM as a trusted international brand.",
      ],
    },
    leader4: {
      name: "Mrs. Shruti Zunja",
      title: "Head -Exim & CS",
      fullDescription: [
        "Shruti Zunja leads the Exim and Company Secretary Department at JCM Group. With a dynamic personality and expertise in handling EXIM operations and corporate portfolios, she drives excellence in every aspect of her work.",
        "She envisions making JCM 100% compliant with a zero-tolerance approach, ensuring the highest standards of trust and transparency for all stakeholders and customers.",
      ],
    },
    leader5: {
      name: "Ms. Shruti Javalkoti",
      title: "HR Head",
      fullDescription: [
        "As a Co-Founder and the HR Head of JCM Group, Ms. Shruti Javalkoti is the cornerstone of our company's culture and people strategy. With over  5 years of dedicated experience in human resources, she possesses a deep understanding of what it takes to build and nurture a thriving organization.",
        "Ms. Shruti is profoundly passionate about people. She champions a workplace environment built on respect, trust, and a genuine sense of family. Her philosophy centers on the belief that when employees feel valued and supported, they are empowered to do their best work.",
        "Her strategic focus areas include:",
        "· Cultivating strong employee engagement and retention.",
        "· Driving talent development and leadership growth.",
        "· Ensuring HR practices are seamlessly aligned with the JCM Group's long-term vision and values.",
        "Her leadership ensures that the JCM team remains our greatest asset, united and motivated to achieve shared success.",
      ],
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
              {/* Banner Section */}
              <div
                className="container-fluid py-5"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8 text-center">
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
                  </div>
                </div>
              </div>

              {/* Leadership Team Section */}
              <div id="Leadershipbx" className="container-fluid py-5">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    {/* Leader 1 */}
                    <div className="col-md-6 col-lg-4 d-flex order-lg-2">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img1}
                            alt="Siddharam Maindargi"
                            className="img-fluid w-100"
                            style={{ objectFit: "contain", objectPosition: "center", width: "100%", height: "100%" }}
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
                    <div className="col-md-6 col-lg-4 d-flex order-lg-1">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img4}
                            alt="Shridevi Maindargi"
                            className="img-fluid w-100"
                            style={{ objectFit: "contain", objectPosition: "center", width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="team-member-description p-4 d-flex flex-column flex-grow-1">
                          <h4
                            className="fw-bold mb-2"
                            style={{ color: "#001659" }}
                          >
                            Mrs. Shridevi Maindargi
                          </h4>
                          <p
                            className="text-uppercase mb-3"
                            style={{ color: "#FF5E15" }}
                          >
                            Managing Director
                          </p>
                          <div className="mb-4 flex-grow-1">
                            <p className="text-start">
                              Shridevi Maindargi, the Founder Member of JCM Import-Export, currently serves as the Managing Director and a key Board Member of the company, where she plays an instrumental role in shaping the organization’s strategic direction...
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
                               {/* Force a new row after the first two on large screens without changing widths */}
                    <div className="w-100 d-none d-lg-block order-lg-3"></div>

                    {/* Leader 3 */}
                    <div className="col-md-6 col-lg-4 d-flex order-lg-4">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img2}
                            alt="Dhanaji Thore"
                            className="img-fluid w-100"
                            style={{ objectFit: "contain", objectPosition: "center", width: "100%", height: "100%" }}
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
                              the JCM Group. An MBA from a premier
                              institute, he brings over 12 years of rich and
                              diverse experience across both domains...
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

                    {/* Leader 4 */}
                    <div className="col-md-6 col-lg-4 d-flex order-lg-5">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img3}
                            alt="Shruti Zunja"
                            className="img-fluid w-100"
                            style={{ objectFit: "contain", objectPosition: "center", width: "100%", height: "100%" }}
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
                                hoveredBtn === "btn4" ? "#FF5E15" : "#001659",
                              color: "white",
                              borderRadius: "0",
                              border: "none",
                            }}
                            onMouseEnter={() => setHoveredBtn("btn4")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal("leader4")}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Leader 5 */}
                    <div className="col-md-6 col-lg-4 d-flex order-lg-5">
                      <div className="team-member-card text-center d-flex flex-column w-100 shadow-sm">
                        <div className="team-member-image" style={{ overflow: "hidden", height: "380px" }}>
                          <img
                            src={img5}
                            alt="Shruti Javalkoti"
                            className="img-fluid w-100"
                            style={{ objectFit: "contain", objectPosition: "center", width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="team-member-description p-4 d-flex flex-column flex-grow-1">
                          <h4
                            className="fw-bold mb-2"
                            style={{ color: "#001659" }}
                          >
                            Ms. Shruti Javalkoti
                          </h4>
                          <p
                            className="text-uppercase mb-3"
                            style={{ color: "#FF5E15" }}
                          >
                            HR HEAD
                          </p>
                          <div className="mb-4 flex-grow-1">
                            <p className="text-start">
                            As a Co-Founder and the HR Head of JCM Group, Ms. Shruti Javalkoti is the cornerstone of our company's culture and people strategy. With over  5 years of dedicated experience in human resources, she possesses a deep understanding of what it takes to build and nurture a thriving organization...
                            </p>
                          </div>
                          <button
                            className="btn py-2 px-4 mt-auto"
                            style={{
                              backgroundColor:
                                hoveredBtn === "btn5" ? "#FF5E15" : "#001659",
                              color: "white",
                              borderRadius: "0",
                              border: "none",
                            }}
                            onMouseEnter={() => setHoveredBtn("btn5")}
                            onMouseLeave={() => setHoveredBtn(null)}
                            onClick={() => openModal("leader5")}
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
                {leaderDetails[showModal].fullDescription.map(
                  (paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-3" : ""}>
                      {paragraph}
                    </p> 
                  )
                )}
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
