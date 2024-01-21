import { React, createContext, useState, useEffect } from "react";
import { getCoffee } from "../utils/getCoffee";

export const CoffeeContext = createContext(null);

const CoffeeContextProvider = ({ children }) => {
  const [coffeeCard, setCoffeeCard] = useState([]);

  useEffect(() => {
    getCoffee("https://cafe-de-altura.vercel.app/api/products").then((data) => {
      setCoffeeCard(data.products);
    });
  }, []);

  return (
    <div>
      <CoffeeContext.Provider value={{ coffeeCard, setCoffeeCard }}>
        {children}
      </CoffeeContext.Provider>
    </div>
  );
};

export default CoffeeContextProvider;
