// Import CSs
import "../styles/ResultPage.scss";

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning, faLocationDot, faBus, faWheelchairMove, faShower, faRestroom, faLightbulb } from "@fortawesome/free-solid-svg-icons";

// Import componants
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import ModalMap from "../components/ModalMap/ModalMap";

// Start Return View
function ResultPage(props) {

  // Type of url sent http://localhost:5173/result?city=1775&fields=[16,12]

  const location = useLocation(); // Object with URL
  const [idLocation, setLoc] = useState(null); // id location
  const [idsSports, setFields] = useState([]); // List of type of field
  const typeOfLocation = location.search.split("=")[0].replace("?", "");

  useEffect(() => {
    // Récupération des query params
    const searchParams = new URLSearchParams(location.search);
    // Récupérer la ville et les types de terrain

    if (searchParams.has("city_id")) {
      const cityParam = searchParams.get("city");
      setLoc(cityParam);
    }

     // si regions est présent dans les query params, on le récupère
    if (searchParams.has("region_id")) {
      const regionsParam = searchParams.get("regions");
      setLoc(regionsParam);
    }

    // si departements est présent dans les query params, on le récupère
    if (searchParams.has("departement_id")) {
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

  // Fech data from Api
  // Start Get Sports Type from API
  // Futur URL endpoint
  // http://127.0.0.1:8000/api/fields?type_sports_field_id[]=12&city_id=43&type_sports_field_id[]=0
  let [sportsType, setSportsType] = useState([]);
  // Connect to Api 
  const urlToApi = `http://127.0.0.1:8000/api/fieldslist?${typeOfLocation}=${idLocation}&type_sports_field_id=${idsSports[0]}`;
  console.log("URL to API", urlToApi);
  useEffect(() => {
        fetch(urlToApi)
        .then((response) => response.json())
        .then((data) => {
            setSportsType(data)
        });
    }, []);
  // End Get Sport Type from API
  console.log("My sportsType", sportsType);

  // Array of Result
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

  // Filter Button actived logic
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
    // console.log("use");
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
