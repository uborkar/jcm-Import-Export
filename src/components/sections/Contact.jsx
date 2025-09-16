import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Bootstrap form validation
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      return;
    }

    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Submit to FormSubmit
      await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      // Redirect to thank you page on success
      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div
              className="text-center mx-auto pb-5"
              style={{ maxWidth: "800px" }}
            >
              <p
                className="text-uppercase fs-5 mb-0"
                style={{ color: "#FF5E15" }}
              >
                Let's Connect
              </p>
              <h2
                className="display-4 text-capitalize mb-3"
                style={{ color: "#001659" }}
              >
                Send Your Message
              </h2>
              <p className="mb-0">
                Contact JCM Import Export Hub today for seamless global trade
                solutions and expert guidance on international shipping and
                customs clearance..
              </p>
            </div>
            <form
              action="https://formsubmit.co/jcmimportexporthub@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              {/* FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission - JCM Import Export Hub"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control rounded-0 border-0 border-bottom border-secondary shadow-sm"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name" className="text-muted">
                      <i className="fas fa-user me-2"></i>Your Full Name
                    </label>
                    <div className="invalid-feedback">
                      Please provide your name
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control rounded-0 border-0 border-bottom border-secondary shadow-sm"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email" className="text-muted">
                      <i className="fas fa-envelope me-2"></i>Your Email Address
                    </label>
                    <div className="invalid-feedback">
                      Please provide a valid email
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control rounded-0 border-0 border-bottom border-secondary shadow-sm"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone" className="text-muted">
                      <i className="fas fa-phone me-2"></i>Your Phone Number
                      (Optional)
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control rounded-0 border-0 border-bottom border-secondary shadow-sm"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                    <label htmlFor="subject" className="text-muted">
                      <i className="fas fa-tag me-2"></i>Subject
                    </label>
                    <div className="invalid-feedback">
                      Please provide a subject
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control rounded-0 border-0 border-bottom border-secondary shadow-sm"
                      placeholder="Leave a message here"
                      id="message"
                      name="message"
                      style={{ height: "150px" }}
                      required
                    ></textarea>
                    <label htmlFor="message" className="text-muted">
                      <i className="fas fa-comment me-2"></i>Your Message
                    </label>
                    <div className="invalid-feedback">
                      Please provide a message
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn w-100 py-3 fw-bold text-uppercase"
                    style={{
                      backgroundColor: "#001659",
                      color: "white",
                      border: "none",
                      borderRadius: "0",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#001659";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#ff5e15";
                      e.target.style.transform = "translateY(0)";
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                      Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div className="contact-map h-100 w-100">
              <iframe
                className="h-100 w-100 rounded shadow-sm"
                style={{ height: "500px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.391982547209!2d73.7833458!3d18.6041838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9054962bf0f%3A0x6e7159bdf08d026e!2sVardhaman%20Aangan%20Society%20Rahatani!5e0!3m2!1sen!2sin!4v1694269999999!5m2!1sen!2sin"
                title="Location Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Address Section - All three in one row */}
        <div className="row g-4">
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="d-flex bg-white h-100 border border-secondary p-4 rounded shadow-sm">
              <i
                className="fas fa-map-marker-alt fa-2x me-4 mt-2"
                style={{ color: "#FF5E15", flexShrink: 0 }}
              ></i>
              <div>
                <h4>Office Address</h4>
                <p className="mb-0">
                  Flat No-A 508 S R No.34 Vardhaman Aangan, Kalewadi Road Tambe
                  School Kalewadi Pimpri Chinchwad, PUNE, MAHARASHTRA, 411017
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className="d-flex bg-white h-100 border border-secondary p-4 rounded shadow-sm">
              <i
                className="fas fa-map-marker-alt fa-2x me-4 mt-2"
                style={{ color: "#FF5E15", flexShrink: 0 }}
              ></i>
              <div>
                <h4>Office Address</h4>
                <p className="mb-0">
                  A-602,Saptshree Heights Near TMC Mini Sports Club, Dhokali,
                  Naka, Thane, Maharashtra 400607
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className="d-flex bg-white h-100 border border-secondary p-4 rounded shadow-sm">
              <i
                className="fas fa-map-marker-alt fa-2x me-4 mt-2"
                style={{ color: "#FF5E15", flexShrink: 0 }}
              ></i>
              <div>
                <h4>Warehouse</h4>
                <p className="mb-0">
                  Bidar Road, Near Mahadev Temple, Shelal Pathi, Udgir, Latur,
                  Maharashtra 413517
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="row g-4 mt-2">
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="d-flex bg-white h-100 border border-secondary p-4 rounded shadow-sm">
              <i
                className="fas fa-envelope fa-2x me-4 mt-2"
                style={{ color: "#FF5E15", flexShrink: 0 }}
              ></i>
              <div>
                <h4>Mail Us</h4>
                <p className="mb-0">jcmimportexporthub@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className="d-flex bg-white h-100 border border-secondary p-4 rounded shadow-sm">
              <i
                className="fa fa-phone-alt fa-2x me-4 mt-2"
                style={{ color: "#FF5E15", flexShrink: 0 }}
              ></i>
              <div>
                <h4>Telephone</h4>
                <p className="mb-0">+91-9370936583</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className="d-flex bg-white h-100 border border-secondary p-4 rounded shadow-sm">
              <i
                className="fas fa-clock fa-2x me-4 mt-2"
                style={{ color: "#FF5E15", flexShrink: 0 }}
              ></i>
              <div>
                <h4>Business Hours</h4>
                <p className="mb-0">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
