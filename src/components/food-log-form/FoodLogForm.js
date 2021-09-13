import { useState } from "react";
import { useSelector } from "react-redux";
import { searchByQuery } from "../../api/USDA/api";
import SearchResults from "./Results/SearchResults";

export default function FoodLogForm() {

  const { usda } = useSelector(state => state.user)

  const [userInput, setUserInput] = useState({
    query: "",
    brandName: "",
  });

  const [ results, setResults ] = useState([]);

  const changeHandler = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    searchByQuery({...userInput, apiKey: usda }).then(response => setResults(response.results))
  };

  return (
    <>
    <h2>Search</h2>
    <form onSubmit={submitHandler}>
      <input
        name="query"
        type="text"
        value={userInput.query}
        onChange={changeHandler}
        placeholder="Search. . ."
      />
      <input
        name="brandName"
        type="text"
        value={userInput.brandName}
        onChange={changeHandler}
        placeholder="Enter the brand name of the product here (if you want to)."
      />
      <button type="submit">Search</button>
    </form>
    { results.length > 0 && <SearchResults results={results} /> }
    </>
  );
}
