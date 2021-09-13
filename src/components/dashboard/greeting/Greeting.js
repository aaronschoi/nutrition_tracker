import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Greeting() {

  const { first } = useSelector(state => state.user)

  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().getHours());
  });

  const greeting = time > 11 ? "Afternoon" : time > 16 ? "Evening" : "Morning";

  return <div>Good {greeting}, {first}!</div>;
}
