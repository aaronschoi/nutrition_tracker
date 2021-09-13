import { useDispatch } from "react-redux";
import { deleteFood } from "../../../../api/backend/api";
import { useHistory } from "react-router-dom";

export default function Food({ food }) {

  const dispatch = useDispatch()
  const history = useHistory();

  const deleteHandler = (event) => {
    deleteFood(food).then(data => dispatch({type: "retrieve-foodlog", payload: data}))
  };

  const nutritionFactsHandler = event => {
    dispatch({type: "new-target", payload: food.fdcId})
    setTimeout(() => {
      history.push("/nutritionfacts")
    },2000)
    return () => alert("Clicking a little too fast there")
  }

  return (
        <li>
          <h2 onClick={nutritionFactsHandler}>{food.food}</h2>
          <div onClick={deleteHandler}>Trash Can</div>
        </li>
  )
}
