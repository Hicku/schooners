import React from "react";
import barMusic from "../../images/bar-music.jpg";
import barFriends from "../../images/BarFriends.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { VscArrowRight } from "react-icons/vsc";

import "./followUs.css";

function FollowUs() {
  return (
    <section className="container">
      <div className="row text-light mt-5 mb-5 text-light">
        <div className="col-7">
          <h2 className="mb-2 mt-5 fs-1 ms-5 ps-5">JOIN US ON SOCIAL MEDIA</h2>
          <h3 className=" ms-5 ps-5">SEE WHAT'S GOING ON AT SCHOONERS</h3>
        </div>
        <div className="col">
          INSTAGRAM
          <VscArrowRight className="text-success" />
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
        <div
          className="follow-img col-4 me-4"
          style={{ backgroundImage: `url(${barMusic})` }}
        ></div>
        <div
          className="follow-img col-4 ms-4"
          style={{ backgroundImage: `url(${barFriends})` }}
        ></div>
      </div>
    </section>
  );
}

export default FollowUs;
