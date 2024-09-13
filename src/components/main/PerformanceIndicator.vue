<template>
  <div class="chart-wrap">
    <div class="chart-wrap__left">
      <BarChart></BarChart>
    </div>
    <div class="chart-wrap__right">
      <canvas ref="pie-chart"></canvas>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";

export default {
  components: {
    BarChart,
  },
};
</script>

<style lang="scss">
.chart-wrap {
  width: 100%;
  display: flex;

  &__left {
    flex: 1;
    margin: 10rem;
  }

  &__right {
    flex: 1;
  }
}
</style>
