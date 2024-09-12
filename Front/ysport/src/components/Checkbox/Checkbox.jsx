import "./Checkbox.scss";

function Checkbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <p>Some text in the Modal..</p>
    </label>
  );
}

export default Checkbox;
