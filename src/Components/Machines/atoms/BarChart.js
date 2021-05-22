import ReactECharts from "echarts-for-react";

const CustomBarChart = ({ data }) => {
  const option = {
    animationDuration: 2000,
    animationEasing: "cubicIn",
    legend: {
      top: 10,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: data,
  };

  return (
    <ReactECharts
      style={{ height: "100%" }}
      lazyUpdate={true}
      option={option}
    />
  );
};

export default CustomBarChart;
