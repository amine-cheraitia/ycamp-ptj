// Strat Import Model and View
// Mettre toutes les variables ou les fonctions dans le crochet, separé par des virgules
import {test, text} from "../controllers/DetailController.jsx";
// exemple recuperation model
const texttext = text;
const hello = test();
console.log(texttext, hello) 
import {detail} from "../models/DetailModel.jsx";
// exemple recuperation model
const detailFromModel = detail;
console.log("Test DetailModel", detailFromModel) 
// End Import Model and View

// Import CSS
import "../styles/DetailPage.scss";

import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
// import MapWithMarker from "../components/MapWithMarker/MapWithMarker";
import ModalMap from "../components/ModalMap/ModalMap.jsx";

function DetailPage(props) {
  const { id } = useParams();


  let [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/field/" + id)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);

  console.log("details");
  console.log(details);

  const champsDétails = ['Type de terrain', 'Accès en transports', 'Accès handicapé', 'Sanitaires', 'Douches', 'Éclairage', 'Site Web', 'Adresse', 'Département', 'Région', 'Coordonnées GPS', 'Observations'];

  const détails = {
    'Type de terrain': 'Terrain de football',
    'Accès en transports': 'Oui',
    'Accès handicapé': 'Oui',
    'Sanitaires': 'Oui',
    'Douches': 'Oui',
    'Éclairage': 'Oui',
    'Site Web': 'www.paris.fr',
    'Adresse': '9 Rue Ballu, 75009 Paris',
    'Département': 'Seine Saint Denis',
    'Région': 'Île-de-France',
    'Coordonnées GPS': '48.8798° N, 2.3377° E',
    'Observations': 'Parc de 1,5 hectares avec un terrain de football, un terrain de basket et un terrain de handball.'
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container-details">
          <div className="image">
            {/* <PhotoGallery /> */}

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
                  <span>{détails[champ]}</span>
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
