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
  // Open the modal for the type of terrain
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

  ////

  // Use the navigate function from the react-router-dom package
  const navigate = useNavigate();

  const resultPage = () => {
    const id = 123;
    const ids = [1, 2, 3, 4];
    navigate(`/result/${id}/${JSON.stringify(ids)}`);
  };




  // Start Get Sports Type from API
  let [sportsType, setSportsType] = useState([]);

  useEffect(() => {
        fetch("http://127.0.0.1:8000/api/typesportsfield")
        .then((response) => response.json())
        .then((data) => {
            setSportsType(data)
        });
    }, []);
  // End Get Sport Type from API
  
  ////

  /// Fetch the data from the API

  let [localisation, setLocalisation] = useState([]);
  const [filteredVilles, setFilteredVilles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocalisation([]);
        setFilteredVilles([]);

        data.forEach((region) => {
          region.type = "region";
          region.name = region.region_name;

          setLocalisation((localisation) => [...localisation, region]);
          setFilteredVilles((filteredVilles) => [...filteredVilles, region]);

          region.departments.forEach((department) => {
            department.type = "department";
            department.name = department.department_name;

            setFilteredVilles((filteredVilles) => [...filteredVilles, department]);
            setLocalisation((localisation) => [...localisation, department]);
            department.cities.forEach((city) => {
              city.type = "city";
              city.name = city.city_name;

              setFilteredVilles((filteredVilles) => [...filteredVilles, city]);
              setLocalisation((localisation) => [...localisation, city]);
            });
          });
        });
      });
  }, []);

  console.log("localisation", localisation);

  ////

  // Search for a city, a region or a department

  const searchLoc = (e) => {
    setFilteredVilles(
      localisation.filter((localisation) => {
        // if (localisation.type === "city") {
        //   return localisation.city_name.toLowerCase().startsWith(e.target.value.toLowerCase());
        // } else if (localisation.type === "department") {
        //   return localisation.department_name.toLowerCase().startsWith(e.target.value.toLowerCase());
        // } else {
        //   return localisation.region_name.toLowerCase().startsWith(e.target.value.toLowerCase());
        // }
        return localisation.name.toLowerCase().startsWith(e.target.value.toLowerCase());
      })
    );

    console.log("searchloc", filteredVilles);
  };

  ///  Select the terrain

  const selectTerrain = (key) => {
    return () => {
      console.log("key add", key);
    };
  };

  ///

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
                    <Checkbox key={sport.type_sports_field_id} label={sport.type_of_sport_field} />

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
                    {filteredVilles
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((localisation, index) => (
                        <div className="ListeDeroulanteItem" data-key={localisation.name} key={index}>
                          <p>{localisation.name}</p>
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
