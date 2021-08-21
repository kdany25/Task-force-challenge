import React from "react";
import "./style/StatContinent.css";

const Continent = () => {
  const contentArray = ['1', '2', '3', '4'];

  return (
    <div className="continentStatsContainer">
      <h1>PER CONTINENTS</h1>
    <div className="statsArea"> 
    {contentArray.map(() => (
    <div className="cardd">
      <div className="left">
        <div className="cont"> Africa</div>
        <div>
        <div className="perday">11,270</div>
        <div className="case">New Cases</div>

        </div>
        <div className="allcases">All Cases : 22,188,881</div>
      </div>
      <div className="right">
        <div className="new-death">
          <div className="number">619</div>
          <div className="text">New Death</div>
          <div className="total">Total Death</div>
        </div>
        <div className="new-recovered">
          <div className="number">12,955</div>
          <div className="text">Newly recovered</div>
          <div className="total">Total recovered12,254,254</div>
        </div>
        
        <div className="new-vaccine">
          <div className="number">1,878,564</div>
          <div className="text">new vaccinated</div>
          <div className="total">total vaccinated : 14,784,254</div>
        </div>
      </div>
    </div>
    ))}
    </div> 
    </div>
  );
};
export default Continent;