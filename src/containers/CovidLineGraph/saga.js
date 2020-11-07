import { put, call, takeLatest } from "redux-saga/effects";
import * as Apis from "./apis";
import * as action from "./store/actions";
import ActionTypes from "./store/constants";

function* getCovidHistoryDataSaga() {
  const response = yield call(Apis.getCovidHistoryDataApi);
  const data = yield response.json();
  yield put(action.getCovidHistoryDataSuccess(data.cases));
}

export default [
  takeLatest(ActionTypes.GET_COVID_HISTORY, getCovidHistoryDataSaga),
];
