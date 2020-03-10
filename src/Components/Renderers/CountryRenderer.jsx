import React from "react";

const COUNTRY_CODES = {
  Ireland: "ie",
  Spain: "es",
  "United Kingdom": "gb",
  France: "fr",
  Germany: "de",
  Sweden: "se",
  Italy: "it",
  Greece: "gr",
  Iceland: "is",
  Portugal: "pt",
  Malta: "mt",
  Norway: "no",
  Brazil: "br",
  Argentina: "ar",
  Colombia: "co",
  Peru: "pe",
  Venezuela: "ve",
  Uruguay: "uy"
};
let styles = {
  marginRight: "10px"
};
export default class CountryRenderer extends React.Component {
  render() {
    if (this.props.value) {
      const flag =
        "<img border='0' width='15' height='10' " +
        "style='margin-bottom: 2px' src='http://flags.fmcdn.net/data/flags/mini/" +
        COUNTRY_CODES[this.props.value] +
        ".png";
      return (
        <>
          <img
            border="0"
            width="15"
            height="10"
            style={styles}
            src={
              "http://flags.fmcdn.net/data/flags/mini/" +
              COUNTRY_CODES[this.props.value] +
              ".png"
            }
          />
          {this.props.value}
        </>
      );
    }
  }
}
