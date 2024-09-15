import "./Button.scss";

function Button(props) {
  const text = props.text;

  const action = props.action;

  return (
    <button className="button_main_style" onClick={action}>
      {text}
    </button>
  );
}

export default Button;
