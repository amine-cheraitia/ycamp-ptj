import "./MapWithMarker.scss";
import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import keyData from '../../../Api_key/key.json';


// Recuperer la clé Api
const my_keyData = keyData.apiKey;
// console.log(my_keyData)


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

function MapWithMarker(props){
  // Gérer l'ouverture de l'InfoWindow
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Centrer la carte sur la localisation
    const center = {
      lat: parseFloat(props.latitude),
      lng: parseFloat(props.longitude),
    };
  console.log("Latitude value", typeof(props.latitude))
  // Charge la carte avec le hook useLoadScript
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: my_keyData, // Remplace par ta clé API
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
          handleMarkerClick({ lat: props.latitude, lng: props.longitude, name: props.place_name, id: props.id_place })
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
