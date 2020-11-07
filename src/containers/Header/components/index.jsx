import React, { useState, useEffect } from "react";
import "../Header.scss";
import { FormControl, Select, MenuItem } from "@material-ui/core";

function HeaderComponent(props) {
  const [country, setCountry] = useState("worldwide");
  useEffect(() => {
    props.getCountriesNames();
  }, []);

  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };
  useEffect(() => {
    props.getSelectedCountryInfo(country);
  }, [country]);
  const { countryNames } = props;

  return (
    <div className="app__header">
      <h1>Worlds' Covid Tracker</h1>
      <FormControl className="app__selectDropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">World Wide</MenuItem>
          {countryNames &&
            countryNames.map((name) => (
              <MenuItem key={name.country} value={name.countryInfo.iso2}>
                {name.country}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default HeaderComponent;
