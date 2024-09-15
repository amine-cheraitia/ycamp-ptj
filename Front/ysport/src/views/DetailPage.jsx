import "../styles/DetailPage.scss";
import { useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function DetailPage(props) {
  const { id } = useParams(); // Récupère les paramètres de l'URL

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container">
          <p>DetailPage</p> &nbsp;
          <p>id: {id}</p> &nbsp;
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailPage;
