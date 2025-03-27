import React from "react";
import "./food.css";

function Food({ switchMenu, setSwitchMenu }) {
  const barMenu = {
    startersSides: [
      { name: "Buffalo Wings", price: 8.99 },
      { name: "Mozzarella Sticks", price: 6.99 },
      { name: "Loaded Nachos", price: 9.99 },
      { name: "Spinach & Artichoke Dip", price: 7.99 },
      { name: "French Fries", price: 3.99 },
      { name: "Onion Rings", price: 4.99 },
      { name: "Sweet Potato Fries", price: 4.99 },
      { name: "Coleslaw", price: 2.99 },
    ],
    mains: [{ name: "Fried Chicken", price: 12.99 }],
  };

  const switchMenuHandler = () => {
    setSwitchMenu("drink");
  };

  const onClickDrink = () => {
    switchMenuHandler();
  };

  return (
    <div>
      <section className="container-fluid mt-5 pt-5 text-light">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h2 className="mb-5 mt-4 text-center">WHAT'S ON OFFER</h2>
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
            </div>
          </div>
        </div>
      </section>
      <section className="row text-light text-center mt-5">
        <div>
          <h3 className="text-light mb-4">
            {barMenu.mains[0].name} - {barMenu.mains[0].price}
          </h3>
          <p className="text-light fs-5 w-50 mx-auto mt-3 mb-5">
            Locally-sourced, buttermilk-soaked fried chicken with a crunchy,
            golden crust—served with a house-made dipping sauce for that perfect
            balance of flavor.
          </p>
        </div>
        <div>
          <h3 className="text-light mb-4">Starters</h3>
          <ul>
            {barMenu.startersSides.map((item) => {
              return (
                <li className="text-light list-unstyled fs-5 w-50 mx-auto mt-3 mb-4">
                  {item.name} - {item.price}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Food;
