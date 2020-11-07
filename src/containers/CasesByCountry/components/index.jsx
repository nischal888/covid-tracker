import React, { useEffect, useState } from "react";
import "../CasesByCountry.scss";

import { Card, CardContent } from "@material-ui/core";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

function CasesByCountryComponent({ countryNames }) {
  const [tableData, setTableData] = useState([]);
  const [toggleArr, setToggleArr] = useState(true);
  useEffect(() => {
    setTableData(countryNames);
  }, [countryNames]);

  const sortByNames = () => {
    const sorted = [...tableData].sort(() => {
      return 0.5 - Math.random();
    });
    setTableData(sorted);
    setToggleArr(!toggleArr);
  };
  // const sortByNames = (data) => {
  //   console.log("fdf");
  //   return data.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  // };
  // const sortByNames = () => {
  //   const newList = counNames.sort();
  //   return newList;
  // };
  return (
    <Card className="casesByCountry">
      <CardContent>
        <h3 onClick={sortByNames} className="casesByCountry__title">
          Cases by Country
          {toggleArr ? (
            <ArrowDownwardOutlinedIcon className="casesByCountry__icon" />
          ) : (
            <ArrowUpwardOutlinedIcon className="casesByCountry__icon" />
          )}
        </h3>
        <div className="table">
          {tableData &&
            tableData.map((item) => (
              <tr key={item.country}>
                <td>{item.country}</td>
                <td>
                  <b>{item.cases.toLocaleString()}</b>
                </td>
              </tr>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CasesByCountryComponent;
