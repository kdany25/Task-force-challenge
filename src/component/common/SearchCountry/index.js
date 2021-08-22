import React from "react";
import Select from 'react'
import "./style/Search.css";
const Search = () => {
  return (
    <div className="box">
      <div className="titles">
        <h2>UPDATE</h2>
        <h4>Search Country</h4>
      </div>
      <div className="sectionHolder">
        <div className="dateSec">
          <select className="coun">
            <option>Rwanda</option>
          </select>
          <input type="date" class="datepicker" value="2021-02-14"/> 
          <input className="butt" type="submit" value="SUBMIT"/>
        </div>
      </div>
    </div>
  );
};
export default Search;
