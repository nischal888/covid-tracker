import CovidLineGraphComponents from "./components";
import { connect } from "react-redux";
import { getCovidHistoryData } from "./store/actions";

const mapStateToProps = ({ getCovidHistoryDataReducer }) => {
  return {
    covidHistoryData: getCovidHistoryDataReducer.covidHistoryData,
  };
};
const mapDispatchToProps = {
  getCovidHistoryData,
};
const CovidLineGraph = CovidLineGraphComponents;
export default connect(mapStateToProps, mapDispatchToProps)(CovidLineGraph);
