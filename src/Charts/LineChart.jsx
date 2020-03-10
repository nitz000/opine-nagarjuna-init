import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class LineChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      axisX: {
        valueFormatString: "MMM"
      },
      axisY: {
        includeZero: false
      },
      data: [
        {
          yValueFormatString: "# Leads",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 6), y: 45 },
            { x: new Date(2017, 7), y: 58 },
            { x: new Date(2017, 8), y: 24 },
            { x: new Date(2017, 9), y: 84 },
            { x: new Date(2017, 10), y: 100 },
            { x: new Date(2017, 11), y: 45 }
          ]
        }
      ]
    };
    return (
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    );
  }
}
export default LineChart;
