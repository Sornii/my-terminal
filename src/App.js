import React from 'react';
import './App.css';
import { ConnectedTerminal } from './Terminal';
import 'typeface-roboto-mono';

function App() {
  return (
    <div className="App">
      <ConnectedTerminal blinkable={false} />
    </div>
  );
}

export default App;
