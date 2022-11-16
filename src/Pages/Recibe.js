import React from "react";
import Form from "../Component/Form";
import MealItem from "../Component/MealItem";
import "./style.css"

const Recipe = () =>{

    return(

        <div>
            <div className="container">
                <div>
                <Form/>
                </div>
                <div className="container d-flex recibeContainer">
                <MealItem/>
                <MealItem/>
                <MealItem/>
                <MealItem/>
                <MealItem/>
                <MealItem/>
                </div>
                

                
            </div>
        </div>

    );
};

export default Recipe;