import ActionTypes from "./constants";

export const getCovidHistoryData = () => {
  return {
    type: ActionTypes.GET_COVID_HISTORY,
  };
};
export const getCovidHistoryDataSuccess = (payload) => {
  return {
    type: ActionTypes.GET_COVID_HISTORY_SUCCESS,
    payload,
  };
};
