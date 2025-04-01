import React from "react";
import Hero from "./Hero";
import { useState } from "react";
import Drink from "../../components/drink/Drink";
import Food from "../../components/food/Food";
import FollowUs from "../../components/followUs/FollowUs";

function Homepage() {
  const [switchMenu, setSwitchMenu] = useState("food");

  return (
    <div className="fs-1">
      <Hero />
      <section className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <h2
                className="col text-light text-center mb-5 mt-5"
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
        <div className="d-flex justify-content-center mt-5">
          <hr className="border-light mt-5 w-50"></hr>
        </div>
      </section>
      {switchMenu === "food" ? (
        <Food switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} />
      ) : (
        <Drink switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} />
      )}

      <div className="d-flex justify-content-center mt-5">
        <hr className="border-light mt-3 w-50"></hr>
      </div>
      <FollowUs />
    </div>
  );
}

export default Homepage;
