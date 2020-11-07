let baseURL = "https://disease.sh/v3/covid-19";
const urls = {
  getCountriesName: `${baseURL}/countries`,
  getAllCountriesInfo: `${baseURL}/all`,
  getCovidHistory: `${baseURL}/historical/all?lastdays=120`,
};

export default urls;
