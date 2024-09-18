import "./Checkbox.scss";

function Checkbox(props) {
  const label = props.label;
  const dataKey = props.dataKey;
  const action = props.action;
  return (

    <label className="checkbox">
      <input type="checkbox" onClick={props.action} />

      <span className="checkmark"></span>
      <p>{label}</p>
    </label>
  );
}

export default Checkbox;
