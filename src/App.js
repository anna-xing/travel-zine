import React from 'react';
import Slider from './components/Slider';
import './App.css';

// Images
import florence05 from './assets/florence05.png';
import florence05_art from './assets/florence05-art.png';

function App() {
  return (
    <div className="App">
      <Slider photo={florence05} art={florence05_art} />
    </div>
  );
}

export default App;
