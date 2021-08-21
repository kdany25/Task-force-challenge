import React from "react";
import "./Styles/MainCovidTest.css";

const MainCovid = () => {
  return (
    <div className="card">
      <div className="card-text">
        <div className="numer">2,188,881</div>
        <span className="cum"> Cumulatively </span>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="perday">11,270</div>
          <div className="action">Tests</div>
          <div className="total">2,188,881</div>
        </div>

        <div className="stat">
          <div className="perday">619</div>
          <div className="action">Positive cases</div>
          <div className="total">4,254</div>
        </div>

        <div className="stat">
          <div className="perday">20</div>
          <div className="action">hospitalised</div>
          <div className="total">1,886</div>
        </div>

        <div className="stat">
          <div className="perday">19</div>
          <div className="action">recovered</div>
          <div className="total">88,881</div>
        </div>

        <div className="stat">
          <div className="perday">9</div>
          <div className="action">death</div>
          <div className="total">920</div>
        </div>

        <div className="stat">
          <div className="perday">48,660</div>
          <div className="action">vaccinated</div>
          <div className="total">729,130</div>
        </div>
      </div>
    </div>
  );
};
export default MainCovid;
