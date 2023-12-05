import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            "Station Name 1",
            "Station Name 2",
            "Station Name 3",
            "Station Name 4",
            "Station Name 5",
          ],
        },
        colors: "#FF7F5C",
        plotOptions: {
          bar: {
            columnWidth: 20,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
      },
      series: [
        {
          name: "",
          data: [260, 80, 190, 230, 140],
        },
      ],
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
              type="bar"
              height="330"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
