<template>
  <div class="chart-container" style="position: relative; height:44%; width:100%">
    <canvas id="planet-chart-2"></canvas>
  </div>
</template>


<script>
import Chart from "chart.js";

export default {
  name: "projects",
  data() {
    return {
      text: "",
      planetChartData: this.myChart,
      myChart: null,
      mounth: ["Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
      salary: [10000, 20000, 40000, 25000, 60000, 30000, 10000, 20000, 50000, 60000, 30000, 5000]
    };
  },
  mounted() {
    this.createChart("planet-chart-2", this.planetChartData);
  },
  methods: {
    createChart(chartId) {
      const ctx = document.getElementById(chartId);
      // Save reference
      this.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.mounth,
          datasets: [
            {
              // one line graph
              label: "Зарплата",
              data: this.salary,
              backgroundColor: [
                "#E0EAF6" // Blue
              ],
              borderColor: ["#63B6E0"],
              borderWidth: 4,
              pointRadius: 0,
              pointBorderWidth: 3.5,
              pointHoverRadius: 6,
              pointHoverBorderColor: "#63B6E0",
              pointBackgroundColor: "white",
              hitRadius: 30
            }
          ]
        },
        options: {
          layout: {
            padding: {
              left: -10,
              right: 0,
              top: 10,
              bottom: 0
            }
          },
          legend: {
            display: false
          },
          responsive: true,
          lineTension: 1,
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)"
                },
                ticks: {
                  display: false,
                  beginAtZero: true
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)"
                },
                ticks: {
                  display: false,
                  beginAtZero: false
                }
              }
            ]
          }
        }
      });
    }
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