import { useNavigate } from 'react-router-dom';
import './Header.css';

// Importation dans le fichier du composant (par exemple App.js)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';



function Search() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');  // Redirige vers la page About
  };

  return (

      <header className="App-header">
<div className='left'>
        <a className='logo' href="/">
            <FontAwesomeIcon icon={faFutbol} /> &nbsp; FranceTerrainsSport
        </a>
</div>
        <div className='right'>
        

        <button onClick={handleClick}>Accueil</button>
        <button onClick={handleClick}>Contact</button>
        </div>
      </header>

  );
}

export default Search;