import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

import ActionTypes from "./store/constants";
import * as Apis from "./apis";
import * as action from "./store/actions";

function* getCountriesNamesSaga() {
  const response = yield call(Apis.getCountriesNamesApi);
  const data = yield response.json();
  yield put(action.getCountriesNamesSuccess(data));
}
function* getSelectedCountryInfoSaga({ id }) {
  const response = yield call(Apis.getSelectedCountryInfoApi, id);
  const data = yield response.json();
  for (let prop in data) {
    if (!data.hasOwnProperty("countryInfo")) {
      data.countryInfo = { lat: 34.80746, long: -40.4796 };
    }
  }
  yield put(action.getSelectedCountryInfo_Success(data));
}

export default [
  takeLatest(ActionTypes.FETCH_COUNTRY_NAMES, getCountriesNamesSaga),
  takeEvery(ActionTypes.GET_SELECTED_COUNTRY_INFO, getSelectedCountryInfoSaga),
];
