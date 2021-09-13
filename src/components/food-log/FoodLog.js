import Food from "./food-log-component/Food";
import FoodLogForm from "./food-log-form/FoodLogForm";
import FoodLogContainer from "./FoodLogContainer";

export default function FoodLog() {
    return(
        <FoodLogContainer>
            <FoodLogForm />
        </ FoodLogContainer>
    )
}