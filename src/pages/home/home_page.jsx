import * as React from "react";
import ArrowDownSvg from "./components/arrow_down_svg";
import { PageWithBackgroundVideo } from "../../components/page";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <PageWithBackgroundVideo
        className="hydro-defense-section"
        gifURL={
          "https://static.igem.wiki/teams/4260/wiki/imagen/home/home-page/homepage-1.gif"
        }
      >
        <div className="h-full w-full p-32 text-center flex flex-col justify-between">
          <div>
            <h1 className="text-8xl text-white"> HYDRO DEFENSE </h1>
            <h2 className="text-2xl text white tracking-widest text-white">
              DEFENDING CROPS AGAINST DISRUPTORS
            </h2>
          </div>
          <div className="swipe-down-container flex flex-col justify-center">
            <a className="block text-2xl text-white pb-4">Swipe down</a>
            <ArrowDownSvg />
          </div>
        </div>
      </PageWithBackgroundVideo>
      <PageWithBackgroundVideo
        gifURL={
          "https://static.igem.wiki/teams/4260/wiki/imagen/home/home-page/homepage-2.gif"
        }
      >
        <div className="h-full w-full p-16">
          <div className="flex flex-col content-center justify-center text-center">
            <h2 className="text-3xl text-white cano ">Endocrine Disrupting</h2>
            <h1 className="text-6xl cano" style={{ color: "rgb(224,33,33)" }}>
              Chemicals
            </h1>
            <p className="text-lg text-white max-w-sm m-auto">
              Chemically complex molecules structurally similar Chemically
              complex molecules structurally similar to steroids and hormones,
              originated from a variety of pollutants...
            </p>
            <Link to="/teccem/description">
              <div>
                <label
                  className="btn text-lg mt-20"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "white",
                  }}
                >
                  Go to Project Description
                </label>
              </div>
            </Link>
          </div>
        </div>
      </PageWithBackgroundVideo>
      <PageWithBackgroundVideo
        gifURL={
          "https://static.igem.wiki/teams/4260/wiki/imagen/home/home-page/homepage-3.gif"
        }
      >
        <div className="h-full w-full flex flex-col justify-between">
          <div className="h-auto w-auto p-16 flex justify-between">
            <h1
              className="text-6xl cano p-10 text-white max-w-lg"
              style={{
                width: 450,
                backgroundColor: "rgba(160,38,160,0.50)",
                borderColor: "rgb(210,54,210)",
                borderRadius: 8,
                borderWidth: 2,
              }}
            >
              <center>BUT WHY IS THIS OUR PROBLEM..?</center>
            </h1>

            <div
              className="max-w-sm px-5 py-5"
              style={{
                width: 600,
                backgroundColor: "rgba(160,38,160,0.50)",
                borderColor: "rgb(210,54,210)",
                borderRadius: 8,
                borderWidth: 2,
              }}
            >
              <h2 className="text-3xl text-white cano ">Environmental:</h2>
              <p className="text-justify text-white">
                In ***, 54% of wastewater is not treated, which has become one
                of the biggest public health problems, since this type of water
                is reused for agricultural activities and in some cases for
                human consumption.
              </p>

              <p className="text-justify text-white">
                {" "}
                Worldwide concentrations found in water between 0.2 ng/L -
                5510.0 ng/L and a maximum of 28,000.0 ng/L in 2017. Poor quality
                on the 30% of water corps.
              </p>
            </div>
          </div>

          <div className="h-auto w-auto pb-8 px-16 flex justify-between">
            <div
              className="max-w-sm px-5 py-5"
              style={{
                width: 650,
                backgroundColor: "rgba(160,38,160,0.50)",
                borderColor: "rgb(210,54,210)",
                borderRadius: 8,
                borderWidth: 2,
              }}
            >
              <h2 className="text-3xl text-white cano">
                Agriculture represents the:
              </h2>
              <p className="text-justify text-white">
                3% of GDP and 4% of exportations Income of 5.5 millions of **
              </p>
            </div>
            <div
              className="max-w-sm px-5 flex flex-col justify-center content-center"
              style={{
                width: 600,
                backgroundColor: "rgba(160,38,160,0.50)",
                borderColor: "rgb(210,54,210)",
                borderRadius: 8,
                borderWidth: 2,
              }}
            >
              <h2 className="text-3xl text-white cano ">Health:</h2>
              <p className="text-justify text-white">
                Around 75% of the *** population have at least 1 EDCs' related
                disease
              </p>
            </div>
          </div>
        </div>
      </PageWithBackgroundVideo>

      <PageWithBackgroundVideo
        gifURL={
          "https://static.igem.wiki/teams/4260/wiki/imagen/home/home-page/homepage-4.gif"
        }
      >
        <div className="h-full w-full flex flex-col justify-between py-32 pr-32">
          <div className="h-full w-full flex justify-end self-end">
            <div className="flex flex-col justify-between">
              <h1
                className="text-6xl cano p-10 text-white"
                style={{
                  width: 450,
                  backgroundColor: "rgba(226,168,69,0.50)",
                  borderColor: "rgb(249,167,26)",
                  borderRadius: 8,
                  borderWidth: 2,
                }}
              >
                <center>OUR FIRST MISSION</center>
              </h1>

              <div
                className="max-w-sm px-5 py-5"
                style={{
                  width: 650,
                  backgroundColor: "rgba(226,168,69,0.50)",
                  borderColor: "rgb(249,167,26)",
                  borderRadius: 8,
                  borderWidth: 2,
                }}
              >
                <h2 className="text-3xl text-white cano">Gauge.</h2>
                <p className="text-justify text-white">
                  Cause it would be scarcely posibleto get rid of them if not
                  quantifying them first.
                </p>
              </div>
              <div>
                <Link to="/teccem/hardware">
                  <label
                    className="btn text-lg m-auto"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "white",
                    }}
                  >
                    Go to Project Biosensor
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageWithBackgroundVideo>

      <PageWithBackgroundVideo
        gifURL={
          "https://static.igem.wiki/teams/4260/wiki/imagen/home/home-page/homepage-5.gif"
        }
      >
        <div className="py-52 h-full w-full flex flex-col justify-between items-center">
          <h2 className="block cano text-7xl w-3/4 p-10 text-white text-center">
            OUR SECOND MISSION <font color="skyblue">& SOLUTION</font>s
          </h2>
          <div className="">
            <div className="max-w-sm px-5 py-5">
              <p className="text-justify text-white text-lg">
                <font className="font-bold">Degrading </font> these composites
                into photosensitive compounds.
              </p>
            </div>
          </div>
          <div>
            <Link to="/teccem/degradation">
              <label
                className="btn text-lg m-auto "
                style={{
                  backgroundColor: "transparent",
                  borderColor: "white",
                }}
              >
                Go to Project Degradation
              </label>
            </Link>
          </div>
        </div>
      </PageWithBackgroundVideo>
      <PageWithBackgroundVideo
        gifURL={
          "https://static.igem.wiki/teams/4260/wiki/imagen/home/home-page/homepage-6.gif"
        }
      >
        <div className="p-32 h-full w-full flex flex-col justify-between items-center">
          <div className="h-auto w-auto p-16 flex justify-center self-center">
            <h2 className="text-5xl cano p-10 text-white">
              <center>
                <font color="skyblue">We care...</font> Because many do not.{" "}
                <font color="purple">We solve... </font>What others ignore.
              </center>
            </h2>
          </div>
          <div className="px-32 w-full flex justify-between">
            <Link to="/teccem/description">
              <div>
                <label
                  className="btn text-lg mt-20"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "white",
                  }}
                >
                  Go to Project Description
                </label>
              </div>
            </Link>
            <Link to="/teccem/proof-of-concept">
              <lable
                className="btn text-lg mt-20"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "white",
                }}
              >
                Go to proof of concept
              </lable>
            </Link>
          </div>
        </div>
      </PageWithBackgroundVideo>
    </div>
  );
}
