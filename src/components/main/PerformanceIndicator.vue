<template>
  <div class="chart-wrap">
    <div class="chart-wrap__left">
      <BarChart @hover-data="updateDoughnutData" />
    </div>
    <div class="chart-wrap__right">
      <DoughnutChart :hoverData="hoverData" />
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import DoughnutChart from "./DoughnutChart.vue";

export default {
  components: {
    BarChart,
    DoughnutChart,
  },
  data() {
    return {
      hoverData: [],
    };
  },
  methods: {
    updateDoughnutData(data) {
      this.hoverData = data;
    },
  },
};
</script>

<style lang="scss">
.chart-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__left {
    flex: 1;
    padding: 5rem;
    border-right: 1px solid gray;
  }

  &__right {
    flex: 1;
    padding: 5rem;
  }
}
</style>
