import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!!!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Master MERN</li>
          <li>Get a Job that I love</li>
          <li>Max out my Borderlands 3 Characters</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
