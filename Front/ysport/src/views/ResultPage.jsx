import "../styles/ResultPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning, faLocationDot, faBus, faWheelchairMove, faShower, faRestroom, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Thumbnail from "../components/Thumbnail/Thumbnail";

function ResultPage(props) {
  const { id, ids } = useParams();
  const idsArray = JSON.parse(ids);

  const navigate = useNavigate();

  const activeFilter = (icon) => {

    if (document.querySelector(`.${icon}`).classList.contains("active")) {
      document.querySelector(`.${icon}`).classList.remove("active");
      return;
    } else {
      document.querySelector(`.${icon}`).classList.add("active");
    }
  };

  const goToDetails = (id) => {
    navigate(`/detail/${id}`);
  };

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
    },
    {
      id: 2,
      label: "Terrain de basket",
    },
    {
      id: 3,
      label: "Terrain de foot",
    },
    {
      id: 4,
      label: "Terrain de basket",
    },
    {
      id: 5,
      label: "Terrain de foot",
    },
    {
      id: 6,
      label: "Terrain de basket",
    },
    {
      id: 7,
      label: "Terrain de foot",
    },
    {
      id: 8,
      label: "Terrain de basket",
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
              <Thumbnail key={terrain.id} label={terrain.label} actionButton={() => goToDetails(terrain.id)} />
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
