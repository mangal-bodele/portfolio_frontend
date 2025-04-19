import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home"><HomePage /></section>
                  <section id="about"><About /></section>
                  <section id="projects"><Projects /></section>
                  <section id="contacts"><Contacts /></section>
                </>
              }
            />
            {/* 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="text-center py-5">
                  <h1 className="display-4 text-danger">404</h1>
                  <p className="lead">Oops! The page you're looking for doesn't exist.</p>
                  <a href="/#home" className="btn btn-primary">Back to Home</a>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
