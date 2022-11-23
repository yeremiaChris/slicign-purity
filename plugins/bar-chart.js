import Vue from "vue";
import { Bar } from "vue-chartjs";

Vue.component("BarChart", {
  extends: Bar,
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              barThickness: 6, // number (pixels) or 'flex'
              maxBarThickness: 8, // number (pixels)
            },
          ],
        },
      }),
    },
  },
  watch: {
    data() {
      this.renderChart(this.data, this.options);
    },
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
