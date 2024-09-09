import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// Importation dans le fichier du composant (par exemple App.js)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';



function Search() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');  // Redirige vers la page About
  };

  const returnHome = () => {
    navigate('/');  // Redirige vers la page d'accueil
  };

  return (

      <header className="App-header">

        <button onClick={returnHome}>
            <FontAwesomeIcon icon={faFutbol} />
        </button>
      
        FranceTerrainsSport

        <button onClick={handleClick}>Aller à la page À propos</button>
      </header>

  );
}

export default Search;