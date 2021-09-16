import SearchResult from "./Result/SearchResult";
import { v4 as uid } from "uuid";

export default function SearchResults({results}) {

  return (
    <>
    <h3 className="foodlog-results-header">Choose the one that most closely describes your food. Results with no ingredients are the ingredients themselves.</h3>
    <ul className="foodlog-results-container">
      {results.map(food => {
          return <SearchResult food={food} key={uid()} />
      })}
    </ul>
    </>
  );
}
