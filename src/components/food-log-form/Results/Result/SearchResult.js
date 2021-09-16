import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logFood } from "../../../../api/backend/api";
import { useHistory } from "react-router-dom";
import Loading from "../../../loaders/Loading";

export default function SearchResult({ food }) {
  const { user_id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [portion, setPortion] = useState("1");
  const [loading, setLoading] = useState(false);

  const addHandler = (event) => {
    const data = {
      food: food.description,
      fdcId: food.fdcId,
      user_id,
      portion,
    };
    setLoading(true);
    logFood(data)
      .then(({ data }) => dispatch({ type: "retrieve-foodlog", payload: data }))
      .then(() =>
        setTimeout(() => {
          history.push("/dashboard");
        }, 5000)
      );
  };

  const result = (
    <li className="foodlog-results-element">
      <div className="foodlog-results-element-content">
        <h4 className="foodlog-results-element-header">{food.description}</h4>
        {food.ingredients && <p>Ingredients: {food.ingredients}</p>}
        {food.brandName !== "none" && <p>Brand: {food.brandName}</p>}
      </div>
      <button className="foodlog-results-element-button" type="button" onClick={addHandler}>
        Add to Food Log
      </button>
    </li>
  );

  return (
    <>
      {loading ? (
        <Loading
          message={`${food.description} is being added to your food log...`}
        />
      ) : (
        result
      )}
    </>
  );
}
