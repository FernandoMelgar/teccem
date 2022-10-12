import notebookActivities from "./notebook_activities";
const _ = require("lodash");

const months = {
  1: "JANUARY",
  2: "FEBRUARY",
  3: "MARCH",
  4: "APRIL",
  5: "MAY",
  6: "JUNE",
  7: "JULY",
  8: "AUGUST",
  9: "SEPTEMBER",
  10: "OCTOBER",
};

export default function NotebookPage() {
  const notebook_activities = notebookActivities();

  const data = [];

  for (const key in notebook_activities[0]["data"]) {
    data.push(notebook_activities[0]["data"][key]);
  }
  console.log(data);

  // var groupByMonth  = _.groupBy(data, ({ date }) => new Date(date).getMonth());
  var groupByMonth = [];
  return (
    <div
      className="hero pt-20"
      style={{
        backgroundImage: `url(https://static.igem.wiki/teams/4260/wiki/laboratory/notebook-bg.png)`,
        minHeight: 200,
      }}
    >
      <div className="p-10 text-center">
        <h1
          className=" text-8xl text-white pb-4"
          style={{ fontFamily: "Cano" }}
        >
          Notebook
        </h1>

        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className="pt-2 pb-4"
        >
          <a className="btn btn-outline btn-info"> Download Calendar as PDF</a>
          <a className="btn btn-outline btn-success">
            {" "}
            Download Calendar as CSV
          </a>
          <a className="btn btn-outline btn-secondary">
            {" "}
            Download Calendar as HTMl
          </a>
        </div>
        {groupByMonth.map(function (it) {
          return (
            <div>
              <div
                className="block p-2 rounded-sm mt-4 mb-2"
                style={{ backgroundColor: "rgba(75,230,255,.5)" }}
              >
                <h1 className="text-6xl text-white content-top">
                  {" "}
                  {months[it.group]}
                </h1>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {it.data.map(function (data) {
                  return (
                    <div className="card glass calendar-card relative inline-block content-center rounded-md m-4 p-2 z-10 backdrop-blur-lg from-[#fff2] to-[#fff1] bg-gradient-from-br bg-gradient-to-tl">
                      <label
                        className="block text-white text-sm text-start"
                        style={{ zIndex: 2 }}
                      >
                        {data.activityName}
                      </label>
                      <div
                        className="inline-block text-xl absolute p-1 -z-10"
                        style={{ bottom: 0, right: 0 }}
                      >
                        <p className="text-white opacity-30">
                          {data.date.slice(-2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
