import "./Thumbnail.scss";

import PhotoGallery from "../PhotoGallery";
import Button from "../Button/Button";

function Thumbnail(props) {
  const label = props.label;

  return (
    <div className="thumbnail">
      <PhotoGallery />

      <div className="thumbnail-infos">
        <p className="name">{label}</p>
        <div className="type">
          <span>Type de terrain : </span>
          Terrain de foot
        </div>
        <div className="city">
          <span>Ville : </span>
          Paris
        </div>
      </div>

<div className="thumbnail-buttons">
      <Button text="Carte" icon={"faLocationDot"}  action={props.openModalMap} />
      <Button text="Détails" icon={"faPlus"} action={props.openDetails} />
      </div>
    </div>
  );
}

export default Thumbnail;
