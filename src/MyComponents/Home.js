import React, { useRef, useState } from 'react';
import Todos from './Todos';
import './Home.css';

const Home = () => {
  const todosRef = useRef(null);
  const [showTodos, setShowTodos] = useState(false);

  const handleGetStarted = () => {
    setShowTodos(true);
    setTimeout(() => {
      todosRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div>
      <h2>Welcome to Sartaj's ToDo App 🚀</h2>
      <p>Manage your tasks efficiently and in style!</p>
      <button className="start-btn" onClick={handleGetStarted}>✨ Get Started</button>

      <div
        ref={todosRef}
        className={`todo-box-wrapper ${showTodos ? 'zoom-in' : ''}`}
      >
        {showTodos && <Todos />}
      </div>
    </div>
  );
};

export default Home;
