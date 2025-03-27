import React from "react";

function Drink({ switchMenu, setSwitchMenu }) {
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

  const wineList = [
    {
      name: "CABERNET",
      year: 2018,
      region: "NAPA VALLEY, USA",
      type: "RED",
    },
    {
      name: "PINOT NOIR",
      year: 2020,
      region: "BURGUNDY, FRANCE",
      type: "RED",
    },
    {
      name: "CHARDONNAY",
      year: 2019,
      region: "SONOMA COUNTY, USA",
      type: "WHITE",
    },
    {
      name: "SAUVIGNON BLANC",
      year: 2021,
      region: "MARLBOROUGH, NEW ZEALAND",
      type: "WHITE",
    },
    {
      name: "PROVENCE ROSÉ",
      year: 2020,
      region: "PROVENCE, FRANCE",
      type: "ROSÉ",
    },
  ];

  const cocktailList = [
    {
      name: "MARGARITA",
      ingredients: ["TEQUILA", "TRIPLE SEC", "LIME JUICE", "SALT"],
      type: "COCKTAIL",
    },
    {
      name: "MOJITO",
      ingredients: ["WHITE RUM", "SUGAR", "LIME JUICE", "MINT", "SODA WATER"],
      type: "COCKTAIL",
    },
    {
      name: "MARTINI",
      ingredients: ["GIN", "DRY VERMOUTH", "OLIVE OR LEMON TWIST"],
      type: "COCKTAIL",
    },
    {
      name: "OLD FASHIONED",
      ingredients: ["BOURBON", "SUGAR", "ANGOSTURA BITTERS", "ORANGE PEEL"],
      type: "COCKTAIL",
    },
    {
      name: "PIÑA COLADA",
      ingredients: ["RUM", "COCONUT CREAM", "PINEAPPLE JUICE"],
      type: "COCKTAIL",
    },
    {
      name: "NEGRONI",
      ingredients: ["GIN", "CAMPARI", "SWEET VERMOUTH"],
      type: "COCKTAIL",
    },
  ];

  const switchMenuHandler2 = () => {
    setSwitchMenu("food");
  };

  const onClickFood = () => {
    switchMenuHandler2();
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
                  <li className="col menu-tab" onClick={onClickFood}>
                    Food
                  </li>
                  <li className="col menu-tab text-decoration-underline">
                    Drink
                  </li>
                </ul>
              </div>
              <div></div>
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
              <div className="row d-flex">
                <div className="col me-5 pe-5">
                  <h3
                    className="mt-5 mb-5 fs-3 text-success text-center"
                    style={{ fontFamily: "Roboto, serif" }}
                  >
                    WINE
                  </h3>
                  <ul
                    className="list-unstyled text-center"
                    style={{ fontFamily: "Roboto, serif" }}
                  >
                    {wineList.map((item) => (
                      <li className="menu-item">{item.name}</li>
                    ))}
                  </ul>
                </div>

                <div className="col ms-5 ps-5">
                  <h3
                    className="mt-5 mb-5 fs-3 text-success text-center"
                    style={{ fontFamily: "Roboto, serif" }}
                  >
                    COCKTAILS
                  </h3>
                  <ul
                    className="list-unstyled text-center"
                    style={{ fontFamily: "Roboto, serif" }}
                  >
                    {cocktailList.map((item) => (
                      <li className="menu-item">{item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Drink;
