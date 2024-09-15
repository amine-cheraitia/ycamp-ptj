import "../styles/HomePage.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
    fetch("/result_for_front_dev_test.json")
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

  console.log(Object.keys(terrains).length);

  // la longueur du tableau
  console.log(Object.keys(terrainUnique).length);

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="left-image">
          <img src="/femme-sportif-qui-court.webp" alt="Terrain de foot" />
        </div>
        <div className="right-description">
          <h1>Bienvenue sur Proxima Sport !</h1>
          <form className="search-bar">
            <div className="type" onClick={openModal}>
              <img src="/perso_running.png" height={"24px"} alt="Sport" />
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
              <img src="/marker.png" height={"24px"} alt="Marker" />
              <p className="label">Ville</p>
            </div>

            <div className="modal2 hidden">
              <div className="modal2-content">
                <input
                  type="text"
                  placeholder="Rechercher une ville, une région..."
                />
                <div className="ListeDeroulante">
                  <div className="ListeDeroulanteContent">
                    <div className="ListeDeroulanteItem">
                      <p>Paris</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Lyon</p>
                      <div className="spaceLine"></div>
                    </div>

                    <div className="ListeDeroulanteItem">
                      <p>Marseille</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Lille</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Bordeaux</p>
                      <div className="spaceLine"></div>
                    </div>

                    <div className="ListeDeroulanteItem">
                      <p>Paris</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Lyon</p>
                      <div className="spaceLine"></div>
                    </div>

                    <div className="ListeDeroulanteItem">
                      <p>Marseille</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Lille</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Bordeaux</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Paris</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Lyon</p>
                      <div className="spaceLine"></div>
                    </div>

                    <div className="ListeDeroulanteItem">
                      <p>Marseille</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Lille</p>
                      <div className="spaceLine"></div>
                    </div>
                    <div className="ListeDeroulanteItem">
                      <p>Bordeaux</p>
                    </div>
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
