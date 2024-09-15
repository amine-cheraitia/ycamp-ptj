import { useNavigate } from "react-router-dom";
import "./Header.scss";



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
          <img src="/Capture_decran_2024-09-14_011302.png" height={"60px"} alt="Logo" />
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
