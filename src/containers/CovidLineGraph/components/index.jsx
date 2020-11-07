import React, { useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import { Line } from "react-chartjs-2";

import numeral from "numeral";
//https://github.com/jerairrest/react-chartjs-2

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
function CovidLineGraphComponents(props) {
  useEffect(() => {
    props.getCovidHistoryData();
  }, []);
  const { covidHistoryData } = props;
  return (
    <Card>
      <CardContent>
        <h3 style={{ marginBottom: "20px" }}>Cases History</h3>
        {covidHistoryData?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  data: covidHistoryData,
                  backgroundColor: "#e67e22",
                  borderColor: "#d35400",
                },
              ],
            }}
            options={options}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default CovidLineGraphComponents;
