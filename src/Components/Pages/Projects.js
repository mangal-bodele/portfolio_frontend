import React from 'react';
import { NavLink } from 'react-router-dom';

// Function to retrieve project data (for reference; not used in rendering)
const getProjectsData = () => [
  {
    id: 1,
    title: 'Project 1',
    image: `${process.env.PUBLIC_URL}/path/to/image1.jpg`, // Replace with your image path
    description: 'This is a brief description of Project 1.',
  },
  {
    id: 2,
    title: 'Project 2',
    image: `${process.env.PUBLIC_URL}/path/to/image2.jpg`, // Replace with your image path
    description: 'This is a brief description of Project 2.',
  },
  {
    id: 3,
    title: 'Project 3',
    image: `${process.env.PUBLIC_URL}/path/to/image3.jpg`, // Replace with your image path
    description: 'This is a brief description of Project 3.',
  },
];

const Projects = () => {
  return (
    <section>
      <div className="container" style={{ maxWidth: '1200px', marginTop: '40px' }}>
        <h2 className="text-center mb-5">Projects</h2>

        <div className="projects-container"> {/* Flex container for vertical stacking */}
          {/* Project 1 */}
          <div className="project-card row align-items-center">
            <div className="col-md-6 p-3">
              <img
                src={`${process.env.PUBLIC_URL}/path/to/image1.jpg`}
                alt="Project 1"
                className="img-fluid project-image"
                style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <div className="col-md-6 p-3">
              <div className="project-info">
                <h3>Project 1</h3>
                <p>This is a brief description of Project 1.</p>
                <NavLink to="/projects/1" className="btn btn-success">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card row align-items-center">
            <div className="col-md-6 p-3">
              <img
                src={`${process.env.PUBLIC_URL}/path/to/image2.jpg`}
                alt="Project 2"
                className="img-fluid project-image"
                style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <div className="col-md-6 p-3">
              <div className="project-info">
                <h3>Project 2</h3>
                <p>This is a brief description of Project 2.</p>
                <NavLink to="/projects/2" className="btn btn-success">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card row align-items-center">
            <div className="col-md-6 p-3">
              <img
                src={`${process.env.PUBLIC_URL}/path/to/image3.jpg`}
                alt="Project 3"
                className="img-fluid project-image"
                style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <div className="col-md-6 p-3">
              <div className="project-info">
                <h3>Project 3</h3>
                <p>This is a brief description of Project 3.</p>
                <NavLink to="/projects/3" className="btn btn-success">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;