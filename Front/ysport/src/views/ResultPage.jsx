import "../styles/ResultPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning, faLocationDot, faBus, faWheelchairMove, faShower, faRestroom, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Thumbnail from "../components/Thumbnail/Thumbnail";

function ResultPage(props) {
  const { id, ids } = useParams(); // Récupère les paramètres de l'URL
  const idsArray = JSON.parse(ids);

  const navigate = useNavigate();

  const detailPage = () => {
    const id = 123; // ID unique
    navigate(`/detail/${id}`);
  };

  const activeFilter = (icon) => {
    console.log(icon);

    if (document.querySelector(`.${icon}`).classList.contains("active")) {
      document.querySelector(`.${icon}`).classList.remove("active");
      return;
    } else {
      document.querySelector(`.${icon}`).classList.add("active");
    }
  };

  const goToDetails = (id) => {
    navigate(`/detail/${id}`);
  }

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

          <div className="filter">
            <div className="filter-item faBus" onClick={() => activeFilter("faBus")}>
              <FontAwesomeIcon icon={faBus} />
              <p>Accès en transport</p>
            </div>
            <div className="filter-item faWheelchairMove" onClick={() => activeFilter("faWheelchairMove")}>
              <FontAwesomeIcon icon={faWheelchairMove} />
              <p>Accès handicapé</p>
            </div>
            <div className="filter-item faShower" onClick={() => activeFilter("faShower")}>
              <FontAwesomeIcon icon={faShower} />
              <p>Douches</p>
            </div>
            <div className="filter-item faRestroom" onClick={() => activeFilter("faRestroom")}>
              <FontAwesomeIcon icon={faRestroom} />
              <p>Sanitaires</p>
            </div>
            <div className="filter-item faLightbulb" onClick={() => activeFilter("faLightbulb")}>
              <FontAwesomeIcon icon={faLightbulb} />
              <p>Éclairage</p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <p>ResultPage</p> &nbsp;
          <p>id: {id}</p> &nbsp;
          <p>ids: {idsArray.join(", ")}</p> */}

          <div className="grid">

          <Thumbnail  label="Terrain de foot" actionButton={() =>goToDetails(3)} />
          <Thumbnail  label="Terrain de basket" />
          <Thumbnail  label="Terrain de foot" />
          <Thumbnail  label="Terrain de basket" />

          <Thumbnail  label="Terrain de foot" />
          <Thumbnail  label="Terrain de basket" />
          <Thumbnail  label="Terrain de foot" />
          <Thumbnail  label="Terrain de basket" />
          </div>


          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
          {/* <button onClick={detailPage}>Go to Button</button> */}
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default ResultPage;
