import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button variant='contained'>Click Me</Button>
    </div>
  );
}

export default App;
