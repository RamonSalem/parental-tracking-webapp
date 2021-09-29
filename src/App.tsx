import React from 'react';
import './App.css';
import Example from './components/Example';
import useCoordinates from './hooks/useCoordinates';
import Map from './components/Map';


function App() {
  
  const coordinates = useCoordinates();
  return (
    <div className="App">
      <header className="App-header">
        <Map coordinates={coordinates}/>

      </header>
    </div>
  );
}

export default App;
