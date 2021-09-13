import { useState, useEffect } from "react";

export default function Greeting() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().getHours());
  });

  const greeting = time > 11 ? "Afternoon" : time > 16 ? "Evening" : "Morning";

  return <div>Good {greeting}!</div>;
}
