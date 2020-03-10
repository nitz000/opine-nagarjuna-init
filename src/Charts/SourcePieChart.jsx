import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class SourcePieChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      subtitles: [
        {
          verticalAlign: "center",
          fontSize: 2,
          dockInsidePlotArea: true
        }
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "Inbound phone call", y: 5, color: "#6a0f0f" },
            { name: "Inbound emails", y: 31, color: "#2590ff" },
            { name: "Online campaign", y: 40, color: "#abea22" },
            { name: "Online lead form", y: 17, color: "#f04b7a" },
            { name: "Referrals", y: 7 }
          ]
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default SourcePieChart;
