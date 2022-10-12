import "./Card.css";
import Modal from "../modal";

function Card(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.image}></img>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-description">
          <p>{props.shortDescription}</p>
        </div>
      </div>

      <div className="button">
        <button>
          <label htmlFor={props.title}>
            <a>Learn more!</a>
          </label>
        </button>
      </div>
      <Modal modalId={props.title}>
        <h2 className="font-bold text-2xl">{props.title}</h2>
        <p className="p">{props.description}</p>
      </Modal>
    </div>
  );
}

export default Card;
