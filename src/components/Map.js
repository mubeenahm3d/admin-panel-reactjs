import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";

function Map({ center, zoom }) {
  const UpdateMapComponent = () => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };
console.log("center", center, zoom)
  return (
    <StyledMap className="map">
      <MapContainer center={center} zoom={zoom}>
        <UpdateMapComponent />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {showDataOnMap(countries, casesType)} */}
      </MapContainer>
    </StyledMap>
  );
}

const StyledMap = styled.div`
  height: 500px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  .leaflet-container {
    height: 100%;
    border-radius: 12px;
  }

  .info-flag img {
    width: 100px;
    border-radius: 5px;
  }

  .info-name {
    font-size: 20px;
    font-weight: bold;
    color: #555;
  }

  .info-container {
    width: 150px;
  }

  .info-flag {
    height: 90px;
    width: 100%;
    background-size: cover;
    border-radius: 8px;
    border: 1px solid rgb(168, 168, 168);
  }

  .info-confirmed,
  .info-recovered,
  .info-deaths {
    font-size: 16px;
    margin-top: 5px;
  }
`;

export default Map;
