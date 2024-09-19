import "./Thumbnail.scss";

import PhotoGallery from "../PhotoGallery";
import Button from "../Button/Button";

function Thumbnail(props) {
  const label = props.label;

  return (
    <div className="thumbnail" data-key={props.dataKey}>
      <PhotoGallery />

      <div className="thumbnail-infos">
        <p className="name">{label}</p>
        <div className="type">
          <span>Type de terrain : </span>
          {props.typeField}
        </div>
        <div className="city">
          <span>Type de sol : </span>
          {props.ground}
        </div>
      </div>

<div className="thumbnail-buttons">
      {/* <Button text="Carte" icon={"faLocationDot"}  action={props.openModalMap} /> */}
      <Button text="Détails" icon={"faPlus"} action={props.openDetails} />
      </div>
    </div>
  );
}

export default Thumbnail;
