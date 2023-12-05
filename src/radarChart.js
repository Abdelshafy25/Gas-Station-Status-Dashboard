import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [3, 3, 4, 5, 5, 6, 6, 4, 4, 3, 5, 4],
        },
        {
          name: "Series 2",
          data: [2, 2, 2, 5, 4, 4, 6, 5, 5, 4, 4, 3],
        },
        {
          name: "Series 3",
          data: [7, 7, 6, 6, 6, 5, 4, 4, 5, 4, 3, 4],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
        },
        fill: {
          opacity: 0.4,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: [24, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
          tooltip: {
            enabled: false,
          },
          labels: {
            show: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              height="200"
              width="200"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RadarChart;

// class ReactApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: "Series 1",
//           data: [80, 50, 30, 40, 100, 20],
//         },
//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: "radar",
//         },
//         title: {
//           text: "Basic Radar Chart",
//         },
//         xaxis: {
//           categories: ["January", "February", "March", "April", "May", "June"],
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="radar"
//           height={350}
//         />
//       </div>
//     );
//   }
// }

// export default ReactApexChart;
