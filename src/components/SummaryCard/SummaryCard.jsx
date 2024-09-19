import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";
import "./SummaryCard.css";

export default function SummaryCard() {
    return (
        <div className="order-summary-card">
            <CardImage />
            <CardInfo />
        </div>
    );
}