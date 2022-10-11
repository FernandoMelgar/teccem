import "./Card.css";

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
          <a>Learn more!</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
