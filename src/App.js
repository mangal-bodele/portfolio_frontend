import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contacts from './Components/Pages/Contacts';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div>
          <Routes>
            {/* This route renders all sections on a single page */}
            <Route path="/" element={
              <>
                <section id="home">
                  <HomePage />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="contacts">
                  <Contacts />
                </section>
              </>
            } />
            {/* Add more routes for other standalone pages if needed */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;