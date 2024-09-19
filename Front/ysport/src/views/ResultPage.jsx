// Strat Import Model and View
// Mettre toutes les variables ou les fonctions dans le crochet, separé par des virgules
import {test} from "../controllers/ResultController.jsx";

// Import CSs
import "../styles/ResultPage.scss";

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning, faLocationDot, faBus, faWheelchairMove, faShower, faRestroom, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import ModalMap from "../components/ModalMap/ModalMap";


import {result} from "../models/ResultModel.jsx";
// exemple recuperation model
const newResult = result;
console.log("Test ResultModel", newResult) 
// End Import Model and View


// exemple recuperation model
const hello = test();
console.log("Test ResultController", hello) 



function ResultPage(props) {

  // http://localhost:5173/result?city=1775&fields=[16,12]

  const location = useLocation();
  const [loc, setLoc] = useState(null);
  const [fields, setFields] = useState([]);
  const type = location.search.split("=")[0].replace("?", "");


  useEffect(() => {
    // Récupération des query params
    const searchParams = new URLSearchParams(location.search);

    // Récupérer la ville et les types de terrain

    // si city est présent dans les query params, on le récupère
    if (searchParams.has("city")) {
      const cityParam = searchParams.get("city");
      setLoc(cityParam);
    }


     // si regions est présent dans les query params, on le récupère
    if (searchParams.has("regions")) {
      const regionsParam = searchParams.get("regions");
      setLoc(regionsParam);
    }

    // si departements est présent dans les query params, on le récupère
    if (searchParams.has("departements")) {
      const departementsParam = searchParams.get("departements");
      setLoc(departementsParam);
    }
    const fieldsParam = searchParams.get("fields");

    

    if (fieldsParam) {
      // Les champs peuvent être encodés en string, donc on les transforme en tableau
      try {
        const fieldsArray = JSON.parse(fieldsParam);
        setFields(fieldsArray);
      } catch (error) {
        console.error("Erreur lors de l'analyse des champs:", error);
      }
    }
  }, [location]);

  console.log("loc", loc);
  console.log("fields", fields);

  const activeFilter = (icon) => {

    if (document.querySelector(`.${icon}`).classList.contains("active")) {
      document.querySelector(`.${icon}`).classList.remove("active");
      return;
    } else {
      document.querySelector(`.${icon}`).classList.add("active");
    }
  };

  // Start logic for Card button
  const navigate = useNavigate();
  const goToDetails = (id) => {
    navigate(`/detail/${id}`);
    console.log("use");
  };
  const openModalMap = (id) => {
    // Add here componant modalMap
    <ModalMap id={id} />
  };
  // End logic for Card button

  const buttonFilter = {
    faBus: "Accès en transport",
    faWheelchairMove: "Accès handicapé",
    faShower: "Douches",
    faRestroom: "Sanitaires",
    faLightbulb: "Éclairage",
  };

  const iconMap = {
    faBus: faBus,
    faWheelchairMove: faWheelchairMove,
    faShower: faShower,
    faRestroom: faRestroom,
    faLightbulb: faLightbulb,
  };

  const terrains = [
    {
      id: 1,
      label: "Terrain de foot",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 2,
      label: "Terrain de basket",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 3,
      label: "Terrain de foot",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 4,
      label: "Terrain de basket",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 5,
      label: "Terrain de foot",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 6,
      label: "Terrain de basket",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 7,
      label: "Terrain de foot",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
    {
      id: 8,
      label: "Terrain de basket",
      latitude: 48.8566 ,
      longitude: 2.3522,
    },
  ];

  return (
    <div className="App">
      <Header />
      <main className="App-main col">
        <div className="header">
          <div className="search-bar">
            <div className="type">
              <FontAwesomeIcon icon={faPersonRunning} />
              <p className="label">Terrain de football</p>
            </div>

            <div className="separator"></div>
            <div className="type2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="label">Saint-Denis</p>
            </div>
          </div>
          <div className="filters">
            {Object.keys(buttonFilter).map((icon, index) => (
              <div className={`filter-item ${icon}`} key={index} onClick={() => activeFilter(icon)}>
                <FontAwesomeIcon icon={iconMap[icon]} />
                <p>{buttonFilter[icon]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="grid">
            {terrains.map((terrain) => (
              <Thumbnail key={terrain.id} label={terrain.label} openDetails={() => goToDetails(terrain.id)} openModalMap={() => openModalMap(terrain.id)} />
            ))}
          </div>

          <div className="footer">
            <div className="results">
              <p>1 - 8 sur 32 résultats</p>
            </div>
            <div className="pagination">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
            <div className="results">
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResultPage;
