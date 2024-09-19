import "../styles/HomePage.scss";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPersonRunning, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Checkbox from "../components/Checkbox/Checkbox";

function HomePage() {
  const openModal = () => {
    if (document.querySelector(".modal").classList.contains("hidden")) {
      document.querySelector(".modal").classList.remove("hidden");
      document.querySelector(".modal2").classList.add("hidden");
      document.querySelector(".search-bar").classList.add("disable");
      document.querySelector(".type").classList.add("active");
      document.querySelector(".type2").classList.remove("active");
    } else {
      document.querySelector(".modal").classList.add("hidden");
      document.querySelector(".search-bar").classList.remove("disable");
      document.querySelector(".type").classList.remove("active");
    }
  };

  const openModal2 = () => {
    if (document.querySelector(".modal2").classList.contains("hidden")) {
      document.querySelector(".modal2").classList.remove("hidden");
      document.querySelector(".modal").classList.add("hidden");
      document.querySelector(".search-bar").classList.add("disable");
      document.querySelector(".type2").classList.add("active");
      document.querySelector(".type").classList.remove("active");
    } else {
      document.querySelector(".modal2").classList.add("hidden");
      document.querySelector(".search-bar").classList.remove("disable");
      document.querySelector(".type2").classList.remove("active");
    }
  };

  // Start Get Sports Type from API
  let [sportsType, setSportsType] = useState([]);
  // Connect to Api
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/typesportsfield")
      .then((response) => response.json())
      .then((data) => {
        setSportsType(data);
      });
  }, []);
  // End Get Sport Type from API

  // Start Make table of selected sports

  const [selectedSportType, setSelectedSportType] = useState([]); // Stocker les types de sport sélectionnés
  const [locId, setLocId] = useState(null); // Stocker l'ID de la localisation sélectionnée
  const [locType, setLocType] = useState(null);

  const clickSelectedSportType = (idSportType) => {
    setSelectedSportType((prevState) => {
      if (prevState.includes(idSportType)) {
        return prevState.filter((value) => value !== idSportType);
      } else {
        return [...prevState, idSportType];
      }
    });

  };
  // End Make table of selected sports

  const [localisations, setLocalisations] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length >= 3) {
      fetch(`http://127.0.0.1:8000/api/location?query=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setLocalisations([]);
          const cities = (data.cities || []).map((city) => ({ ...city, type: "city" }));
          const regions = (data.regions || []).map((region) => ({ ...region, type: "region" }));
          const departments = (data.departments || []).map((department) => ({ ...department, type: "department" }));
          const combinedLocalisations = [...cities, ...regions, ...departments];
          setLocalisations(combinedLocalisations);
        })
        .catch((error) => console.error("Erreur lors de l'appel à l'API:", error));
    } else {
      setLocalisations([]);
    }
  }, [query]);

  const searchLoc = (e) => {
    setQuery(e.target.value);
  };

  const saveLoc = (e, type, id) => {
    setLocId(id);
    setLocType(type);

    // ajouter la classe choose à l'élément cliqué et la retirer des autres
    const items = document.querySelectorAll(".ListeDeroulanteItem");
    items.forEach((item) => {
      item.classList.remove("choose");
    });

    e.currentTarget.classList.add("choose");

  };

  const navigate = useNavigate();

  // function to send Url to next page
  const resultPage = () => {
    const ids = selectedSportType;

    if (locId === null || locType === null) {
      alert("Veuillez choisir une ville");
      return;
    }

    if (ids.length === 0) {
      alert("Veuillez choisir un type de terrain");
      return;
    }
    navigate(`/result?${locType}=${locId}&fields=${JSON.stringify(ids)}`);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="left-image">
          <img src="/Img/femme_sportif_orange.png" alt="Femme qui court" />
        </div>
        <div className="right-description">
          <h1>Bienvenue sur Proxima Sport !</h1>
          <form className="search-bar">
            <div className="type" onClick={openModal}>
              <FontAwesomeIcon icon={faPersonRunning} />
              <p className="label">Type de terrain</p>
            </div>
            <div className="modal hidden">
              <div className="modal-content">
                <div className="col1">
                  {sportsType &&
                    sportsType.map((sport, index) => (
                      <Checkbox
                        key={sport.type_sports_field_id}
                        dataKey={sport.type_sports_field_id}
                        label={sport.type_of_sport_field}
                        action={() => clickSelectedSportType(sport.type_sports_field_id)}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="type2" onClick={openModal2}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="label">Ville</p>
            </div>

            <div className="modal2 hidden">
              <div className="modal2-content">
                <input type="text" onChange={(e) => searchLoc(e)} placeholder="Rechercher une ville, une région..." />
                <div className="ListeDeroulante">
                  <div className="ListeDeroulanteContent">
                    {localisations.map((loc, index) => (
                      <div className="ListeDeroulanteItem" key={loc.id} data-key={loc.id} onClick={(e) => saveLoc(e, loc.type, loc.id)}>
                        <p>{loc.type === "city" ? loc.city_name : loc.type === "region" ? loc.region_name : loc.department_name}</p>
                        {index !== localisations.length - 1 && <div className="spaceLine"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Button action={resultPage} text={"Rechercher"} />
          </form>
          <p className="description">
            Trouvez facilement des complexes sportifs en France avec FranceTerrainsSport. Que ce soit un terrain de foot, une salle de sport ou un court de
            tennis, localisez rapidement l’endroit idéal pour vos activités préférées grâce à notre interface simple et des infos à jour.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
