<template>
  <canvas ref="coreChart"></canvas>
  <button @click="dougnut">버튼</button>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      core: {},
      coreChartData: {},
    };
  },
  async mounted() {
    await this.getIndicator();
  },
  methods: {
    async getIndicator() {
      try {
        const indicator = await this.$api("http://localhost:3000/test", "get");
        this.setData(indicator);
      } catch (error) {
        console.error(error);
      }
    },

    setData(indicator) {
      this.core = indicator.core;
      this.coreChartData = this.setCoreChartData(this.core);
      this.renderChart(this.coreChartData);
    },

    setCoreChartData(data) {
      const setData = [];

      data.forEach((item) => {
        const {
          indicatorName = "Unknown",
          univName = "Unknown",
          totalValue = 0,
        } = item;
        setData.push({
          univName,
          indicatorName,
          totalValue,
        });
      });
      return setData;
    },

    renderChart(data) {
      const ctx = this.$refs.coreChart.getContext("2d");

      const labels = [...new Set(data.map((item) => item.indicatorName))];
      const totalValues = {};

      labels.forEach((label) => {
        totalValues[label] = {
          totalValue: 0,
          univ: [],
        };
        data.forEach((item) => {
          if (item.indicatorName === label) {
            totalValues[label].totalValue += item.totalValue;
            let obj = {
              univName: item.univName,
              total: item.totalValue,
            };
            totalValues[label].univ.push(obj);
          }
        });
      });

      const total = [];

      labels.map((label) => {
        totalValues[label].univ.sort(
          (a, b) => a.univName.length - b.univName.length
        );
      });

      labels.map((label) => {
        total.push(totalValues[label].totalValue);
      });

      const chartLabels = Object.keys(totalValues);

      const datasets = [];

      labels.map((item, index) => {
        let dataArr = new Array(7).fill(0);

        const obj = {
          label: "",
          data: 0,
        };

        obj.label = item;
        dataArr[index] =
          totalValues[item].totalValue / totalValues[item].univ.length;
        obj.data = dataArr;

        datasets.push(obj);
      });

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartLabels,
          datasets: datasets,
        },
        options: {
          indexAxis: "y",
          responsive: true,

          onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
              const datasetIndex = chartElement[0].datasetIndex;
              //const index = chartElement[0].index;

              console.log(totalValues);

              const data = datasets[datasetIndex];

              const hoveredData = data;

              totalValues[hoveredData.label].label = hoveredData.label;

              // hoveredData.label = hoveredData.label;

              this.$emit("hover-data", totalValues[hoveredData.label]);
            }
          },

          plugins: {
            tooltip: {
              padding: 20,
              titleColor: "#60c8c8",

              callbacks: {
                title: function (context) {
                  const { label } = context[0];
                  const { totalValue, univ } = totalValues[label];
                  const average = (totalValue / univ.length).toFixed(2);
                  return `${label} : ${average}%`;
                },

                label: function (context) {
                  const indicatorName = context.label;
                  const universities = totalValues[indicatorName].univ;
                  let tooltipText = [];
                  universities.forEach((univ) => {
                    tooltipText.push(
                      ` • ${univ.univName}: ${univ.total.toFixed(2)}% `
                    );
                  });
                  return tooltipText;
                },
              },
              displayColors: false,
              titleFont: { size: 20, weight: "bold" },
              bodyFont: { size: 16 },
            },

            legend: {
              display: true,
              position: "top",
              align: "start",
              labels: {
                padding: 10,
                font: {
                  size: 16,
                },
              },
            },
          },
          scales: {
            x: {
              min: 0,
              max: 100,
            },
            y: {
              beginAtZero: true,
              stacked: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss"></style>
