import "./MapResult.scss";
import React, { useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ['places'];

function MapResult({ id_place, place_name, longitude, latitude }) {
  
  const api_key = "AIzaSyAmc1pqL90q8E_DO8GojSiiwuq8tbH5VyI"
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api_key,
    libraries,
  });

  const mapRef = useRef(null);

  const handleMarkerClick = (event) => {
      if (document.querySelector(".modal-result-map").classList.contains("hidden")) {
        document.querySelector(".modal-result-map").classList.remove("hidden");
      } else {
        document.querySelector(".modal-result-map").classList.add("hidden");
      }
  };

  if (!isLoaded) return <div>Chargement de la carte...</div>;

  return (
    <div class="GoogleMap">
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={{ lat: latitude, lng: longitude }}
        zoom={12}
        mapContainerClassName="map-container"
        options={{
          // Autres options de la carte
        }}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        <Marker
          position={{ lat: latitude, lng: longitude }}
          onClick={handleMarkerClick}
        />
        {/* InfoWindow sera ajoutée à l'ouverture */}
      </GoogleMap>
      <div class="modal-result-map hidden">Test</div>
    </div>
  );
}

export default MapResult;