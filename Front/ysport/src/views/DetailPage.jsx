import "../styles/DetailPage.scss";
import { useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

function DetailPage(props) {
  const { id } = useParams(); // Récupère les paramètres de l'URL

  const champsDétails = ['Type de terrain', 'Accès en transports', 'Accès handicapé', 'Sanitaires', 'Douches', 'Éclairage', 'Site Web', 'Adresse', 'Département', 'Région', 'Coordonnées GPS', 'Observations'];

  const détails = {
    'Type de terrain': 'Terrain de football',
    'Accès en transports': 'Oui',
    'Accès handicapé': 'Oui',
    'Sanitaires': 'Oui',
    'Douches': 'Oui',
    'Éclairage': 'Oui',
    'Site Web': 'www.paris.fr',
    'Adresse': '9 Rue Ballu, 75009 Paris',
    'Département': 'Seine Saint Denis',
    'Région': 'Île-de-France',
    'Coordonnées GPS': '48.8798° N, 2.3377° E',
    'Observations': 'Parc de 1,5 hectares avec un terrain de football, un terrain de basket et un terrain de handball.'
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container-details">
          <div className="image">
            {/* <PhotoGallery /> */}

            <img
              src="/Img/Parc-De-Paris9.jpg"
              alt="Person running"
              style={{ width: "800px", height: "300px", objectFit: "cover", margin: "5px", borderRadius: "8px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div className="description">
            <div className="header">
               <div className="name">Parc de Paris 9</div>
               <Button text="Carte" icon={true} />

            </div>
           
            <div className="details">
              {champsDétails.map((champ) => (
                <div className="detail" key={champ}>
                  <span className="champ">{champ} : </span>
                  <span>{détails[champ]}</span>
                </div>
              ))}
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailPage;
