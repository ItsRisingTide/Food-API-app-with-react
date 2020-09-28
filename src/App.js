import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe.js";

const App = () => {
  const APP_ID = "2878b8b9";
  const APP_KEY = "0ecc70631845d6b3ce7654177b27d66a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, Setquery] = useState("chicken");

  useEffect(() => {
    console.log("Effect has been run");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
    console.log(search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    Setquery(search);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="footer">RisingTide</div>

        <form onSubmit={getSearch} className="search">
          <input
            type="text"
            className="search__input"
            value={search}
            onChange={updateSearch}
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>

        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              label={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
              image={recipe.recipe.image}
              protein={recipe.recipe.totalNutrients.PROCNT["quantity"]}
              fat={recipe.recipe.totalNutrients.FAT["quantity"]}
              carbs={recipe.recipe.totalNutrients.CHOCDF["quantity"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
