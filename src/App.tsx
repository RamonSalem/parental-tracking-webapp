import React from 'react';
import './App.css';
import HeatMap from './components/HeatMap';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Map coordinates={coordinates}/> */}
        <HeatMap />
      </header>
    </div>
  );
}

export default App;
