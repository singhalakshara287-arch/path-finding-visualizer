import React, { useState, useEffect } from 'react';
import './styles/App.css';
import JokeCard from './components/JokeCard';
import JokeHistory from './components/JokeHistory';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jokeHistory, setJokeHistory] = useState(() => {
    const saved = localStorage.getItem('jokeHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [jokeType, setJokeType] = useState('any'); // any, general, knock-knock, programming
  const [showHistory, setShowHistory] = useState(false);

  // Save joke history to localStorage
  useEffect(() => {
    localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
  }, [jokeHistory]);

  // Fetch joke from API
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      let apiUrl = 'https://official-joke-api.appspot.com/random_joke';

      // Different API endpoints based on joke type
      if (jokeType === 'general') {
        apiUrl = 'https://v2.jokeapi.dev/joke/Any?format=txt';
      } else if (jokeType === 'knock-knock') {
        apiUrl = 'https://official-joke-api.appspot.com/jokes/knock-knock/random';
      } else if (jokeType === 'programming') {
        apiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
      }

      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }

      let data = await response.json();
      
      // Format joke based on API response
      let formattedJoke;
      if (jokeType === 'general') {
        formattedJoke = data; // Already formatted as text
      } else {
        // Format from official-joke-api
        if (Array.isArray(data)) {
          data = data[0];
        }
        formattedJoke = data.setup ? `${data.setup}\n\n${data.punchline}` : data.joke;
      }

      const jokeObj = {
        id: Date.now(),
        text: formattedJoke,
        type: jokeType,
        timestamp: new Date().toLocaleString(),
      };

      setJoke(jokeObj);
      // Add to history (keep only last 20)
      setJokeHistory((prev) => [jokeObj, ...prev].slice(0, 20));
    } catch (err) {
      setError('Could not fetch a joke. Please try again!');
      console.error('Error fetching joke:', err);
    } finally {
      setLoading(false);
    }
  };

  // Copy joke to clipboard
  const copyToClipboard = () => {
    if (joke) {
      navigator.clipboard.writeText(joke.text);
      alert('Joke copied to clipboard!');
    }
  };

  // Share joke
  const shareJoke = () => {
    if (joke && navigator.share) {
      navigator.share({
        title: '😂 Random Joke',
        text: joke.text,
      });
    } else if (joke) {
      copyToClipboard();
    }
  };

  // Clear history
  const clearHistory = () => {
    setJokeHistory([]);
  };

  // Delete from history
  const deleteFromHistory = (id) => {
    setJokeHistory((prev) => prev.filter((j) => j.id !== id));
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>😂 Random Joke Generator</h1>
        <p className="subtitle">Get a laugh with random jokes!</p>
      </div>

      <div className="app-content">
        {/* Joke Type Selector */}
        <div className="joke-type-selector">
          <label htmlFor="jokeType">Select Joke Type:</label>
          <select
            id="jokeType"
            value={jokeType}
            onChange={(e) => setJokeType(e.target.value)}
            className="type-select"
          >
            <option value="any">🎭 Any Joke</option>
            <option value="general">🎪 General Joke</option>
            <option value="knock-knock">🚪 Knock-Knock</option>
            <option value="programming">💻 Programming Joke</option>
          </select>
        </div>

        {/* Error Message */}
        {error && <ErrorMessage message={error} />}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner />}

        {/* Joke Card */}
        {!loading && joke && (
          <JokeCard
            joke={joke}
            onNext={fetchJoke}
            onCopy={copyToClipboard}
            onShare={shareJoke}
          />
        )}

        {/* Get Joke Button */}
        <button
          className="get-joke-btn"
          onClick={fetchJoke}
          disabled={loading}
        >
          {loading ? 'Loading...' : joke ? '😂 Next Joke' : '🎉 Get a Joke!'}
        </button>

        {/* History Button */}
        <button
          className="history-btn"
          onClick={() => setShowHistory(!showHistory)}
        >
          📚 History ({jokeHistory.length})
        </button>
      </div>

      {/* Joke History */}
      {showHistory && (
        <JokeHistory
          jokes={jokeHistory}
          onClear={clearHistory}
          onDelete={deleteFromHistory}
          onClose={() => setShowHistory(false)}
        />
      )}
    </div>
  );
}

export default App;
