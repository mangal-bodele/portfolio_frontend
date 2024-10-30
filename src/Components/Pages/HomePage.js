import React from 'react';

const HomePage = () => {
  return (
    <div className="main-container" style={{ maxWidth: '1200px', marginTop: '70px' }}>
      <section className="my-5 p-5">
        <div className="row">
          {/* Left Column: Image Section with Social Media Icons */}
          <div className="col-md-6 text-center mb-4">
            <div
              className="image-container"
              style={{
                display: 'inline-block',
                borderRadius: '50%',
                overflow: 'hidden',
                width: '300px',
                height: '300px',
                border: '5px solid #0a15b0c5',
                marginBottom: '20px',
              }}
            >
              <img
                src="./Static/mangal_bodele.png"
                alt="Mangal Bodele"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center mt-3">
              <a
                href="https://www.linkedin.com/in/mangal-bodele/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <img
                  src="./Static/linkedin.png"
                  alt="LinkedIn"
                  style={{ width: '50px', height: '50px' }}
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
                  style={{ width: '70px', height: '50px' }}
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
                  style={{ width: '60px', height: '60px' }}
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
                  style={{ width: '50px', height: '50px' }}
                />
              </a>
            </div>
          </div>

          {/* Right Column: Introduction */}
          <div className="col-md-6 text-left mb-4">
            <h1 className="text-center mb-5" style={{ fontSize: '2rem', lineHeight: '1.2' }}>
              Welcome to My Portfolio
            </h1>
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
        </div>
      </section>
    </div>
  );
};

export default HomePage;