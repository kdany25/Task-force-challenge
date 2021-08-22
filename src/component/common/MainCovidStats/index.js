import React  , { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import formatNumber from "../../../Helpers/formatNumber";
import getAllStats from "../../../Helpers/getAllStats";
import { allCovidStats, allStats } from "../../../Redux/Features/OverAllStats";
import "./Styles/MainCovidTest.css";

const MainCovid = () => {
  const  allStatss  = useSelector(state => state.allStatss);
  const dispatch = useDispatch();
  

  useEffect( async () => {
    const { data } = await getAllStats();
    if(data) {
      dispatch(allCovidStats(data));
    }
  });


  const { tests, testsPerOneMillion,todayDeaths , deaths ,cases , todayCases , recovered } = allStatss;
  
  return (
    <div className="card">
      <div className="card-text">
        <div className="numer">2,188,881</div>
        <span className="cum"> Cumulatively </span>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="perday">{formatNumber(testsPerOneMillion)}</div>
          <div className="action">Tests</div>
          <div className="total">{formatNumber(tests)}</div>
        </div>

        <div className="stat">
          <div className="perday">{formatNumber(todayCases)}</div>
          <div className="action">Positive cases</div>
          <div className="total">{formatNumber(cases)}</div>
        </div>

        <div className="stat">
          <div className="perday">207</div>
          <div className="action">hospitalised</div>
          <div className="total">1,886</div>
        </div>

        <div className="stat">
          <div className="perday">897</div>
          <div className="action">recovered</div>
          <div className="total">{formatNumber(recovered)}</div>
        </div>

        <div className="stat">
          <div className="perday">{todayDeaths}</div>
          <div className="action">death</div>
          <div className="total">{deaths}</div>
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
