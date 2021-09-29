import { LatLngExpression} from "leaflet";
import React, { useEffect } from "react";
import { MapContainer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat"
import useCoordinates, { Coordinates } from "../../hooks/useCoordinates";
  
const position : LatLngExpression = [-7.218234, -35.913577];

const HeatMapComponent = ({ coordinates }) => {
  const map = useMap();  
  const heatMap = L.heatLayer([]).addTo(map);

  useEffect(()=>{
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if ( coordinates.length > 0){
      heatMap.addLatLng(coordinates[coordinates.length - 1])
    }
  }, [coordinates] );
  return null;
}

const HeatMap = () => {
  const coordinates: Coordinates[] = useCoordinates();
  return (
    <MapContainer style={{ height: "100vh", width: "100vh" }}
                  center={position} zoom={13}>
      <Marker position={[-7.218234, -35.913577]}>
        <Popup>
          Total iterations: {coordinates.length}
        </Popup>
      </Marker>
      <HeatMapComponent coordinates={coordinates}/>
    </MapContainer>
  )
}

export default HeatMap;
