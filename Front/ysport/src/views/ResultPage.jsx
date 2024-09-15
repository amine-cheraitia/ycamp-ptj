import "../styles/ResultPage.scss";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ResultPage(props) {
  const { id, ids } = useParams(); // Récupère les paramètres de l'URL
  const idsArray = JSON.parse(ids);

  const navigate = useNavigate();

  const detailPage = () => {
    const id = 123; // ID unique
    navigate(`/detail/${id}`);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container">
          <p>ResultPage</p> &nbsp;
          <p>id: {id}</p> &nbsp;
          <p>ids: {idsArray.join(", ")}</p>
          <button onClick={detailPage}>Go to Button</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResultPage;
