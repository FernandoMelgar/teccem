import "./communication.css";
import ImageCarousel from "../../components/imageCarousel";

export default function Communication() {
  return (
    <div className="combg">
      <h1
        className="text-7xl text-center text-black"
        style={{
          paddingTop: "120px",
          opacity: "0.8",
          color: "White",
          fontWeight: "1000",
        }}
      >
        Communication
      </h1>
      <div className="iback"></div>
      <ImageCarousel />
    </div>
  );
}
