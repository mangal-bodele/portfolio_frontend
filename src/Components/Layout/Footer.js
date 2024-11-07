import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-white text-center py-4" style={{  height: '70px' }}>
      <p className="mb-0">© {new Date().getFullYear()} Mangal Bodele. All rights reserved.</p>
    </footer>
  );
};

export default Footer;