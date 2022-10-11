import "./CardContainer.css";
import Card from "./card";
import { cardData } from "../componentData/CardData";

const cardDataArray = cardData;

export default function CardContainer() {
  return (
    <div className="multiple-card-container">
      {cardDataArray.map((item, index) => {
        return (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            index={index}
          ></Card>
        );
      })}
    </div>
  );
}
