<template>
  <div>
    <canvas v-if="hoverData && hoverData.univ" ref="coreChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  props: ["hoverData"],
  data() {
    return {
      coreChartInstance: null,
    };
  },
  watch: {
    hoverData(newData) {
      if (newData) {
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            this.renderChart(newData);
          });
        });
      }
    },
  },
  mounted() {
    if (this.hoverData) {
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.renderChart(this.hoverData);
        });
      });
    }
  },
  methods: {
    renderChart(newData) {
      const chartCanvas = this.$refs.coreChart;

      if (!chartCanvas) {
        console.error("Canvas element is not available yet.");
        return;
      }

      if (!newData || !newData.univ || !Array.isArray(newData.univ)) {
        console.error(
          "Invalid data format: univ data is not available or is not an array."
        );
        return;
      }

      if (this.coreChartInstance) {
        this.coreChartInstance.destroy();
      }

      const ctx = chartCanvas.getContext("2d");

      const labels = [];
      const data = [];

      newData.univ.forEach((item) => {
        labels.push(item.univName);
        data.push(item.total);
      });

      const dataset = [
        {
          label: newData.label,
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ];

      const centerTextPlugin = {
        id: "centerText",
        beforeDraw: function (chart) {
          const ctx = chart.ctx;
          if (!ctx) return;

          const width = chart.width;
          const height = chart.height;
          ctx.restore();
          const fontSize = (height / 550).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          const text = newData.label;
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2 + 15;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      };

      this.coreChartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: dataset,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
        plugins: [centerTextPlugin],
      });
    },
  },
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 400px;
}
</style>
