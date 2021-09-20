import React from 'react';
import './App.css';
import Example from './components/Example';
import useCoordinates from './hooks/useCoordinates';


function App() {
  
  const coordinates = useCoordinates();

  return (
    <div className="App">
      <header className="App-header">
        <Example title={"Example test"} />
        {coordinates.map( (coordinate, index) => 
        <div key={index}>
          <div className={"coordinates"}>
            lat: {coordinate?.lat}
          </div>
          <div className={"coordinates"}>
            lnd: {coordinate?.lnd}
          </div>
        </div>
        )}
      </header>
    </div>
  );
}

export default App;
