import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiMiniMinus } from "react-icons/hi2";

function MenuDropdown({ title, items, isOpen, toggleCategory }) {
  return (
    <div className="row mb-5 pb-3 border-bottom border-success">
      <div className="container">
        <div className="row mb-3">
          <div className="col-1 ms-5 d-flex justify-content-end align-items-center">
            {isOpen ? (
              <HiMiniMinus
                className="text-light fs-3"
                onClick={toggleCategory}
              />
            ) : (
              <BsPlusLg className="text-light fs-3" onClick={toggleCategory} />
            )}
          </div>

          <div className="col fs-2">{title}</div>
        </div>
      </div>
      <div>
        <ul>
          {isOpen &&
            items.map((item) => {
              return (
                <li className="container text-light list-unstyled fs-3 mx-auto mt-3 mb-4">
                  <div className="row">
                    <div className="col-9 ms-5 ps-5">{item.name}</div>
                    <div className="d-flex justify-content-end col-2">
                      {item.price}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MenuDropdown;
