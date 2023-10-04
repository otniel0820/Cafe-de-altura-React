import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CoffeeContextProvider from "./context/CoffeeContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import QuantityContextProvider from "./context/QuantityContext.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <CoffeeContextProvider>
        <CartContextProvider>
          <QuantityContextProvider>
            <App />
          </QuantityContextProvider>
        </CartContextProvider>
      </CoffeeContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
