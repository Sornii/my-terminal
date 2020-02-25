import React from 'react';
import './App.css';
import { ConnectedTerminal } from './Terminal';
import 'typeface-roboto-mono';
import { Window } from './Window';

function App() {
  return (
    <div className="App">
      <Window>
        <ConnectedTerminal blinkableCursor />
      </Window>
    </div>
  );
}

export default App;
