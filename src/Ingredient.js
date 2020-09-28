import React from "react";
import style from "./ingredient.module.css";

const Ingredient = ({ text, weight, image }) => {
  return (
    <div className={style.ingredient}>
      <div className={style.instruction}>{text}</div>
      <div className={style.weight}>{weight}v</div>
      {/* <img src={image} alt="" className={style.img} /> */}
    </div>
  );
};

export default Ingredient;
