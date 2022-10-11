import CardContainer from "../../components/card/CardContainer";
import "./laboratory.css";
import { Link } from "react-router-dom";

export default function LaboratoryPage() {
  return (
    <div>
      <div
        className="relative hero min-h-screen"
        style={{
          backgroundImage: `url(https://static.igem.wiki/teams/4260/wiki/imagen/laboratory/fondo-head-laboratory.png)`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div
          className="relative hero-overlay text-center text-neutral-content"
          style={{ top: 0 }}
        >
          <div className="">
            <h1
              className="my-10 text-9xl font-bold"
              style={{ color: "white", marginTop: "80px" }}
            >
              L A B O R A T O R Y
            </h1>
            <h2 className="Description">Description</h2>
            <p className="Description-paragraph">
              Due to the characteristics of the project, laboratory
              experimentation is one of the key elements for its development.
              For this reason, in this section, we present relevant information
              regarding the experimental activities carried out during the year.
            </p>

            <p className="Description-paragraph">
              In this section you will find important information regarding the
              notebook and protocols of the main areas in which our project is
              divided: Detection (biosensor), Degradation and Safety Project; in
              addition to information about the parts we used.
            </p>
            <CardContainer />
            <div className="px-32 w-full flex justify-between">
              <Link to="/teccem/description">
                <div>
                  <label
                    className="btn text-lg mt-20"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "white",
                      color: "white",
                      marginBottom: "20px",
                    }}
                  >
                    Go to Detection
                  </label>
                </div>
              </Link>
              <Link to="/teccem/proof-of-concept">
                <lable
                  className="btn text-lg mt-20"
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    borderColor: "white",
                  }}
                >
                  Go to Degradation
                </lable>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
