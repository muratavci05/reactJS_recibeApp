import React from "react";
import { useNavigate } from "react-router-dom";
const MealItem = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="card"
                key={item.idMeal}
                onClick={() => navigate(`/${item.idMeal}`)}
              >
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
              </div>
            );
          })}
    </React.Fragment>
  );
};
export default MealItem;
