import React, { useState } from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            className="todo-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}
      </div>

      <div className="todo-meta">
        {!todo.completed && <span className="todo-date">{todo.createdAt}</span>}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button
              className="action-btn save-btn"
              onClick={handleEdit}
              title="Save"
            >
              ✓
            </button>
            <button
              className="action-btn cancel-btn"
              onClick={handleCancel}
              title="Cancel"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              className="action-btn edit-btn"
              onClick={() => setIsEditing(true)}
              title="Edit"
            >
              ✏️
            </button>
            <button
              className="action-btn delete-btn"
              onClick={() => onDelete(todo.id)}
              title="Delete"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
