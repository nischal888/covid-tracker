import CasesByCountryComponent from "./components";
import { connect } from "react-redux";

const CasesByCountry = CasesByCountryComponent;
const mapStateToProps = ({ fetchCountriesNameReducer }) => {
  return {
    countryNames: fetchCountriesNameReducer.countryNames,
  };
};
export default connect(mapStateToProps)(CasesByCountry);
