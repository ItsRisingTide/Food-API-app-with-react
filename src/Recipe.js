import React from "react";
import style from "./recipe.module.css";
import Ingredient from "./Ingredient.js";

const Recipe = ({
  label,
  calories,
  image,
  ingredients,
  protein,
  fat,
  carbs,
}) => {
  return (
    <div className={style.recipe}>
      <div className={style.recipe__left}>
        <img src={image} alt="" className={style.recipe__img} />
        <div className={style.recipe__background}></div>

        <h2 className={style.recipe__label}>{label}</h2>
      </div>

      <div className={style.recipe__right}>
        <div className={style.recipe__subtitle}>Ingredients</div>

        <ul className={style.ingredients}>
          {ingredients.map((ingredient) => (
            <li className={style.ingredients__item}>{ingredient.text}</li>
          ))}
        </ul>
        <div className={style.recipe__subtitle}>Nutrition</div>
        <div className={style.nutrition}>
          <div className={style.nutrition__item}>
            <div className={style.nutrition__text}>Calories</div>
            <div className={style.nutrition__stats}>
              {Math.round(calories)}cal
            </div>
          </div>
          <div className={style.nutrition__item}>
            <div className={style.nutrition__text}>Protein</div>
            <div className={style.nutrition__stats}>
              {Math.round(protein)}mg
            </div>
          </div>
          <div className={style.nutrition__item}>
            <div className={style.nutrition__text}>Fat</div>
            <div className={style.nutrition__stats}>{Math.round(fat)}mg</div>
          </div>
          <div className={style.nutrition__item}>
            <div className={style.nutrition__text}>Carbs</div>
            <div className={style.nutrition__stats}>{Math.round(carbs)}mg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
