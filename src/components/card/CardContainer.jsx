import "./CardContainer.css";
import Card from "./card";
import { cardData } from "../componentData/CardData";
import Modal from "../modal";

const cardDataArray = cardData;

export default function CardContainer() {
  return (
    <div className="multiple-card-container">
      {cardDataArray.map((item, index) => {
        return item.title !== "Safety Form" ? (
          <label htmlFor={item.title}>
            <Card
              title={item.title}
              image={item.image}
              description={item.description}
              index={index}
            ></Card>
            <Modal modalId={item.title} style={{ Position: "absolute" }}>
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p className="p">{item.description}</p>
            </Modal>
          </label>
        ) : (
          <label htmlFor={item.title}>
            <Card
              title={item.title}
              image={item.image}
              description={item.description}
              index={index}
            ></Card>
            <Modal modalId={item.title} style={{ Position: "absolute" }}>
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <a
                href="https://responsibility.igem.org/safety-forms/project-safety"
                className="safetyLink"
              >
                Download Safety Form
              </a>
              <a
                href="https://docs.google.com/document/d/1FQAko7K4gQKo3AhNtn7c8QfbMMTPtW0YFEp1XLLIyYI/edit"
                className="safetyLink"
              >
                Open Safety and Laboratory
              </a>
            </Modal>
          </label>
        );
      })}
    </div>
  );
}
