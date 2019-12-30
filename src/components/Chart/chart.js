import React from "react";
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

import SectorData from "../Extracted_Data/sectorData";
import TopicData from "../Extracted_Data/topicData";
import CountryData from "../Extracted_Data/countryData";
import RegionData from "../Extracted_Data/regionData";
import PestleData from "../Extracted_Data/pestleData";

const useStyles = makeStyles({
  card: {
    width: 900
  }
});

////////////////////////counting occurence

let words;
export default function Charts(props) {
  const classes = useStyles();

  if (props.filter === "topic") {
    words = TopicData;
  } else if (props.filter === "sector") {
    words = SectorData;
  } else if (props.filter === "country") {
    words = CountryData;
  } else if (props.filter === "region") {
    words = RegionData;
  } else if (props.filter === "pestle") {
    words = PestleData;
  }

  //
  const getCallback = callback => {
    return (word, event) => {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
          props.onSideDataChange(word.text, word.value, true);
        })
        .transition()
        .attr("background", "red")
        .attr("font-size", isActive ? "200%" : "100%");
    };
  };

  const callbacks = {
    getWordTooltip: word => `Frequency (${word.value})`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
  };
  //

  return (
    <Card className={classes.card}>
      <CardContent>
        <ReactWordcloud
          words={words}
          callbacks={callbacks}
          options={{
            colors: [
              "#1f77b4",
              "#ff7f0e",
              "#2ca02c",
              "#d62728",
              "#9467bd",
              "#8c564b",
              "#2980b9",
              "#BA5370",
              "#f44336",
              "#44A08D",
              "#b20a2c"
            ],
            rotations: 2,
            deterministic: true,
            rotationAngles: [0, 90],
            scale: "log",
            spiral: "rectangular",
            padding: 2,
            fontSizes: [10, 25],
            fontWeight: "bold",
            fontFamily: "Arial"
          }}
        />
      </CardContent>
    </Card>
  );
}
