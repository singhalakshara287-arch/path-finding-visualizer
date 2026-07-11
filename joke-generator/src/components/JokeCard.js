import React, { useState } from 'react';
import '../styles/JokeCard.css';

function JokeCard({ joke, onNext, onCopy, onShare }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="joke-card-container">
      <div
        className={`joke-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="joke-card-inner">
          <div className="joke-card-front">
            <p className="joke-text">{joke.text}</p>
            <p className="joke-hint">Click to reveal 👆</p>
          </div>
          <div className="joke-card-back">
            <p className="joke-text">{joke.text}</p>
            <p className="joke-type">Type: {joke.type}</p>
            <p className="joke-time">{joke.timestamp}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="joke-actions">
        <button className="action-btn copy-btn" onClick={onCopy} title="Copy">
          📋 Copy
        </button>
        <button className="action-btn share-btn" onClick={onShare} title="Share">
          📤 Share
        </button>
        <button className="action-btn next-btn" onClick={onNext} title="Next Joke">
          ➡️ Next
        </button>
      </div>
    </div>
  );
}

export default JokeCard;
