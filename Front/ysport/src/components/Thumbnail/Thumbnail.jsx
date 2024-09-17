import "./Thumbnail.scss";

import PhotoGallery from "../PhotoGallery";
import Button from "../Button/Button";

function Thumbnail(props) {
  const label = props.label;

  // const actionButton  = props.actionButton;
  // url of the image by unsplash API

  // const image = "https://api.unsplash.com/photos/random?query=sports&client_id=-1TRCgKz8KAchgLmu1ofmfiSeYfRpmfe7Fd9vNv1AoE";

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

      <Button text="Carte" icon={true} />
      <Button text="Détails" icon={true} action={props.actionButton} />
    </div>
  );
}

export default Thumbnail;
