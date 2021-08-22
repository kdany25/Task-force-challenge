import { createSlice } from "@reduxjs/toolkit";   
 
export const overallStats = createSlice({
  name: "allStats",
  initialState: {
    updated: 0,
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    active: 0,
    critical: 0,
    casesPerOneMillion: 0,
    deathsPerOneMillion: 0,
    tests: 0,
    testsPerOneMillion: 0,
    affectedCountries: 0,
  },
  reducers: {
    allCovidStats: (state, action) => {
        console.log('tests', state.tests);
        const {
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            active,
            critical,
            casesPerOneMillion,
            deathsPerOneMillion,
            tests,
            testsPerOneMillion,
            affectedCountries
        } = action.payload;
      state.updated = updated;
      state.cases = cases;
      state.todayCases = todayCases;
      state.deaths = deaths;
      state.todayDeaths = todayDeaths;
      state.recovered = recovered;
      state.active = active;
      state.critical = critical;
      state.casesPerOneMillion = casesPerOneMillion;
      state.deathsPerOneMillion = deathsPerOneMillion;
      state.tests = tests;
      state.testsPerOneMillion = testsPerOneMillion;
      state.affectedCountries = affectedCountries;
      
      console.log("payload", state);
    },
  },
});

export const { allCovidStats } = overallStats.actions;
// export const allStats = state => state.allStats;

export default overallStats.reducer;
