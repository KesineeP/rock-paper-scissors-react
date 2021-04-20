import React, { useState } from 'react';
import './stylesheet.css';
import Options from './Options';


const options = [['rock', '✊'], ['paper', '🖐'], ['scissors', '✌️']];



function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setcomputerScore] = useState(0);

  function computerPlay() {
    const number = Math.random() * 3;
    if (number <= 1) {
      return 'Rock';
    } else if (number >= 2) {
      return 'Scissors';
    } else {
      return 'Paper';
    }
  }
  const onClickOptions = (name) => {
    console.log('Option clicked!')
  }
  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <div className="score-board">
        <div id="user-label" className="player-tag">You</div>

        <div id="computer-label" className="player-tag">Comp</div>
        <span id="user-score">{playerScore}</span> : <span id="computer-score">{computerScore}</span>
      </div>
      <div className="result">
        <p>Paper covers rock. You win!</p>

      </div>
      <div className="options">
        {options.map((name) =>
          <Options
            id={name[0]}
            name={name[1]}
            onClickOptions={onClickOptions}
          />
        )}


      </div>
      <p id="action-message">Let's start!</p>
    </div>
  );
}

export default App;
