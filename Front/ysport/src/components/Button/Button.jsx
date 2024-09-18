import "./Button.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  const text = props.text;

  const icon = props.icon;

  return (
    <button className="button_main_style" onClick={ props.action}>
      {icon === "faLocationDot" && <FontAwesomeIcon icon={faLocationDot} />}
      {icon === "faPlus" && <FontAwesomeIcon icon={faPlus} />}
      &nbsp;
      {text}
    </button>
  );
}

export default Button;
