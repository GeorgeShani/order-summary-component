import SongIcon from "./../../assets/Music_Icon.png";
import "./CardInfo.css";

export default function CardInfo() {
    return (
        <div className="card-info">
            <h3 className="title">Order Summary</h3>
            <p className="descr">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className="annual-plan-container">
                <div className="annual-plan-data">
                    <img src={SongIcon} alt="" />
                    <div className="plan-main-info">
                        <h4 className="plan-title">Annual Plan</h4>
                        <p className="plan-price">$59.99/year</p>
                    </div>
                </div>
                <div className="change-button-container">
                    <button id="change-plan-button">Change</button>
                </div>
            </div>
            <div className="payment-buttons-container">
                <button id="proceed-to-payment">Proceed to Payment</button>
                <button id="cancel-order">Cancel Order</button>
            </div>
        </div>
    );
}