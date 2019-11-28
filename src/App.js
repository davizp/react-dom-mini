import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [color, setColor] = useState('red');

  useEffect(() => {
    let index = 0;
    const colors = ['red', 'green', 'blue'];

    const interval = setInterval(() => {
      index++;

      setColor(colors[index % 3]);

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App" onClick={() => setShowLogo(show => !show)}>
      <header className="App-header">
        {
          showLogo &&
          <img src={logo} className="App-logo" alt="logo" />
        }
        <p bgColor={color}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
