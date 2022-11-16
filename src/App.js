import React from "react";
import "./Components/style.css";
import Meal from "./Components/Meal";
import Recipe from "./Components/Recipe";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
