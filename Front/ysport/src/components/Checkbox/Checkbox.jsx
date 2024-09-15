import "./Checkbox.scss";

function Checkbox(props) {
  const label = props.label;
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <p>{label}</p>
    </label>
  );
}

export default Checkbox;
