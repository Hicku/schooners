import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="py-4 bg-dark">
      <nav className="navbar navbar-expand-lg bg-dark py-4">
        <div className="container d-flex justify-content-center">
          <div className="row w-100 d-flex justify-content-center align-items-center">
            <ul className="position-absolute top-4 col d-flex justify-content-center align-items-center w-75 mt-4">
              <li className="fs-4 mx-5 px-5">
                <a
                  href="/"
                  className="text-light"
                  style={{ fontFamily: "Roboto, serif" }}
                >
                  Home
                </a>
              </li>
              <li
                className="fs-4"
                style={{
                  marginRight: "230px",
                }}
              >
                <a
                  href="/about"
                  className="text-light"
                  style={{ fontFamily: "Roboto, serif" }}
                >
                  About
                </a>
              </li>

              <li
                className="fs-4"
                style={{
                  marginLeft: "230px",
                }}
              >
                <a
                  href="/"
                  className="text-light"
                  style={{ fontFamily: "Roboto, serif" }}
                >
                  Home
                </a>
              </li>
              <li className=" fs-4 mx-5 px-5">
                <a
                  href="/about"
                  className="text-light"
                  style={{ fontFamily: "Roboto, serif" }}
                >
                  Events
                </a>
              </li>
            </ul>
            <div className="z-10 d-flex justify-content-center align-items-center">
              <a
                className="col navbar-brand text-light fs-larger text-center"
                href="/"
                style={{ fontFamily: "Lobster, serif" }}
              >
                Schooners
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
