import React from 'react';

const HomePage = () => {
  return (
    <div className="container my-5 p-5">
      <section className="row">
        {/* Left Column: Image Section with Social Media Icons */}
        <div className="col-md-6 text-center mb-4">
          <div className="image-container">
            <img
              src="./Static/mangal_bodele.png"
              alt="Mangal Bodele"
              className="profile-img"
            />
          </div>

          {/* Social Media Icons */}
          <div className="social-media-icons d-flex justify-content-center mt-3">
            <a
              href="https://www.linkedin.com/in/mangal-bodele/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <img
                src="./Static/linkedin.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.github.com/mangal-bodele/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <img
                src="./Static/github.png"
                alt="GitHub"
                className="social-icon"
              />
            </a>
            <a
              href="https://wa.me/919284662053"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <img
                src="./Static/whatsapp.png"
                alt="WhatsApp"
                className="social-icon"
              />
            </a>
            <a
              href="./Static/mangal_bodele_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <img
                src="./Static/resume.png"
                alt="Resume"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Introduction */}
        <div className="col-md-6 text-left mb-4">
          <h1 className="text-center mb-5">Welcome to My Portfolio</h1>
          <p>
            Hi, I'm Mangal Bodele, a passionate full stack developer with expertise in both frontend and backend technologies.
            I create efficient, scalable, and user-friendly applications.
          </p>
          <p>
            With a strong foundation in languages like JavaScript, Python, and frameworks such as Django and React,
            I aim to deliver the best solutions for modern web applications. My experience spans developing dynamic websites,
            RESTful APIs, and working with databases like MySQL.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
