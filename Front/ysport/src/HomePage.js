import "./HomePage.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Image from "../public/f"

function HomePage() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="left-image">
          {/* <div className="image"></div> */}
          <img src="/femme-sportif-qui-court.png" alt="Terrain de foot" />
          {/* <img src="../public/femme-sportif-qui-court.jpg" alt="Terrain de foot" /> */}
        </div>
        <div className="right-description">
          <h1>Bienvenue sur FranceTerrainsSport !</h1>
          <form className="search-bar">
            <input type="text" placeholder="Rechercher un terrain sportif" />
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
