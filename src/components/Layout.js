import { Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import FoodLogForm from "./food-log-form/FoodLogForm";
import NutritionFacts from "./nutrition-facts/NutritionFacts";
import Profile from "./profile/Profile";

export default function Layout() {

  return (
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/foodlog">
        <FoodLogForm />
      </Route>
      <Route path="/nutritionfacts">
          <NutritionFacts />
      </Route>
    </Switch>
  );
}
