import "./Checkbox.scss";

function Checkbox(props) {
  const label = props.label;
  const dataKey = props.dataKey;
  const action = props.action;
  return (
    <label className="checkbox" key={dataKey}>
      <input type="checkbox" onClick={action}/>
      <span className="checkmark"></span>
      <p>{label}</p>
    </label>
  );
}

export default Checkbox;
