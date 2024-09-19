// Import CSS
import "../styles/DetailPage.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import ModalMap from "../components/ModalMap/ModalMap.jsx";

function DetailPage(props) {
  const { id } = useParams();
  const [details, setDetails] = useState(null); // State pour les détails

  useEffect(() => {
    // Fonction asynchrone pour récupérer les détails
    const fetchDetails = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/field/" + id);
        const data = await response.json();

        // Met à jour les détails dans le state
        setDetails({
          disabled_acces: data.field.disabled_acces,
          transport_acces: data.field.transport_acces,
          sanitary: data.field.sanitary,
          lighting: data.field.lighting,
          shower: data.field.shower,
          web_link: data.field.web_link,
          adress: data.adress.adress,
          coordinate: data.adress.coordinate,
          observation_1: data.field.observation_1,
          observation_2: data.field.observation_2,
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
      }
    };

    fetchDetails();
  }, [id]);

  // Si les détails ne sont pas encore chargés, afficher un message de chargement
  if (!details) {
    return <div>Chargement des détails...</div>;
  }

  const champsDétails = [
    'Type de terrain',
    'Accès en transports',
    'Accès handicapé',
    'Sanitaires',
    'Douches',
    'Éclairage',
    'Site Web',
    'Adresse',
    //'Département',
    //'Région',
    'Coordonnées GPS',
    'Observations'
  ];

  const details2 = {
    'Type de terrain': 'Terrain de sport', // Ajouter si nécessaire
    'Accès en transports': details.transport_acces === 1 ? "oui" : "non",
    'Accès handicapé': details.disabled_acces === 1 ? "oui" : "non",
    'Sanitaires': details.sanitary === 1 ? "oui" : "non",
    'Douches': details.shower === 1 ? "oui" : "non",
    'Éclairage': details.lighting === 1 ? "oui" : "non",
    'Site Web': details.web_link === "" ? "Non renseigné" : details.web_link,
    'Adresse': details.adress || "Non renseigné",
    'Coordonnées GPS': details.coordinate || "Non renseigné",
    'Observations': (details.observation_1 === "" && details.observation_2 === "") 
      ? "Aucune observation" 
      : details.observation_1 + " " + details.observation_2,
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container-details">
          <div className="image">
            <img
              src="/Img/Parc-De-Paris9.jpg"
              alt="Person running"
              style={{ width: "800px", height: "300px", objectFit: "cover", margin: "5px", borderRadius: "8px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div className="description">
            <div className="header">
              <div className="name">Parc de Paris 9</div>
              <Button text="Carte" icon={"faLocationDot"} />
            </div>
            <div className="details">
              {champsDétails.map((champ) => (
                <div className="detail" key={champ}>
                  <span className="champ">{champ} : </span>
                  <span>{details2[champ]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map">
            <ModalMap latitude="48.8798" longitude="2.3377" place_name="Parc de Paris 9" id_place={id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailPage;
