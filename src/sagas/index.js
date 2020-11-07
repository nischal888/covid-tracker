import { all } from "redux-saga/effects";
import fetchCountriesNameSaga from "../containers/Header/saga";
import getCovidHistoryDataSaga from "../containers/CovidLineGraph/saga";
function* rootSaga() {
  yield all([...fetchCountriesNameSaga, ...getCovidHistoryDataSaga]);
}

export default rootSaga;
