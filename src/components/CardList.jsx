import { React, useState, useEffect } from "react";
import CardCafe from "./CardCafe";
import arrow from '../assets/arrow.png'

export const getCoffee = async (url) => {
  const res = await fetch(url);
  return res.json();
};
const CardList = () => {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    getCoffee(
      "https://cafe-de-altura.vercel.app/api/products/?offset=0&limit=4"
    ).then((data) => {
      setCoffee(data.products);
    });
  }, []);
  const fourCoffee = coffee.slice(0, 4);

  return (
    <div className="flex flex-col p-[2.5em] items-center gap-[2.5em]">
        <h2 className="text-[1.5em] not-italic text-[#2A5B45] font-medium">Novedades</h2>
      <div className="flex justify-center items-center gap-[1.5em]">
        {fourCoffee.map((cafe) => {
          return (
            <CardCafe
              key={cafe._id}
              img={cafe.img_url}
              name={cafe.brand}
              price={cafe.price}
            />
          );
        })}
      </div>
      <section className="flex items-center gap-[1em]">
        <p className="text-[0.9em] not-italic font-semibold underline">Ver todos</p>
        <img src={arrow} alt="" className="w-[1.5em] h-[1.5em]" />
      </section>
    </div>
  );
};

export default CardList;
