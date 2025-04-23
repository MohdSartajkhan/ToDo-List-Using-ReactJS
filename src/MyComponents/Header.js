import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const resetTodos = () => {
    localStorage.removeItem("todos");
    navigate(0); // Refresh
  };

  return (
    <nav className="navbar">
      <div className="logo">ToDoS</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
       </ul>
    </nav>
  );
}
