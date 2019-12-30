import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SectorData from "../Extracted_Data/sectorData";
import CountryData from "../Extracted_Data/countryData";
import TopicData from "../Extracted_Data/topicData";
import RegionData from "../Extracted_Data/regionData";
import PestleData from "../Extracted_Data/pestleData";
let map1 = new Map([
  [1, "Vague"],
  [2, "Early stage"],
  [3, "Gaining Traction"],
  [4, "Evolving"],
  [5, "Established"],
  [6, "Expansionary"],
  [7, "Growing"]
]);

let map2 = new Map([
  [1, "Potential"],
  [2, "Possible"],
  [3, "Probabble"],
  [4, "Business as Usual"]
]);

function Sort(arg) {
  arg.sort(function(a, b) {
    return b.value - a.value;
  });
}
Sort(SectorData);
Sort(CountryData);
Sort(TopicData);
Sort(RegionData);
Sort(PestleData);

const useStyles = makeStyles({
  card: {
    // display: "flex",
    // width: 1000,
    // height: 150,
    // margin: 20,
    // justifyContent: "space-around"
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cardContent: {
    width: 200,
    height: 120,
    textAlign: "center",
    margin: 10,
    padding: 10
  }
});
SectorData.splice(1, 1);
TopicData.splice(1, 1);
CountryData.splice(0, 1);
RegionData.splice(0, 1);
PestleData.splice(3, 1);
export default function DataCard(props) {
  const classes = useStyles();
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className={classes.card}>
      {(() => {
        switch (props.filter) {
          case "sector":
            return SectorData.slice(0, 10).map((item, index) => (
              <Link
                underline="none"
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Card className={classes.cardContent}>
                  <CardContent style={{ color: getRandomColor() }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h5"
                      align="center"
                    >
                      {item.text}
                    </Typography>

                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="body2"
                      component="p"
                      align="center"
                    >
                      {item.value} | {map1.get(item.relevance)} |{" "}
                      {map2.get(item.likelihood)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ));
          case "topic":
            return TopicData.slice(0, 10).map((item, index) => (
              <Link
                underline="none"
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Card className={classes.cardContent}>
                  <CardContent style={{ color: getRandomColor() }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h5"
                      align="center"
                    >
                      {item.text}
                    </Typography>

                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="body2"
                      component="p"
                      align="center"
                    >
                      {item.value} | {map1.get(item.relevance)} |{" "}
                      {map2.get(item.likelihood)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ));
          case "country":
            return CountryData.slice(0, 10).map((item, index) => (
              <Link
                underline="none"
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Card className={classes.cardContent}>
                  <CardContent style={{ color: getRandomColor() }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h5"
                      align="center"
                    >
                      {item.text}
                    </Typography>

                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="body2"
                      component="p"
                      align="center"
                    >
                      {item.value} | {map1.get(item.relevance)} |{" "}
                      {map2.get(item.likelihood)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ));
          case "region":
            return RegionData.slice(0, 10).map((item, index) => (
              <Link
                underline="none"
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Card className={classes.cardContent}>
                  <CardContent style={{ color: getRandomColor() }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h5"
                      align="center"
                    >
                      {item.text}
                    </Typography>

                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="body2"
                      component="p"
                      align="center"
                    >
                      {item.value} | {map1.get(item.relevance)} |{" "}
                      {map2.get(item.likelihood)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ));
          case "pestle":
            return PestleData.slice(0, 10).map((item, index) => (
              <Link
                underline="none"
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Card className={classes.cardContent}>
                  <CardContent style={{ color: getRandomColor() }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h5"
                      align="center"
                    >
                      {item.text}
                    </Typography>

                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="body2"
                      component="p"
                      align="center"
                    >
                      {item.value} | {map1.get(item.relevance)} |{" "}
                      {map2.get(item.likelihood)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ));
          default:
            return <div></div>;
        }
      })()}
    </div>
  );
}
