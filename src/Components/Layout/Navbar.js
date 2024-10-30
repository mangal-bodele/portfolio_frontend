import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0a15b0c5', height: '70px' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">Mangal Bodele</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link smooth className="nav-link text-white" to="/#home">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link text-white" to="/#about">About</Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link text-white" to="/#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link text-white" to="/#contacts">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;