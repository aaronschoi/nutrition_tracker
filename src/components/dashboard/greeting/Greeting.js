import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Greeting() {

  const { first } = useSelector(state => state.user)

  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().getHours());
  }, []);

  const greeting = (time > 11 & time < 16) ? "Afternoon" : time > 16 ? "Evening" : "Morning";

  return <div className="dashboard-greeting">Good {greeting}, {first}!</div>;
}
