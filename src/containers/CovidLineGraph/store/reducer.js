import ActionTypes from "./constants";

const initialState = {
  covidHistoryData: null,
  covidData: null,
};

const getCovidHistoryDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_COVID_HISTORY_SUCCESS:
      const { payload } = action;
      const cData = [];
      for (let prop in payload) {
        let newDataPoint = {
          x: prop,
          y: payload[prop],
        };
        cData.push(newDataPoint);
      }
      return {
        ...state,
        covidHistoryData: cData,
        covidData: action.payload,
      };
    default:
      return state;
  }
};

export default getCovidHistoryDataReducer;
