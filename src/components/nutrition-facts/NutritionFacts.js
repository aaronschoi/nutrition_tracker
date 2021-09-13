import { useSelector } from "react-redux"
import Nutrient from "./nutrient/Nutrient";
import { v4 as uid } from "uuid";

export default function NutritionFacts() {

    const { targetFood } = useSelector(state => state)

    return (
        <div>
            <h2>Nutrition Facts</h2>
            <h3>{targetFood.description}</h3>
            <div>
                <div>Serving Size {targetFood.serving}</div>
            </div>
            <div></div>
            <div>
                <div>Amount Per Serving</div>
                <div></div>
                <div>
                    <div>Calories {targetFood.nutrients.Energy}</div>
                </div>
            {targetFood.nutrients.map(nutrient => {
                if(Object.keys(nutrient)[0] !== "Energy"){
                    return <Nutrient key={uid()} nutrient={nutrient} />
                }
                return null;
            })}
            </div>
        </div>
    )
}