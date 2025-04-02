import React from "react";
import { useState } from "react";
import MenuDropdown from "../menuDropdown/MenuDropdown";
import "./food.css";

function Food({ switchMenu, setSwitchMenu }) {
  const foodCategories = {
    sides: [
      { name: "Buffalo Wings", price: 8.99 },
      { name: "Mozzarella Sticks", price: 6.99 },
      { name: "Loaded Nachos", price: 9.99 },
      { name: "Spinach & Artichoke Dip", price: 7.99 },
      { name: "French Fries", price: 3.99 },
      { name: "Onion Rings", price: 4.99 },
      { name: "Sweet Potato Fries", price: 4.99 },
      { name: "Coleslaw", price: 2.99 },
    ],
    mains: [
      { name: "Fried Chicken", price: 12.99 },
      { name: "Burger", price: 10.99 },
    ],
    extras: [
      { name: "Cheese", price: 1.0 },
      { name: "Bacon", price: 1.5 },
      { name: "Avocado", price: 2.0 },
      { name: "Fried Egg", price: 1.5 },
      { name: "Fried Onion", price: 1.0 },
      { name: "Crispy Onions", price: 1.3 },
    ],
  };

  const [openFoodState, setOpenFoodsState] = useState({
    sides: false,
    mains: false,
    extras: false,
  });

  const toggleCategory = (category) => {
    setOpenFoodsState((prevState) => {
      return {
        ...prevState,
        [category]: !prevState[category],
      };
    });
  };

  const switchMenuHandler = () => {
    setSwitchMenu("drink");
  };

  const onClickDrink = () => {
    switchMenuHandler();
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
                  <li className="col menu-tab text-decoration-underline">
                    Food
                  </li>
                  <li className="col menu-tab" onClick={onClickDrink}>
                    Drink
                  </li>
                </ul>
              </div>
              <div className="container mt-5 pt-5 border-top border-success">
                {Object.keys(foodCategories).map((category) => {
                  return (
                    <MenuDropdown
                      key={category}
                      title={category.toLocaleUpperCase()}
                      items={foodCategories[category]}
                      isOpen={openFoodState[category]}
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

export default Food;
