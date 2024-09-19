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
// import ModalMap from "../components/ModalMap/ModalMap";

// Start Return View
function ResultPage(props) {
  // Type of url sent http://localhost:5173/result?city=1775&fields=[16,12]

  const navigate = useNavigate();

  const location = useLocation(); // Object with URL
  const [idLocation, setLoc] = useState(null); // id location

  const [selectedFilter, setSelectedFilter] = useState([]);

  const [idsSports, setFields] = useState([]); // List of type of field

  const [page, setPage] = useState(null); // Page number

  const [otherFilters, setOtherFilters] = useState({});

  const typeOfLocation = location.search.split("=")[0].replace("?", "");

  // récupération du local storage pour les types de sports
  const sportsType = JSON.parse(localStorage.getItem("sportsType"));

  // selectedLoc du local storage
  const selectedLoc = localStorage.getItem("selectedLoc");

  useEffect(() => {
    // Récupération des query params
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has("transport_acces")) {
      const transportAcces = searchParams.get("transport_acces");
      setOtherFilters((prevState) => {
        return { ...prevState, transport_acces: transportAcces };
      });
    }

    if (searchParams.has("disabled_acces")) {
      const disabledAcces = searchParams.get("disabled_acces");
      setOtherFilters((prevState) => {
        return { ...prevState, disabled_acces: disabledAcces };
      });
    }

    if (searchParams.has("shower")) {
      const shower = searchParams.get("shower");
      setOtherFilters((prevState) => {
        return { ...prevState, shower: shower };
      });
    }

    if (searchParams.has("sanitary")) {
      const sanitary = searchParams.get("sanitary");
      setOtherFilters((prevState) => {
        return { ...prevState, sanitary: sanitary };
      });
    }

    if (searchParams.has("lighting")) {
      const lighting = searchParams.get("lighting");
      setOtherFilters((prevState) => {
        return { ...prevState, lighting: lighting };
      });
    }

    if (searchParams.has("city_id")) {
      const cityParam = searchParams.get("city_id");
      setLoc(cityParam);
    }

    // si regions est présent dans les query params, on le récupère
    if (searchParams.has("region_id")) {
      const regionsParam = searchParams.get("region_id");
      setLoc(regionsParam);
    }

    // si departements est présent dans les query params, on le récupère
    if (searchParams.has("departement_id")) {
      const departementsParam = searchParams.get("departement_id");
      setLoc(departementsParam);
    }
    const fieldsParam = searchParams.get("fields");

    if (searchParams.has("page")) {
      const pageParam = searchParams.get("page");
      setPage(pageParam);
    }

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

  let [sportsResults, setSportsResults] = useState([]);

  useEffect(() => {
    console.log("otherFilters", otherFilters);
    let urlToApi = `http://127.0.0.1:8000/api/fields?${typeOfLocation}=${idLocation}`;

    if (page) {
      urlToApi += `&page=${page}`;
    }
    // http://127.0.0.1:8000/api/fields?type_sports_field_id[]=12&city_id=43&type_sports_field_id[]=0

    idsSports.forEach((id) => {
      urlToApi += `&type_sports_field_id[]=${id}`;
    });

    // Ajout des filtres

    if (otherFilters.transport_acces) {
      urlToApi += `&transport_acces=${otherFilters.transport_acces === "1" ? true : false}`;
    }

    if (otherFilters.disabled_acces) {
      urlToApi += `&disabled_acces=${otherFilters.disabled_acces === "1" ? true : false}`;
    }

    if (otherFilters.shower) {
      urlToApi += `&shower=${otherFilters.shower === "1" ? true : false}`;
    }

    if (otherFilters.sanitary) {
      urlToApi += `&sanitary=${otherFilters.sanitary === "1" ? true : false}`;
    }

    if (otherFilters.lighting) {
      urlToApi += `&lighting=${otherFilters.lighting === "1" ? true : false}`;
    }

    console.log("urlToApi", urlToApi);

    // Fonction asynchrone pour récupérer les détails
    const fetchResults = async () => {
      try {
        const response = await fetch(urlToApi);
        const data = await response.json();

        console.log("My data", data);

        // Met à jour les détails dans le state
        setSportsResults({
          current_page: data.lol.current_page ? data.lol.current_page : data.current_page,
          data: data.lol.data ? data.lol.data : data.data,
          first_page_url: data.lol.first_page_url ? data.lol.first_page_url : data.first_page_url,
          from: data.lol.from ? data.lol.from : data.from,
          last_page: data.lol.last_page ? data.lol.last_page : data.last_page,
          last_page_url: data.lol.last_page_url ? data.lol.last_page_url : data.last_page_url,
          links: data.lol.links   ? data.lol.links : data.links,
          next_page_url: data.lol.next_page_url ? data.lol.next_page_url : data.next_page_url,
          path: data.lol.path ? data.lol.path : data.path,
          per_page: data.lol.per_page ? data.lol.per_page : data.per_page,
          prev_page_url: data.lol.prev_page_url ? data.lol.prev_page_url : data.prev_page_url,
          to: data.lol.to ? data.lol.to : data.to,
          total: data.lol.total ? data.lol.total : data.total,
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
      }
    };

    fetchResults();
  }, [idLocation, idsSports, typeOfLocation, page, otherFilters]);

  let minResult = 0;
  let maxResult = 0;

  if (sportsResults.length === 0) {
    return <div>Chargement des détails...</div>;
  } else {
    minResult = (sportsResults.current_page - 1) * sportsResults.per_page + 1;
    maxResult =
      sportsResults.current_page * sportsResults.per_page > sportsResults.total ? sportsResults.total : sportsResults.current_page * sportsResults.per_page;
  }
  // End Get Sport Type from API

  // Filter Button actived logic
  const activeFilter = (icon) => {
    if (document.querySelector(`.${icon}`).classList.contains("active")) {
      document.querySelector(`.${icon}`).classList.remove("active");
      setSelectedFilter((prevState) => {
        return prevState.filter((value) => value !== icon);
      });
    } else {
      document.querySelector(`.${icon}`).classList.add("active");
      setSelectedFilter((prevState) => {
        return [...prevState, icon];
      });
    }

    console.log("My selectedFilter", selectedFilter);
  };

  // Start logic for Card button

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

  const actionFilter = () => {
    console.log("My selectedFilter", selectedFilter);



    let query = "";

    if (selectedFilter.includes("faBus")) {
      console.log("faBus");
      query += "&transport_acces=1";
    }

    if (selectedFilter.includes("faWheelchairMove")) {
      console.log("faWheelchairMove");
      query += "&disabled_acces=1";
    }

    if (selectedFilter.includes("faShower")) {
      console.log("faShower");
      query += "&shower=1";
    }

    if (selectedFilter.includes("faRestroom")) {
      console.log("faRestroom");
      query += "&sanitary=1";
    }

    if (selectedFilter.includes("faLightbulb")) {
      console.log("faLightbulb");
      query += "&lighting=1";
    }

    navigate(`/result?${typeOfLocation}=${idLocation}&fields=${JSON.stringify(idsSports)}${query}`);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main col">
        <div className="header">
          <div className="search-bar">
            <div className="type">
              <FontAwesomeIcon icon={faPersonRunning} />
              <p
                className="label"
                title={
                  idsSports.length > 0
                    ? sportsType
                        .filter((sport) => idsSports.includes(sport.type_sports_field_id))
                        .map((sport) => sport.type_of_sport_field)
                        .join(", ")
                    : "Type de terrain"
                }
              >
                {idsSports.length > 0
                  ? sportsType
                      .filter((sport) => idsSports.includes(sport.type_sports_field_id))
                      .map((sport) => sport.type_of_sport_field)
                      .join(", ")
                  : "Type de terrain"}
              </p>
            </div>

            <div className="separator"></div>
            <div className="type2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="label" title={selectedLoc ? selectedLoc : "Localisation"}>
                {selectedLoc ? selectedLoc : "Localisation"}
              </p>
            </div>
          </div>
          <div className="filters">
            {Object.keys(buttonFilter).map((icon, index) => (
              <div className={`filter-item ${icon}`} key={index} onClick={() => activeFilter(icon)}>
                <FontAwesomeIcon icon={iconMap[icon]} />
                <p>{buttonFilter[icon]}</p>
              </div>
            ))}

            <div className="filter-button">
              <button onClick={actionFilter}>Rechercher</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid">
            {sportsResults.data.length === 0 ? (
              <div>Aucun résultat</div>
            ) : (
              sportsResults.data.map((terrain) => (
                <Thumbnail
                  key={terrain.id}
                  dataKey={terrain.id}
                  typeField={sportsType
                    .filter((sport) => sport.type_sports_field_id === parseInt(terrain.type_sports_field_id))
                    .map((sport) => sport.type_of_sport_field)}
                  label={terrain.place_name}
                  ground={terrain.ground_type}
                  openDetails={() => goToDetails(terrain.id)}
                />
              ))
            )}
          </div>

          <div className="footer">
            <div className="results">
              <p>
                {minResult} - {maxResult} sur {sportsResults.total} résultats
              </p>
            </div>
            <div className="pagination">
              {sportsResults.links
                .filter((link) => link.url !== null)
                .map((link, index) => (
                  <button
                    key={index}
                    className={link.active ? "active" : ""}
                    onClick={() => navigate(`/result?${typeOfLocation}=${idLocation}&fields=${JSON.stringify(idsSports)}&page=${link.label}`)}
                  >
                    {<div dangerouslySetInnerHTML={{ __html: link.label }} />}
                  </button>
                ))}
            </div>
            <div className="results"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResultPage;
