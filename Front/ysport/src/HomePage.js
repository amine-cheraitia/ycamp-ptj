import "./HomePage.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Checkbox from "./components/Checkbox/Checkbox";

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

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="left-image">
          <img src="/femme-sportif-qui-court.webp" alt="Terrain de foot" />
        </div>
        <div className="right-description">
          <h1>Bienvenue sur FranceTerrainsSport !</h1>
          <form className="search-bar">
            <div className="type" onClick={openModal}>
              <img src="/perso_running.png" height={"24px"} alt="Sport" />
              <p className="label">Type de terrain</p>
            </div>
            <div className="modal hidden">
              <div className="modal-content">
                <div className="col1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <Checkbox key={i} />
                  ))}
                </div>
                <div className="col2">
                  {Array.from({ length: 10 }, (_, i) => (
                    <Checkbox key={i} />
                  ))}
                </div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="type2" onClick={openModal2}>
              <img src="/marker.png" height={"24px"} alt="Marker" />
              <p className="label">Ville</p>
            </div>

            <div className="modal2 hidden">
              <div className="modal-content">
                <input type="text" placeholder="Rechercher une ville" />
                
              </div>
            </div>
            <button type="submit">Rechercher</button>
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
