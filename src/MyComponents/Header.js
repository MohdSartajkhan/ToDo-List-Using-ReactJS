import React from 'react';
import './Header.css'; // Create this new file

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">📋 ToDoS</h2>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
