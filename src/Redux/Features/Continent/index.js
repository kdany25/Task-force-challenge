import { createSlice } from "@reduxjs/toolkit";

export const continentStats = createSlice({
  name: "continent",
  initialState: {
    updated: 1587140875599,
    cases: 345970,
    todayCases: 12773,
    deaths: 12426,
    todayDeaths: 358,
    recovered: 165739,
    active: 167805,
    critical: 6477,
    continent: "Asia",
  },
  reducers: {
    statPerContinent: (state, action) => {
      const {
        updated,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        continent,
      } = action.payload;
      state.updated = updated;
      state.cases = cases;
      state.todayCases = todayCases;
      state.deaths = deaths;
      state.todayDeaths = todayDeaths;
      state.recovered = recovered;
      state.active = active;
      state.critical = critical;
      state.continent = continent;
    },
  },
});
export const { statPerContinent } = continentStats.actions;

export default continentStats.reducer;
