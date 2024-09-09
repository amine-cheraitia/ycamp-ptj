import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// Importation dans le fichier du composant (par exemple App.js)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import Search from './Header';


function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');  // Redirige vers la page About
  };

  return (

    <div className="App">
      <Search/>
      <main className="App-main">
        <p>
          Welcome to FranceTerrainsSport
        </p>
        </main>
      <footer className="App-footer">
                  © 2024 FranceTerrainsSport

      </footer>
    </div>
  );
}

export default HomePage;