import React from 'react';
import './stylesheet.css';
import Options from './Options';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <div className="score-board">
        <div id="user-label" className="player-tag">You</div>

        <div id="computer-label" className="player-tag">Comp</div>
        <spand id="user-score">0</spand> : <span id="computer-score">0</span>
      </div>
      <div className="result">
        <p>Paper covers rock. You win!</p>

      </div>
      <Options />
      <p id="action-message">Let's start!</p>
    </div>
  );
}

export default App;
