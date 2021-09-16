import { useSelector } from "react-redux";
import Food from "./food-log-component/Food";
import FoodLogContainer from "./FoodLogContainer";

export default function FoodLog() {

    const foodlog = useSelector(state => state.foodlog)

    return(
        <FoodLogContainer>
            {foodlog.length > 0 && foodlog.map( food => {
                return <Food key={food.fdcId} food={food} /> 
            })}
            <li className="foodlog-list-padding">
            </li>
        </FoodLogContainer>
    )
}