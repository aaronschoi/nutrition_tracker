import { useDispatch, useSelector } from "react-redux";
import { deleteFood, getLog } from "../../../../api/backend/api";
import { searchByID } from "../../../../api/USDA/api";
import { useHistory } from "react-router-dom";

export default function Food({ food }) {
  const { usda, user_id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = (event) => {
    deleteFood(food)
      .then(() => getLog(user_id))
      .then(({ data }) =>
        dispatch({ type: "retrieve-foodlog", payload: data })
      );
  };

  const nutritionFactsHandler = (event) => {
    searchByID({ fdcId: food.fdcId, apiKey: usda })
      .then( data => dispatch({ type: "new-target", payload: data.food }))
      .then(() => history.push("/nutritionfacts"));
    return () => alert("Clicking a little too fast there");
  };

  return (
    <li className="foodlog-element">
      <h2 className="foodlog-element-header" onClick={nutritionFactsHandler}>{food.food}</h2>
      <img className="foodlog-trashcan" src={require('../../../../images/trashcan.svg').default} alt="trash can of removal" onClick={deleteHandler} />
    </li>
  );
}
