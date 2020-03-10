import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PipelineChart extends Component {
  render() {
    var dataPoint;
    var total;
    const options = {
      animationEnabled: true,
      data: [
        {
          type: "funnel",
          toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
          indexLabelPlacement: "inside",
          indexLabel: "{label} ({percentage}%)",
          dataPoints: [
            { y: 2000, label: "Prospects", color: "#2658ee" },
            { y: 1800, label: "Qualified Prospects", color: "#caff39" },
            { y: 1080, label: "Proposals", color: "#27ccd5" },
            { y: 665, label: "Negotiation", color: "#c641a4" },
            { y: 470, label: "Clinical Conversion" }
          ]
        }
      ]
    };
    //calculate percentage
    dataPoint = options.data[0].dataPoints;
    total = dataPoint[0].y;
    for (var i = 0; i < dataPoint.length; i++) {
      if (i == 0) {
        options.data[0].dataPoints[i].percentage = 100;
      } else {
        options.data[0].dataPoints[i].percentage = (
          (dataPoint[i].y / total) *
          100
        ).toFixed(2);
      }
    }
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default PipelineChart;
