import "./Button.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  const text = props.text;

  // const action = props.action;

  const icon = props.icon;

  return (
    <button className="button_main_style" onClick={ props.action}>
      {icon && <FontAwesomeIcon icon={faLocationDot} />}
      &nbsp;
      {text}
    </button>
  );
}

export default Button;
