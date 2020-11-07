import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../CovidInfoCard.scss";
function CovidInfoCardComponent({ title, cases, total }) {
  return (
    <Card className="infoCard">
      <CardContent>
        <Typography className="infoCard__text" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoCard__cases">{cases.toLocaleString()}</h2>
        <Typography className="infoCard__text" color="textSecondary">
          {total.toLocaleString()} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CovidInfoCardComponent;
