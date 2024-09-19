import "./ModalMap.scss";
import MapWithMarker from "../MapWithMarker/MapWithMarker"
import Button from "../Button/Button"

function ModalMap(props) {
    return (
        <div className="backGroundModal">
            <div className="containerModal">
                <div className="composantMap">
                    <MapWithMarker id_place={props.id_place}  place_name={props.place_name} longitude={props.longitude} latitude={props.latitude}/>
                </div>
                <div className="infoModal">
                    <h3>{props.place_name}</h3>
                    <p><strong>Adresse : </strong>{props.adress}</p>
                </div>
                <Button action={props.closeModal} text="Fermer"/>
            </div>
        </div>
    )
}

export default ModalMap;