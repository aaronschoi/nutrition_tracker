import { useState } from "react";
import { logFood } from "../../../../../api/backend/api";

export default function SearchResult({ food }) {
  const [portion, setPortion] = useState("1");

  const addHandler = (event) => {
    const data = {
      food: food.description,
      fdcId: food.fdcId,
      user_id: "REDUX",
      portion,
    };
    logFood(data);
  };

  const changeHandler = (event) => {
    setPortion(event.target.value);
  };

  return (
    <li key={food.fdcId}>
      <h4>{food.description}</h4>
      {food.ingredients && <p>Ingredients: {food.ingredients}</p>}
      {food.brandName !== "none" && <p>Brand: {food.brandName}</p>}
      <input
        name="portion"
        type="text"
        value={portion}
        onChange={changeHandler}
      />
      <button type="button" onClick={addHandler}>
        +
      </button>
    </li>
  );
}
