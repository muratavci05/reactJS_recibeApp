import React from "react";
import "./Component/style.css";
import Meal from "./Component/Meal";
import Recipe from "./Component/Recipe.js";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/footer";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
