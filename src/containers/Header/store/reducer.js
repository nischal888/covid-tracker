import ActionTypes from "./constants";

const initialState = {
  countryNames: null,
  selectedCountryInfo: null,
};

const fetchCountriesNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COUNTRY_NAMES_SUCCESS:
      return {
        ...state,
        countryNames: action.names,
      };
    case ActionTypes.GET_SELECTED_COUNTRY_INFO_SUCCESS:
      return {
        ...state,
        selectedCountryInfo: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCountriesNameReducer;
