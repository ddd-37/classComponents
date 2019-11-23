import React from "react";
import "./SeasonDisplay.css"; // Beind the scenes webpack will takes the contents out and place it into the index file

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    icon: "icon sun"
  },
  winter: {
    text: "Burr, it is chilly",
    icon: "icon snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }

  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon}`} />
    </div>
  );
};

export default SeasonDisplay;
