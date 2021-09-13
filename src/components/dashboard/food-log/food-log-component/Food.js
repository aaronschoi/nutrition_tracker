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
    <li>
      <h2 onClick={nutritionFactsHandler}>{food.food}</h2>
      <div onClick={deleteHandler}>Trash Can</div>
    </li>
  );
}
