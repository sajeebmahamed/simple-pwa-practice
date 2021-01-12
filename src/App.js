import React from 'react';
import './App.css';
import video from './videos/demovideo.mp4';

function App() {
  return (
    <div className="App">
      <header>
        <h2> Videos </h2>
      </header>
      <div>
        <video height={200} controls src={video} />
      </div>
    </div>
  );
}

export default App;
