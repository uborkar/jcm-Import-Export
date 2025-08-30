import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.png";
import blog3 from "../../assets/img/globe.jpg";

const Blog = () => {
  // State for 3 buttons hover
  const [hoverBtn, setHoverBtn] = useState([false, false, false]);
  // State for 3 links hover
  const [hoverLink, setHoverLink] = useState([false, false, false]);

  // Blog content data
  const blogPosts = [
    {
      image: blog1,
      title: "Global Trade Trends: Latest Market Insights",
      content: "Regular updates on global trade trends.",
      date: "26 April 2025",
    },
    {
      image: blog2,
      title: "Beginner's Guide to Import-Export Business",
      content: "Tips for new importers/exporters.",
      date: "25 April 2025",
    },
    {
      image: blog3,
      title: "Country-Specific Export Strategies & Guides",
      content: "Country-specific export guides.",
      date: "24 April 2025",
    },
  ];

  // Function to toggle button hover state
  const handleBtnHover = (index, value) => {
    const updated = [...hoverBtn];
    updated[index] = value;
    setHoverBtn(updated);
  };

  // Function to toggle link hover state
  const handleLinkHover = (index, value) => {
    const updated = [...hoverLink];
    updated[index] = value;
    setHoverLink(updated);
  };

  return (
    <div className="container-fluid blog py-5">
      <div className="container pb-2">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <p className="text-uppercase fs-5 mb-0" style={{ color: "#FF5E15" }}>
            News & Blog
          </p>
          <h2
            className="display-4 text-capitalize mb-3"
            style={{ color: "#001659" }}
          >
            Our latest news post and articles?
          </h2>
        </div>

        <div className="row g-4">
          {blogPosts.map((blog, index) => (
            <div
              className={`col-lg-4 wow fadeInUp`}
              data-wow-delay={`${0.2 + index * 0.2}s`}
              key={index}
            >
              <div className="blog-item h-100">
                <div className="blog-img">
                  <img
                    src={blog.image}
                    className="img-fluid w-100"
                    alt="Blog Post"
                  />
                </div>
                <div className="blog-content p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <p className="mb-0">
                      <i
                        className="fa fa-calendar-check me-1"
                        style={{ color: "#FF5E15" }}
                      ></i>{" "}
                      {blog.date}
                    </p>
                    <p className="mb-0">
                      <i
                        className="fa fa-user  me-1"
                        style={{ color: "#FF5E15" }}
                      ></i>{" "}
                      Admin
                    </p>
                  </div>

                  {/* Blog Title Anchor */}
                  <Link
                    to="/blog/trade-trends"
                    className="h4 d-block mb-4"
                    style={{
                      color: hoverLink[index] ? "#FF5E15" : "#001659",
                      textDecoration: "none",
                      transition: "0.3s",
                      fontSize: "1.75rem",
                    }}
                    onMouseEnter={() => handleLinkHover(index, true)}
                    onMouseLeave={() => handleLinkHover(index, false)}
                  >
                    {blog.title}
                  </Link>
                  {/* Blog Content */}
                  <p className="mb-4" style={{ color: "#666" }}>
                    {blog.content}
                  </p>

                  {/* Read More Button */}
                  <Link
                    className="btn btn-secondary py-2 px-4"
                    to={
                      index === 0
                        ? "/blog/trade-trends"
                        : index === 1
                        ? "/blog/import-export-tips"
                        : "/blog/export-guides"
                    }
                    style={{
                      backgroundColor: hoverBtn[index] ? "#001659" : "#FF5E15",
                      color: hoverBtn[index] ? "#FF5E15" : "#fff",
                      borderRadius: "0",
                      border: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={() => handleBtnHover(index, true)}
                    onMouseLeave={() => handleBtnHover(index, false)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
