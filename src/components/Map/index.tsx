import { LatLngExpression, LatLngLiteral } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";


// Paths to test line
  /* path: [
    { "lat": -7.2187416, "lng": -7.2187416 },
    { "lat": -7.2210817, "lng": -35.9128115 },
    { "lat": -7.2215583, "lng": -35.9124543 },
    { "lat": -7.2257075, "lng": -35.9126302 },
    { "lat": -7.2305008, "lng": -35.8884323 },
  ], */

interface PolylineCoord {
  from: LatLngLiteral,
  to: LatLngLiteral
}
  
const position : LatLngExpression = [-7.218234, -35.913577];

const Map = ({ coordinates }) => {
  const [lineCoords, setLineCoords] = useState<PolylineCoord[]>([]);

  useEffect(()=>{
    if (coordinates.length > 1){
      const fromCoordinates = coordinates[coordinates.length - 2]
      const toCoordinates = coordinates[coordinates.length - 1];
      const newPolyline : PolylineCoord = { from : fromCoordinates, to: toCoordinates };
      setLineCoords([...lineCoords, newPolyline]);
    }
  }, [coordinates] );

  return (
    <MapContainer
      style={{ height: "100vh", width: "100vh" }}
      center={position}
      zoom={15}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.218234, -35.913577]}>
          <Popup>
            Length: {coordinates.length}
          </Popup>
        </Marker>

         {lineCoords.map(({ from, to }, index) => {
            return <Polyline key={index} positions={[
              [from.lat, from.lng], [to.lat, to.lng],
            ]} color={'red'} />
          })}
    </MapContainer>  
  );
}

export default Map;