import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../CovidMap.scss";
import "leaflet/dist/leaflet.css";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};
function CovidMapComponent({ selectedCountryInfo, countryNames }) {
  const [latLong, setlatLong] = useState([34.80746, -40.4796]);

  useEffect(() => {
    if (selectedCountryInfo) {
      setlatLong([
        selectedCountryInfo.countryInfo.lat,
        selectedCountryInfo.countryInfo.long,
      ]);
    }
  }, [selectedCountryInfo]);

  return (
    <div className="covidMap">
      {selectedCountryInfo && (
        <MapContainer
          key={+new Date()}
          center={latLong}
          zoom={3}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countryNames &&
            countryNames.map((country) => (
              <Circle
                key={country.country}
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={casesTypeColors.cases.hex}
                fillColor={casesTypeColors.cases.hex}
                fillOpacity={0.4}
                radius={
                  Math.sqrt(country.cases) * casesTypeColors.cases.multiplier
                }
              >
                <Popup>
                  <div className="info-container">
                    <div
                      className="info-flag"
                      style={{
                        backgroundImage: `url(${country.countryInfo.flag})`,
                      }}
                    ></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                      Cases: {numeral(country.cases).format("0,0")}
                    </div>
                    <div className="info-recovered">
                      Recovered: {numeral(country.recovered).format("0,0")}
                    </div>
                    <div className="info-deaths">
                      Deaths: {numeral(country.deaths).format("0,0")}
                    </div>
                  </div>
                </Popup>
              </Circle>
            ))}
        </MapContainer>
      )}
    </div>
  );
}

export default CovidMapComponent;
