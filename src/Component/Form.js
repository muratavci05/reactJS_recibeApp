import React from "react";
import "./style.css";
import MealItem from "./MealItem";

const Form = (props) => {
  return (
    <div className="container">
      
      <div className="row mainContainer">
        <h4 className="container h1Container">Search Your Food Recibe
        </h4>
        <form
          className="col-sm-10 formContainer"
          
        >
          <input
            className="form-control inputContainer"
            
            type="text"
            readonly
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
            </button>
        </form>
      </div>
      <div>
      </div>
      
    </div>
  );
};

export default Form;
