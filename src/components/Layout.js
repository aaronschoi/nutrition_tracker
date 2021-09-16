import { Switch, Route } from "react-router-dom";
import AdminPanel from "./admin/AdminPanel";
import Dashboard from "./dashboard/Dashboard";
import FoodLogForm from "./food-log-form/FoodLogForm";
import Header from "./header/Header";
import NutritionFacts from "./nutrition-facts/NutritionFacts";
import Profile from "./profile/Profile";

export default function Layout() {

  return (
    <>
    <Header />
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
      <Route path="/admin">
        <AdminPanel />
      </Route>
    </Switch>
    </>
  );
}
