import Flatline from "./../../assets/Music_Flatline.jpg";
import "./CardImage.css";

export default function CardImage() {
    return (
        <div className="card-image">
            <img src={Flatline} alt="" />
        </div>
    );
}