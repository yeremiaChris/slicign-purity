<template>
  <div class="grid lg:grid-cols-5 gap-5">
    <!-- chart 1 -->
    <div class="lg:col-span-2 bg-white px-4 py-4 rounded-[15px]">
      <client-only>
        <BarChart :data="chartData" :height="222" />
      </client-only>
      <div>
        <h2 class="text-lg font-bold text-[#2D3748]">Active Users</h2>
        <p class="text-sm mt-1.5 text-[#2D3748]">
          <span class="text-[#48BB78]">(+23)</span> than last week
        </p>
      </div>
      <div class="grid grid-cols-4 mt-[36.5px] gap-14">
        <!-- lists -->
        <div v-for="item in 4" :key="item">
          <div class="flex items-center gap-3">
            <div
              class="bg-[#4FD1C5] h-[25px] w-[25px] px-[5px] py-[5px] box-center rounded-md"
            >
              <img src="/main/file.svg" alt="file" />
            </div>
            <p class="text-[#A0AEC0] text-xs">Users</p>
          </div>

          <p class="text-lg font-bold mt-[5.5px]">32,984</p>

          <div class="bg-[#E2E8F0] w-full h-[3px] mt-1.5">
            <div class="w-[40%] h-[3px] bg-[#4FD1C5]" />
          </div>
        </div>
      </div>
    </div>

    <!-- chart 2 -->
    <div class="lg:col-span-3 bg-white px-4 py-4 rounded-[15px]">
      <client-only>
        <LineChart :data="chartData" class="h-full" />
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
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      };
    },
  },
};
</script>

<style></style>
