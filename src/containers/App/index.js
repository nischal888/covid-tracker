import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import Header from "../Header";
import CovidInfoCard from "../CovidInfoCard";
import CovidMap from "../CovidMap";
import CasesByCountry from "../CasesByCountry";
import CovidLineGraph from "../CovidLineGraph";

function App({ selectedCountryInfo }) {
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        {selectedCountryInfo && (
          <div className="app__stats">
            <CovidInfoCard
              title="Covid-19 Cases"
              cases={selectedCountryInfo.todayCases}
              total={selectedCountryInfo.cases}
            />
            <CovidInfoCard
              title="Recovered"
              cases={selectedCountryInfo.todayRecovered}
              total={selectedCountryInfo.recovered}
            />
            <CovidInfoCard
              title="Deaths"
              cases={selectedCountryInfo.todayDeaths}
              total={selectedCountryInfo.deaths}
            />
          </div>
        )}

        <CovidMap />
      </div>
      <div className="app__right">
        <CasesByCountry />
        <CovidLineGraph />
      </div>
    </div>
  );
}

const mapStateToProps = ({ fetchCountriesNameReducer }) => {
  return {
    selectedCountryInfo: fetchCountriesNameReducer.selectedCountryInfo,
  };
};

export default connect(mapStateToProps)(App);
