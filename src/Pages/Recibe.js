import React from "react";
import Form from "../Component/Form";
import MealItem from "../Component/MealItem";
import "./style.css";

const Recipe = () => {
  return (
    <div>
      <div className="container">
        <div className="recibeContainer">
          <Form />
          <div className="container d-flex my-6">
          <div className="container py-3 recibeStyle">
          <MealItem/>
          </div>
          <div className="container py-3 recibeStyle">
          <MealItem/>
          </div>
          <div className="container py-3 recibeStyle">
          <MealItem/>
          </div>
          <div className="container py-3 recibeStyle">
          <MealItem/>
          </div>
          <div className="container py-3 recibeStyle">
          <MealItem/>
          </div>
          <div className="container py-3 recibeStyle">
          <MealItem/>
          </div>
          </div>
         
          

          
        </div>
      </div>
    </div>
  );
};

export default Recipe;
