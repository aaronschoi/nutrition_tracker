import SearchResult from "./Result/SearchResult";

export default function SearchResults({results}) {

  return (
    <div>
        <h3>Choose the one that most closely describes your food.</h3>
    <ul>
      {results.map(food => {
          return <SearchResult food={food} key={food.fcdId} />
      })}
    </ul>
    </div>
  );
}
