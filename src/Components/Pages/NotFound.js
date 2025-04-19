// ./Components/Pages/NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center py-5">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <a href="/#home" className="btn btn-primary">Back to Home</a>
    </div>
  );
};

export default NotFound;
