import "./MapWithMarker.scss";
import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";

// Style de la carte (dimensions)
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Centrer la carte sur Paris
const center = {
  lat: 48.8566,
  lng: 2.3522,
};

const MapWithMarker = ({ id_place, place_name, longitude, latitude }) => {
  // Gérer l'ouverture de l'InfoWindow
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Centrer la carte sur la localisation
  const center = {
    lat: latitude,
    lng: longitude,
  };

  // Charge la carte avec le hook useLoadScript
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAmc1pqL90q8E_DO8GojSiiwuq8tbH5VyI", // Remplace par ta clé API
  });

  // Fonction appelée quand on clique sur un marker
  const handleMarkerClick = useCallback((place) => {
    setSelectedPlace(place);
  }, []);

  // Si la carte ne charge pas, afficher un message d'erreur ou de chargement
  if (loadError) return <div>Erreur de chargement de la carte</div>;
  if (!isLoaded) return <div>Chargement...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={{
      mapTypeControl:false
    }}>
      {/* Marker pour Paris */}
      <Marker
        position={center}
        onClick={() =>
          handleMarkerClick({ lat: latitude, lng: longitude, name: place_name, id: id_place })
        }
      />

      {/* Si un lieu est sélectionné, afficher l'InfoWindow */}
      {selectedPlace && (
        <InfoWindow
          position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <p>This Name ID is: {selectedPlace.id}</p>
            <p>This Place Name is: {selectedPlace.name}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapWithMarker;
