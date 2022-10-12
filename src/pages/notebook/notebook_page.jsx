import notebookActivities from "./notebook_activities";
const _ = require("lodash");

const months = {
  0: "JANUARY",
  1: "FEBRUARY",
  2: "MARCH",
  3: "APRIL",
  4: "MAY",
  5: "JUNE",
  6: "JULY",
  7: "AUGUST",
  8: "SEPTEMBER",
  9: "OCTOBER",
};

export default function NotebookPage() {
  const notebook_activities = notebookActivities();

  const data = [];

  for (const key in notebook_activities[0]["data"]) {
    data.push(notebook_activities[0]["data"][key]);
  }
  var groupKey = 0;
  var groups = data.reduce(function (r, o) {
    var m = parseInt(o.date.split("-")[1]);
    r[m]
      ? r[m].data.push(o)
      : (r[m] = { group: String(groupKey++), data: [o] });
    return r;
  }, {});

  var result = Object.keys(groups).map(function (k) {
    return groups[k];
  });

  var groupByMonth = result;
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
        {groupByMonth.map(function (value, key) {
          return (
            <div>
              <div
                className="block p-2 rounded-sm mt-4 mb-2"
                style={{ backgroundColor: "rgba(75,230,255,.5)" }}
              >
                <h1 className="text-6xl text-white content-top">
                  {" "}
                  {months[key]}
                </h1>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                value
                  .data.map(function (data) {
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
