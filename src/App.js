import React from 'react';
import './App.css';
import { ConnectedTerminal } from './Terminal';
import 'typeface-roboto-mono';
import './home/index';
import { Window } from './Window';

function App() {
  return (
    <div className="App">
      <Window>
        <ConnectedTerminal blinkableCursor={true} />
      </Window>
    </div>
  );
}

export default App;
