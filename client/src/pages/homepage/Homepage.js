import React from "react";
import Hero from "./Hero";

function Homepage() {
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
              <ul className="text-center homepage-text">
                <li>No charge for room hire</li>
                <li>
                  Ideal for birthdays, casual parties, or smaller gatherings
                </li>
              </ul>
            </div>
            <div className="row text-light text-center">
              <h3 className="my-5 fs-3 text-success">HIRE THE BAR</h3>
              <ul className="text-center homepage-text">
                <li>A £300 deposit is required to reserve the space</li>
                <li>
                  Get your deposit back if your party spends £1500 or more on
                  the night
                </li>
                <li>
                  Perfect for large celebrations or any occasion that calls for
                  exclusivity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mt-5 pt-5 text-light">
        <div className="row">
          <div className="col">
            <h2 className="text-center">WHAT'S ON OFFER</h2>
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
