import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const position: [number, number] = [5.9764054, 80.4430096]; // Coordinates for the map center

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <MapContainer
        center={position} // Set the initial map center
        zoom={13} // Initial zoom level
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            Teeny Villa<br />
            This is where we are located.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
