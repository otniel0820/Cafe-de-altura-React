import { React, useState, useEffect, useContext } from "react";
import CardCafe from "./CardCafe";
import { CoffeeContext } from "../context/CoffeeContext";
import LinkArrow from "./LinkArrow";

const CardList = ({ cantCoffee, title, wrap, isShow }) => {
  const { coffeeCard, setCoffeeCard } = useContext(CoffeeContext);

  const orderCoffee = coffeeCard.sort((a,b)=>(a.price - b.price))
  const availableCoffee = orderCoffee.filter(cafe=> cafe.available!== false)
  const unavailableCoffee = orderCoffee.filter(cafe=> cafe.available !==true)
  const unionCoffee = availableCoffee.concat(unavailableCoffee)
  

  const allCoffee =
    cantCoffee === "landing" ? unionCoffee.slice(0, 4) : unionCoffee.slice(0, 9);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col p-[2.5em] items-center justify-center gap-[2.5em] w-[80em]">
        <h2 className="text-[1.5em] not-italic text-[#2A5B45] font-medium">
          {title === "nov" ? "Novedades" : "Últimos orígenes"}
        </h2>
        <div
          className={`flex justify-center items-center gap-[1.5em] ${
            wrap === "store" ? "flex-wrap" : ""
          }`}
        >
          {allCoffee?.map((cafe,i) => {
            return (
              <CardCafe
                key={i}
                img={cafe?.img_url}
                name={cafe.brand}
                price={cafe.price}
                id={cafe._id}
                available={cafe.available}
              />
            );
          })}
        </div>

        <section className="flex items-center gap-[1em]">
          {isShow && (
            <LinkArrow
              colorArrow={"black"}
              text={"Ver todos"}
              colorText={"black"}
              ruta={"ver todos"}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default CardList;
