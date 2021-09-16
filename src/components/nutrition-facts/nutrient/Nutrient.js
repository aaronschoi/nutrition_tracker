export default function Nutrient({ nutrient }) {
  const fact = Object.values(nutrient)[0].includes("undefined") ? null : (
    <li className="nutrient-container">
      <div className="nutrient-content">
        <p>{Object.keys(nutrient)[0]}</p>
        <p>{Object.values(nutrient)[0]}</p>
      </div>
      <div className="line-thin"></div>
    </li>
  );

  return <>{fact}</>;
}
