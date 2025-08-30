import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="text-center mx-auto pb-5" style={{maxWidth: "800px"}}>
              <p className="text-uppercase  fs-5 mb-0" style={{ color: "#FF5E15" }}>Let's Connect</p>
              <h2 className="display-4 text-capitalize mb-3" style={{ color: "#001659" }}>Send Your Message</h2>
              <p className="mb-0">Contact JCM Import Export Hub today for seamless global trade solutions and expert guidance on international shipping and customs clearance..</p>
            </div>
            <form>
              <div className="row g-3">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating border border-secondary">
                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating border border-secondary">
                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating border border-secondary">
                    <input type="phone" className="form-control" id="phone" placeholder="Phone"/>
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating border border-secondary">
                    <input type="text" className="form-control" id="project" placeholder="Project"/>
                    <label htmlFor="project">Your Project</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating border border-secondary">
                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating border border-secondary">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "160px"}}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3"style={{ backgroundColor: "#001659" }}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div className="contact-map h-100 w-100">
              <iframe 
                className="h-100 w-100" 
                style={{height: "500px"}} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                title="Location Map"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="d-inline-flex bg-white w-100 border border-secondary p-4">
              <i className="fas fa-map-marker-alt fa-2x  me-4" style={{ color: "#FF5E15" }}></i>
              <div>
                <h4>Address</h4>
                <p className="mb-0">123 North tower New York, USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className="d-inline-flex bg-white w-100 border border-secondary p-4">
              <i className="fas fa-envelope fa-2x  me-4" style={{ color: "#FF5E15" }}></i>
              <div>
                <h4>Mail Us</h4>
                <p className="mb-0"> jcmimportexporthub@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className="d-inline-flex bg-white w-100 border border-secondary p-4">
              <i className="fa fa-phone-alt fa-2x  me-4" style={{ color: "#FF5E15" }}></i>
              <div>
                <h4>Telephone</h4>
                <p className="mb-0"> +91-9270350972</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;