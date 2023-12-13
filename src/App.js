import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Sidebar from './Sidebar';


function App() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const [transcript, setTranscript] = useState('');
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const last = event.results.length - 1;
    const speechResult = event.results[last][0].transcript;
    setTranscript(speechResult);
  };
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };
  const startRecognition = () => {
    recognition.start();
  };
  const stopRecognition = () => {
    recognition.stop();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <div className="Main-content">
          <img className="Child-component App-logo" src={logo} alt="logo" />
          <button className="Child-component" onClick={startRecognition}>Start Recognition</button>
          <button className="Child-component" onClick={stopRecognition}>Stop Recognition</button>
          <p>{transcript}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
