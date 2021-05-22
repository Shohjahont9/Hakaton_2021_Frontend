import ReactECharts from "echarts-for-react";
import _ from "lodash";
const CustomLineChart = ({ data }) => {
  console.log(data);
  let filteredFirstData = data.filter((d) => d.type === "SAW1");
  let filteredSecondData = data.filter((d) => d.type === "SAW2");
  let filteredThirdData = data.filter((d) => d.type === "SAW3");

  console.log(filteredFirstData);

  const option = {
    animationDuration: 10000,
    animationEasing: "cubicIn",
    legend: {
      top: 5,
    },

    tooltip: {
      order: "valueDesc",
      trigger: "axis",
    },
    xAxis: {
      type: "category",
    },
    yAxis: { type: "value" },

    series: [
      {
        name: "SAW1",
        data: _.map(filteredFirstData, "made"),
        type: "line",
        smooth: true,
      },
      {
        name: "SAW2",
        data: _.map(filteredSecondData, "made"),
        type: "line",
        smooth: true,
      },
      {
        name: "SAW3",
        data: _.map(filteredThirdData, "made"),
        type: "line",
        smooth: true,
      },
    ],
  };
  return (
    <ReactECharts
      style={{ height: "100%" }}
      lazyUpdate={true}
      option={option}
    />
  );
};

export default CustomLineChart;
