import React from 'react';
import Buttons from './Buttons';
import { Container } from '@material-ui/core';
function App() {
  return (
    <Container className="App">
      <h1 className="App-header">
        Rock Paper Scissors
        </h1>
      <div className="ui two column divied grid">
        <div className="row">
          <div className="column">
            <h3>Player: Robot</h3>
            <Buttons />
          </div>
          <div className="column">
            <h3>Player: John</h3>
            <Buttons />
          </div>

        </div>
      </div>
    </Container>
  );
}

export default App;
