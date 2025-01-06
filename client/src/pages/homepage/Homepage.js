import React from "react";
import Hero from "./Hero";

function Homepage() {
  const draft = [
    {
      name: "ATTIC BREW: FORWARD",
      type: "LAGER",
      abv: "ABV: 4.2%",
    },
    {
      name: "ATTIC BREW: SIGNALS",
      type: "INDIAN PALE ALE",
      abv: "ABV: 5.6%",
    },
    {
      name: "GLASSHOUSE: BRINGING SESHY BACK",
      type: "SESSION ALE",
      abv: "ABV: 3.5%",
    },
    {
      name: "NOTHING BOUND: DANDELION",
      type: "PALE ALE",
      abv: "ABV: 4.2%",
    },
    {
      name: "NAPTON CIDERY: N6",
      type: "FRESH MEDIUM DRY CIDER",
      abv: "ABV: 4.6%",
    },
    {
      name: "LEVIATHON: VOODOO PEOPLE",
      type: "DRY IRISH STOUT",
      abv: "ABV: 4.9%",
    },
  ];

  return (
    <div className="fs-1">
      <Hero />
      <section className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <h2
                className="col text-light text-center mb-5 mt-4"
                style={{ fontFamily: "Roboto, serif" }}
              >
                HOST YOUR NEXT EVENT WITH US
              </h2>
            </div>

            <div
              className="row text-light text-center"
              style={{ fontFamily: "Roboto, serif" }}
            >
              <h3 className="my-5 text-success fs-3">HIRE A PRIVATE ROOM</h3>
              <div className="text-center homepage-text">
                <p>No charge for room hire</p>
                <p>
                  Ideal for birthdays, casual parties, or smaller gatherings
                </p>
              </div>
            </div>
            <div className="row text-light text-center">
              <h3 className="my-5 fs-3 text-success">HIRE THE BAR</h3>
              <div className="text-center homepage-text">
                <p>A £300 deposit is required to reserve the space</p>
                <p>
                  Get your deposit back if your party spends £1500 or more on
                  the night
                </p>
                <p>
                  Perfect for large celebrations or any occasion that calls for
                  exclusivity
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className="fs-4 text-bold py-2 px-5 bg-success">
                HIRE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mt-5 pt-5 text-light">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h2 className="mb-5 mt-4 text-center">WHAT'S ON OFFER</h2>

              <h3 className="my-5 fs-3 text-success">DRAFT</h3>
              <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row w-75">
                  <div className="col d-flex justify-content-center">
                    <ul
                      className="menu-item list-unstyled text-center"
                      style={{ fontFamily: "Roboto, serif" }}
                    >
                      {draft.map((item) => (
                        <li className="my-2">{item.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <ul
                      className="menu-item list-unstyled text-center"
                      style={{ fontFamily: "Roboto, serif" }}
                    >
                      {draft.map((item) => (
                        <li className="my-2">{item.type}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <ul
                      className="menu-item list-unstyled text-center"
                      style={{ fontFamily: "Roboto, serif" }}
                    >
                      {draft.map((item) => (
                        <li className="my-2">{item.abv}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-main-light">
        <div>hello</div>
      </section>
    </div>
  );
}

export default Homepage;
