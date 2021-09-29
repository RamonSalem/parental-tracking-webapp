import { useState, useEffect } from "react";

export interface Coordinates {
    lat: Number,
    lng: Number
}

const geolocationOptions = {
  timeout: 60000
}

const errorCallback = (err: GeolocationPositionError) => {
  console.warn('ERR(' + err.code + '): ' + err.message);
}

const useCoordinates = () => {    
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition( position => {
          const newCoordinates: Coordinates = {lat: position.coords.latitude, lng: position.coords.longitude}; 
          setCoordinates( coordinates => [...coordinates, newCoordinates]);
        }, errorCallback, geolocationOptions );
      return () => navigator.geolocation.clearWatch(id);
    }
  }, [])

  return coordinates;
}

export default useCoordinates;
