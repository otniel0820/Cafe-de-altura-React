import React from "react";
import imgCafe from "../assets/imgCafe.png";
import cafeteria from "../assets/cafeteria.png";

const ImgCafeteriaPlanta = ({ imgWrapper }) => {
    
  return (
    <div>
      {imgWrapper === "planta" ? (
        <img src={imgCafe} alt="" className="h-[24.4em] rounded-[1.25em]" />
      ) : (
        <img src={cafeteria} alt="" className="h-[24.4em] rounded-[1.25em]" />
      )}
    </div>
  );
};

export default ImgCafeteriaPlanta;
