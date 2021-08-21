import React from "react";
import "./style/Search.css";
const Search = () => {
  return (
    <div>
      <select className="select">
        <option>Rwanda</option>
        <option>Bururndi</option>
        <option>Usa</option>
        <option>UK</option>
      </select>
      <input
        type="date"
        id="start"
        name="trip-start"
        value="2021-08-20"
        min="2020-01-01"
        max="2021-08-22"
      />
      <button>Submit</button>
    </div>
  );
};
export default Search;
