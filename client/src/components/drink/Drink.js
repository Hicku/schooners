import React from "react";
import { useState } from "react";
import MenuDropdown from "../menuDropdown/MenuDropdown";

function Drink({ switchMenu, setSwitchMenu }) {
  const drinkCategories = {
    draft: [
      { name: "ATTIC BREW: FORWARD", price: "5.50", abv: "ABV: 4.2%" },
      { name: "ATTIC BREW: SIGNALS", price: "5.80", abv: "ABV: 5.6%" },
      {
        name: "GLASSHOUSE: BRINGING SESHY BACK",
        price: "5.30",
        abv: "ABV: 3.5%",
      },
      { name: "NOTHING BOUND: DANDELION", price: "5.60", abv: "ABV: 4.2%" },
      { name: "NAPTON CIDERY: N6", price: "5.60", abv: "ABV: 4.6%" },
      { name: "LEVIATHON: VOODOO PEOPLE", price: "5.50", abv: "ABV: 4.9%" },
    ],
    whiteWine: [
      { name: "CHARDONNAY", price: "6.80" },
      { name: "SAUVIGNON BLANC", price: "7.20" },
      { name: "RIESLING", price: "6.50" },
      { name: "PINOT GRIGIO", price: "7.00" },
    ],
    redWine: [
      { name: "CABERNET SAUVIGNON", price: "7.80" },
      { name: "PINOT NOIR", price: "7.00" },
      { name: "MERLOT", price: "6.50" },
      { name: "ZINFANDEL", price: "7.20" },
    ],
    cocktails: [
      { name: "MARGARITA", price: "9.00" },
      { name: "MOJITO", price: "9.50" },
      { name: "MARTINI", price: "8.50" },
      { name: "OLD FASHIONED", price: "8.50" },
      { name: "PIÑA COLADA", price: "8.70" },
      { name: "NEGRONI", price: "8.50" },
    ],
  };

  const [openDrinksState, setOpenDrinksState] = useState({
    draft: { isOpen: false, plusMinus: false },
    whiteWine: { isOpen: false, plusMinus: false },
    redWine: { isOpen: false, plusMinus: false },
    cocktails: { isOpen: false, plusMinus: false },
  });

  const toggleCategory = (category) => {
    setOpenDrinksState((prevState) => {
      return {
        ...prevState,
        [category]: !prevState[category],
      };
    });
  };

  const switchMenuHandler2 = () => {
    setSwitchMenu("food");
  };

  const onClickFood = () => {
    switchMenuHandler2();
  };

  return (
    <div>
      <section className="container-fluid mt-4 pt-4 text-light">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h2 className="mb-5 mt-4 text-center fs-1">WHAT'S ON OFFER</h2>
              <div>
                <ul className="row list-unstyled fs-2">
                  <li
                    className="col menu-tab text-success"
                    onClick={onClickFood}
                  >
                    Food
                  </li>
                  <li className="col menu-tab text-success text-decoration-underline">
                    Drink
                  </li>
                </ul>
              </div>
              <div className="container mt-5">
                {Object.keys(drinkCategories).map((category) => {
                  return (
                    <MenuDropdown
                      key={category}
                      title={category.toLocaleUpperCase()}
                      items={drinkCategories[category]}
                      isOpen={openDrinksState[category]}
                      toggleCategory={() => toggleCategory(category)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Drink;
