import ReactECharts from "echarts-for-react";

const CustomPieChart = ({ data }) => {
  const option = {
    animationDuration: 10000000,

    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },

    series: [
      {
        name: "data",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
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

export default CustomPieChart;
