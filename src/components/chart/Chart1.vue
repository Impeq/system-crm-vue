<template>
    <canvas id="planet-chart-1"></canvas>
</template>


<script>
import Chart from "chart.js";
import planetChartData1 from "./chart-data-1.js";

export default {
  name: "projects",
  data() {
    return {
      text: "",
      planetChartData: planetChartData1,
      myChart: null
    };
  },
  mounted() {
    this.createChart("planet-chart-1", this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      // Save reference
      this.myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
    // addData(label, data) {
    //   // Use reference
    //   this.myChart.data.labels.push(label);
    //   this.myChart.data.datasets.forEach(dataset => {
    //     dataset.data.push(data);
    //   });
    // }
  }
};
</script>