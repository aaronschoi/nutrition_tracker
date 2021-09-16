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
    <div className="foodlog-form-container">
    <h2 className="foodlog-form-header">Search</h2>
    <form className="foodlog-form-search" onSubmit={submitHandler}>
      <input
        className="general-input foodlog-form-input"
        name="query"
        type="text"
        value={userInput.query}
        onChange={changeHandler}
        placeholder="Search. . ."
      />
      <input
        className="general-input foodlog-form-input"
        name="brandName"
        type="text"
        value={userInput.brandName}
        onChange={changeHandler}
        placeholder="Brand Name (if applicable)"
      />
      <button type="submit">Search</button>
    </form>
    { results.length > 0 && <SearchResults results={results} /> }
    </div>
  );
}
