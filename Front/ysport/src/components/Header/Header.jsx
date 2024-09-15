import { useNavigate } from "react-router-dom";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <header className="App-header">
      <div className="left">
        <div className="logo" onClick={handleClick}>
          <FontAwesomeIcon icon={faFutbol} /> &nbsp; Proxima Sport
        </div>
      </div>
      <div className="right">
        <button onClick={handleClick}>Accueil</button>
        <button onClick={handleContact}>Contact</button>
      </div>
    </header>
  );
}

export default Header;
