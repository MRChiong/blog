// src/components/Navbar.js
import React from 'react';

const Navbar = ({ navigate }) => {
  return (
    <nav>
      <div className="container">
        <a href="#" onClick={() => navigate('home')}>Home</a>
        <a href="#" onClick={() => navigate('addpost')}>Add Post</a>
        <a href="#" onClick={() => navigate('login')}>Login</a>
        <a href="#" onClick={() => navigate('signup')}>Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
