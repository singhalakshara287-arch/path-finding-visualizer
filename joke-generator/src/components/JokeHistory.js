import React from 'react';
import '../styles/JokeHistory.css';

function JokeHistory({ jokes, onClear, onDelete, onClose }) {
  return (
    <div className="history-overlay">
      <div className="history-modal">
        <div className="history-header">
          <h2>📚 Joke History</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {jokes.length === 0 ? (
          <div className="history-empty">
            <p>No jokes yet. Get started! 🚀</p>
          </div>
        ) : (
          <>
            <div className="history-list">
              {jokes.map((joke, index) => (
                <div key={joke.id} className="history-item">
                  <div className="history-item-content">
                    <span className="history-number">{index + 1}</span>
                    <div className="history-item-text">
                      <p className="history-joke">{joke.text.substring(0, 100)}...</p>
                      <small className="history-meta">
                        <span className="history-type">{joke.type}</span>
                        <span className="history-time">{joke.timestamp}</span>
                      </small>
                    </div>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(joke.id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="history-footer">
              <button className="clear-all-btn" onClick={onClear}>
                🗑️ Clear All History
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default JokeHistory;
