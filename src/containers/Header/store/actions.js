import ActionTypes from "./constants";

export const getCountriesNames = () => {
  return {
    type: ActionTypes.FETCH_COUNTRY_NAMES,
  };
};
export const getCountriesNamesSuccess = (names) => {
  return {
    type: ActionTypes.FETCH_COUNTRY_NAMES_SUCCESS,
    names,
  };
};
export const getSelectedCountryInfo = (id) => {
  return {
    type: ActionTypes.GET_SELECTED_COUNTRY_INFO,
    id,
  };
};
export const getSelectedCountryInfo_Success = (payload) => {
  return {
    type: ActionTypes.GET_SELECTED_COUNTRY_INFO_SUCCESS,
    payload,
  };
};
