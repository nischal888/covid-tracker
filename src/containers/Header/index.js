import HeaderComponent from "./components";
import { connect } from "react-redux";
import { getCountriesNames, getSelectedCountryInfo } from "./store/actions";
const Header = HeaderComponent;
const mapStateToProps = ({ fetchCountriesNameReducer }) => {
  return {
    countryNames: fetchCountriesNameReducer.countryNames,
  };
};
const mapDispatchToProps = {
  getCountriesNames,
  getSelectedCountryInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
