import "./Checkbox.scss";

function Checkbox(props) {
  const label = props.label;

  const dataKey = props.datakey;
  const action = props.action;
  return (

    <label className="checkbox" key={dataKey}>
      <input type="checkbox" onClick={props.action} />


      <span className="checkmark"></span>
      <p>{label}</p>
    </label>
  );
}

export default Checkbox;
