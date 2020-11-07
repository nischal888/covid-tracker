import urls from "../urls";

export const getCountriesNamesApi = () => {
  return fetch(urls.getCountriesName, {
    method: "GET",
    "Content-Type": "application/json",
  });
};

export const getSelectedCountryInfoApi = (id) => {
  const url =
    id === "worldwide"
      ? `${urls.getAllCountriesInfo}`
      : `${urls.getCountriesName}/${id}`;
  return fetch(url, { method: "GET", "Content-Type": "application/json" });
};
