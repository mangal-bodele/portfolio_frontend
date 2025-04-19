import React from 'react';

function About() {
  const skills = [
    { src: './Static/python.png', alt: 'Python' },
    { src: './Static/django.png', alt: 'Django' },
    { src: './Static/restframework.png', alt: 'Rest Framework' },
    { src: './Static/mysql.png', alt: 'MySQL' },
    { src: './Static/javascript.png', alt: 'JavaScript' },
    { src: './Static/css.png', alt: 'CSS' },
    { src: './Static/html.png', alt: 'HTML' },
    { src: './Static/react.png', alt: 'React' },
    { src: './Static/bootstrap.png', alt: 'Bootstrap' },
    { src: './Static/github.png', alt: 'GitHub' },
  ];

  return (
    <div className="container about-section mt-5 p-5">
      <section aria-label="Skills" className="row mb-5">
        {/* Skills section on the left */}
        <div className="col-md-6">
          <h2 className="text-center mb-4">Skills</h2>
          <ul className="list-unstyled d-flex flex-wrap justify-content-md-start justify-content-center">
            {skills.map((skill, index) => (
              <li key={index} className="m-3">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="img-fluid shadow-sm skill-icon"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* About Me section on the right */}
        <div className="col-md-6">
          <h2 className="text-center mb-4">About Me</h2>
          <p>
            Hi, I’m Mangal Bodele, a web developer with expertise in frontend and backend technologies. I build interactive, user-friendly applications.
          </p>
          <p>
            My skills include JavaScript, React, Python, Django, and Bootstrap. I'm constantly learning and staying up-to-date with the latest tech trends.
          </p>
          <a 
            href="https://wa.me/919284662053" 
            className="btn btn-success btn-lg mt-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Me via WhatsApp"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
