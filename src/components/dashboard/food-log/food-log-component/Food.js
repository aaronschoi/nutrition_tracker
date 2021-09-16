import { useDispatch, useSelector } from "react-redux";
import { deleteFood, getLog } from "../../../../api/backend/api";
import { searchByID } from "../../../../api/USDA/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Loading from "../../../loaders/Loading";

export default function Food({ food }) {
  const { usda, user_id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  console.log(food)

  const deleteHandler = (event) => {
    deleteFood(food)
      .then(() => getLog(user_id))
      .then(({ data }) =>
        dispatch({ type: "retrieve-foodlog", payload: data })
      );
  };

  const nutritionFactsHandler = (event) => {
    setLoading(true);
    searchByID({ fdcId: food.fdcId, apiKey: usda })
      .then( data => dispatch({ type: "new-target", payload: data.food }))
      .then(() => setTimeout(() => {history.push("/nutritionfacts")}, 6000));
    return () => alert("Clicking a little too fast there");
  };

  const logItem = loading ? <Loading message={`preparing the nutrition facts for the ${food.food}. . .`} /> : (<li className="foodlog-element">
  <h2 className="foodlog-element-header" onClick={nutritionFactsHandler}>{food.food}</h2>
  <img className="foodlog-trashcan" src={require('../../../../images/trashcan.svg').default} alt="trash can of removal" onClick={deleteHandler} />
</li>)

  return (
    <>
    {logItem}
    </>
  );
}
