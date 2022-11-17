import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
const Meal = () => {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const searchRecipe = (event) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  return (
    <React.Fragment>
      <div className="main">
        <div className="heading">
          <h1>
            Search Your Food Recipe <br />{" "}
            <h4 className="trtitle">Yemek Tarifinizi Arayınız</h4>
          </h1>
          <h4 style={{ fontSize: "18px" }}>
            <span style={{ color: "brown" }}>In this project; 
            </span>It is aimed to create a project with recipe API with React JS
          </h4>
        </div>
        <div className="searchBox">
          <input 
            placeholder="👨‍💻Recipe by Main Ingredient - for example >> Apple"
            type="search"
            className="search-bar"
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="container">
          {show ? <MealItem data={item} /> : "Not Found"}
        </div>
        <div className="indexContainer">
          <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Meal;
