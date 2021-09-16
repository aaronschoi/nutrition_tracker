import { useSelector } from "react-redux"
import Nutrient from "./nutrient/Nutrient";
import { v4 as uid } from "uuid";

export default function NutritionFacts() {

    const { targetFood } = useSelector(state => state)

    console.log(targetFood)

    return (
        <div className="nutritionfacts-container">
        <div className="nutritionfacts">
            <h2 className="nutritionfacts-title">Nutrition Facts</h2>
            <div className="line-thin"></div>
            <div className="nutritionfacts-serving-container">
            <h3 className="nutritionfacts-header">{targetFood.description}</h3>
                <p className="nutritionfacts-serving">Serving Size {targetFood.serving}</p>
            </div>
            <div className="line-thick"></div>
            <div>
                <div>Amount Per Serving</div>
                <div className="line-thin"></div>
                <ul className="nutrients-container">
            {targetFood.nutrients.map(nutrient => {
                if(Object.keys(nutrient)[0] !== "Energy"){
                    return <Nutrient key={uid()} nutrient={nutrient} />
                }
                return null;
            })}
            </ul>
            </div>
        </div>
        </div>
    )
}