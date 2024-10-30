import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="container about-section mt-5 p-5" style={{ maxWidth: '1200px', marginTop: '40px' }}>
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Skills</h2>
          <ul className="list-unstyled d-flex flex-wrap justify-content-md-start justify-content-center">
            <li className="m-3">
              <img
                src='./Static/python.png'
                alt="Python"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/django.png'
                alt="Django"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/restframework.png'
                alt="Rest Framework"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/mysql.png'
                alt="MySQL"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/javascript.png'
                alt="JavaScript"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/css.png'
                alt="CSS"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/html.png'
                alt="HTML"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/react.png'
                alt="React"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/bootstrap.png'
                alt="Bootstrap"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
            <li className="m-3">
              <img
                src='./Static/github.png'
                alt="GitHub"
                className="img-fluid shadow-sm"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="text-center mb-4">About Me</h2>
          <p>
            Hi, I’m Mangal Bodele, a web developer with expertise in frontend and backend technologies. I build interactive, user-friendly applications.
          </p>
          <p>
            My skills include JavaScript, React, Python, Django, and Bootstrap. I'm constantly learning and staying up-to-date with the latest tech trends.
          </p>
          <NavLink to="/contacts" className="btn btn-success btn-lg mt-3">Contact Me</NavLink>
        </div>
      </div>
    </div>
  );
}

export default About;