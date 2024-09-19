import "../styles/HomePage.scss";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPersonRunning, faLocationDot } from "@fortawesome/free-solid-svg-icons";


import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Checkbox from "../components/Checkbox/Checkbox";

// Strat Import Model and View
// Mettre toutes les variables ou les fonctions dans le crochet, separé par des virgules
import {test} from "../controllers/HomeController.jsx";

import {villes} from "../models/HomeModel.jsx";


// exemple recuperation model
const hello = test();
console.log("Test HomeController", hello) 


// exemple recuperation model
const newVilles = villes;
console.log("Test HomeModel", newVilles) 
// End Import Model and View



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

  const navigate = useNavigate();

  // function to send Url to next page
  const resultPage = () => {
    const id = 123;
    const ids = selectedSportType;
    navigate(`/result/${id}/${JSON.stringify(ids)}`);
  };

  // Start Get Sports Type from API
  let [sportsType, setSportsType] = useState([]);
  // Connect to Api
  useEffect(() => {
        fetch("http://127.0.0.1:8000/api/typesportsfield")
        .then((response) => response.json())
        .then((data) => {
            setSportsType(data)
        });
    }, []);
  // End Get Sport Type from API

  // Start Make table of selected sports
  // Function to redefine array
  function recreateArray(arr, ignoreValue) {
    return arr.filter(function(value) {
        return value !== ignoreValue;
    });
  }

  let selectedSportType = [];
  const setSelectedSportType = (idSportType) => {
    if(selectedSportType.includes(idSportType)){
      selectedSportType = recreateArray(selectedSportType, idSportType)
      console.log("Remove", selectedSportType);
    }else{
      selectedSportType.push(idSportType);
      console.log("Add", selectedSportType);
    }
  };
  // End Make table of selected sports



  const [filteredVilles, setFilteredVilles] = useState(Object.keys(villes));

  // console.log("filter", filteredVilles);

  const searchLoc = (e) => {
    console.log(e.target.value);

    setFilteredVilles(
      Object.keys(filteredVilles).filter((ville) => {
        return ville.toLowerCase().startsWith(e.target.value.toLowerCase());
      })
    );

    console.log(filteredVilles);
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
                  {sportsType && sportsType.map((sport, index) => (
                    <Checkbox dataKey={sport.type_sports_field_id} label={sport.type_of_sport_field} action={() => setSelectedSportType(sport.type_sports_field_id)} />
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
                    {filteredVilles.map((ville, index) => (
                      <div className="ListeDeroulanteItem" key={index}>
                        <p>{ville}</p>
                        {index !== filteredVilles.length - 1 && <div className="spaceLine"></div>}
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
