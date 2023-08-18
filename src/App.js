import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(userInput);
    setUserInput('');
  };

  return (
    <div className="App">
      <h1>User Input App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter you Name....
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {displayText && <p>You have entered this value: {displayText}</p>}
    </div>
  );
}

export default App;
