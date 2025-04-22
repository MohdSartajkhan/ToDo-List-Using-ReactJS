import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.doneAnimation ? 'animate' : ''}`}>
      <span>{todo.text}</span>
      <div>
        <button className="tick" onClick={() => toggleComplete(todo.id)}>✅</button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>❌</button>
      </div>
      {todo.doneAnimation && <span className="heart">💚</span>}
    </li>
  );
}

export default TodoItem;
