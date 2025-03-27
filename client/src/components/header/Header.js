import React from "react";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-main d-flex justify-content-between">
      <div className="container d-flex justify-content-center p-5">
        <Link
          to="/"
          className="navbar-brand"
          style={{ fontFamily: "Lobster, serif" }}
        >
          <h1>
            <span className="text-light fs-larger text-center">Schooners</span>
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
      </div>
      <div
        className="position-absolute-lg top-50 bottom-50 collapse navbar-collapse w-100"
        id="navbarNav"
      >
        <ul className="navbar-nav w-100 d-lg-flex justify-content-center align-items-center fs-4">
          <li className="nav-item end-margin-nav-right ">
            <Link
              to="/"
              className="nav-link header-link text-light"
              style={{ fontFamily: "Roboto, serif" }}
            >
              Home
            </Link>
          </li>

          <li className="nav-item middle-margin-nav-right">
            <Link
              to="/about"
              className="nav-link header-link text-light"
              style={{ fontFamily: "Roboto, serif" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item middle-margin-nav-left">
            <Link
              to="/events"
              className="nav-link header-link text-light"
              style={{ fontFamily: "Roboto, serif" }}
            >
              Events
            </Link>
          </li>
          <li className="nav-item end-margin-nav-left">
            <Link
              to="/events"
              className="nav-link header-link text-light"
              style={{ fontFamily: "Roboto, serif" }}
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

// function Header() {
//   return (
//     <div className="py-4 bg-dark">
//       <nav className="navbar navbar-expand-lg bg-dark py-4">
//         <div className="container d-flex justify-content-center">
//           <div className="row w-100 d-flex justify-content-center align-items-center">
//             <ul className="position-absolute top-4 col d-flex justify-content-center align-items-center w-75 mt-4">
//               <li className="fs-4 mx-5 px-5">
//                 <a
//                   href="/"
//                   className="text-light"
//                   style={{ fontFamily: "Roboto, serif" }}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li
//                 className="fs-4"
//                 style={{
//                   marginRight: "230px",
//                 }}
//               >
//                 <a
//                   href="/about"
//                   className="text-light"
//                   style={{ fontFamily: "Roboto, serif" }}
//                 >
//                   About
//                 </a>
//               </li>

//               <li
//                 className="fs-4"
//                 style={{
//                   marginLeft: "230px",
//                 }}
//               >
//                 <a
//                   href="/"
//                   className="text-light"
//                   style={{ fontFamily: "Roboto, serif" }}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className=" fs-4 mx-5 px-5">
//                 <a
//                   href="/about"
//                   className="text-light"
//                   style={{ fontFamily: "Roboto, serif" }}
//                 >
//                   Events
//                 </a>
//               </li>
//             </ul>
//             <div className="z-10 d-flex justify-content-center align-items-center">
//               <a
//                 className="col navbar-brand text-light fs-larger text-center"
//                 href="/"
//                 style={{ fontFamily: "Lobster, serif" }}
//               >
//                 Schooners
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
