<template>
  <div class="grid lg:grid-cols-5 gap-5">
    <!-- chart 1 -->
    <div class="lg:col-span-2 container-card">
      <client-only>
        <BarChart
          :data="chartData"
          :height="200"
          class="bar-chart-bg p-5 rounded-[15px] w-full"
        />
      </client-only>
      <div class="mt-6">
        <h2 class="title text-[#2D3748]">Active Users</h2>
        <p class="text-sm mt-1.5 text-[#2D3748]">
          <span class="text-[#48BB78]">(+23)</span> than last week
        </p>
      </div>
      <div class="grid grid-cols-4 mt-[36.5px] gap-14">
        <!-- lists -->
        <div v-for="item in 4" :key="item">
          <div class="flex-items-center gap-3">
            <div
              class="bg-[#4FD1C5] h-[25px] w-[25px] px-[5px] py-[5px] box-center rounded-md"
            >
              <img src="/main/file.svg" alt="file" />
            </div>
            <p class="text-[#A0AEC0] text-xs">Users</p>
          </div>

          <p class="title mt-[5.5px]">32,984</p>

          <div class="bg-[#E2E8F0] w-full h-[3px] mt-1.5">
            <div class="w-[40%] h-[3px] bg-[#4FD1C5]" />
          </div>
        </div>
      </div>
    </div>

    <!-- chart 2 -->
    <div class="lg:col-span-3 container-card">
      <h2 class="title text-[#2D3748]">Active Users</h2>
      <p class="text-sm mt-1.5 text-[#2D3748] mb-[41px]">
        <span class="text-[#48BB78]">(+23)</span> than last week
      </p>
      <client-only>
        <LineChart :data="chartDataLine" class="w-full" :height="296" />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    chartData() {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "",
            data: [2, 1, 16, 3, 2],
            backgroundColor: "white",
            borderColor: "white",
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
          },
        ],
      };
    },
    chartDataLine() {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "",
            data: [16, 5, 7, 8, 10],
            background:
              "linear-gradient(180deg, rgba(79, 209, 197, 0.54) 0%, rgba(79, 209, 197, 0) 100%)",
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "",
            data: [7, 12, 16, 8, 10],
            backgroundColor: "rgba(79, 209, 197, 0.2)",
            borderColor: "#4FD1C5",
            borderWidth: 2,
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.bar-chart-bg {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
}
</style>
