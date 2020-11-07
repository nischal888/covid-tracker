import CovidMapComponent from "./components";
import { connect } from "react-redux";

const mapStateToProps = ({
  fetchCountriesNameReducer,
  getCovidHistoryDataReducer,
}) => {
  return {
    selectedCountryInfo: fetchCountriesNameReducer.selectedCountryInfo,
    countryNames: fetchCountriesNameReducer.countryNames,
    covidData: getCovidHistoryDataReducer.covidData,
  };
};
const CovidMap = CovidMapComponent;

export default connect(mapStateToProps)(CovidMap);
