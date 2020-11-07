import urls from "../urls";

export const getCovidHistoryDataApi = () => {
  return fetch(`${urls.getCovidHistory}`, {
    method: "GET",
    "Content-Type": "application/json",
  });
};
