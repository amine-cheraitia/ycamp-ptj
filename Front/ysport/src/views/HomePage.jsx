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

  const navigate = useNavigate();

  const resultPage = () => {
    const id = 123; // ID unique
    const ids = [1, 2, 3, 4]; // Exemple d'un tableau d'IDs
    navigate(`/result/${id}/${JSON.stringify(ids)}`);
  };

  // récupérer la liste des terrains de sport à partir du json result_for_front_dev_test.json du dossier public
  let [terrains, setTerrains] = useState([]);
  useEffect(() => {
    fetch("/Json/result_for_front_dev_test.json")
      .then((response) => response.json())
      .then((data) =>
        
        setTerrains(
          // nettoyer les terrains de sport pour retirer les doublons
          data.type_of_sport_field,
        ),
      );
  }, []);

  // console.log(terrains);

  const terrainUnique = {};

  // retirer les doublons
  Object.keys(terrains).forEach((key) => {
    // console.log(key, terrains[key]);
    // si le terrain n'est pas déjà dans le tableau
    if (!terrainUnique[terrains[key]]) {
      // ajouter le terrain au tableau
      terrainUnique[terrains[key]] = terrains[key];
    }
  });

  const villes = {
    Paris: "Paris",
    Lyon: "Lyon",
    Marseille: "Marseille",
    Lille: "Lille",
    Bordeaux: "Bordeaux",
    Toulouse: "Toulouse",
    Nantes: "Nantes",
    Strasbourg: "Strasbourg",
    Montpellier: "Montpellier",
    Rennes: "Rennes",
    Grenoble: "Grenoble",
    Nice: "Nice",
    Toulon: "Toulon",
    Brest: "Brest",
    Angers: "Angers",
  };

  const [filteredVilles, setFilteredVilles] = useState(Object.keys(villes));

 console.log("filter", filteredVilles);




  const searchLoc = (e) => {
    console.log(e.target.value);

    // villesArray = Object.keys(villes).filter((ville) => {
    //   return ville.toLowerCase().includes(e.target.value.toLowerCase());
    // });

    // console.log(villesArray);

    setFilteredVilles(
      Object.keys(villes).filter((ville) => {
        // commence par
        return ville.toLowerCase().startsWith(e.target.value.toLowerCase());
      }),
    );

    console.log(filteredVilles);

    // afficher les villes filtrées


  }

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
                  {
                    // afficher les terrains de sport
                    Object.keys(terrainUnique).map((key, index) => (
                      <Checkbox key={index} label={terrainUnique[key]} />
                    ))
                  }
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
                <input
                  type="text"
                  onChange={(e) =>searchLoc(e)}
                  placeholder="Rechercher une ville, une région..."
                />
                <div className="ListeDeroulante">
                  <div className="ListeDeroulanteContent">

                    {
                      // afficher les villes de filtrées
                      filteredVilles.map((ville, index) => (
                        <div className="ListeDeroulanteItem" key={index}>
                          <p>{ville}</p>
                          {
                            index !== filteredVilles.length - 1 && <div className="spaceLine"></div>
                          }
                          
                        </div>
                      ))
                      
                    }
                    
                  </div>
                </div>
              </div>
            </div>
            <Button action={resultPage} text={"Rechercher"} />
          </form>
          <p className="description">
            Trouvez facilement des complexes sportifs en France avec
            FranceTerrainsSport. Que ce soit un terrain de foot, une salle de
            sport ou un court de tennis, localisez rapidement l’endroit idéal
            pour vos activités préférées grâce à notre interface simple et des
            infos à jour.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
