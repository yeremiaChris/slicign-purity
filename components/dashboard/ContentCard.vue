<template>
  <div class="grid lg:grid-cols-5 gap-5">
    <!-- content 1 -->
    <div class="col-span-3 container-card">
      <!-- title -->
      <h2 class="title">Projects</h2>

      <!-- description -->
      <div class="flex-items-center gap-1">
        <img src="/main/checklist.png" alt="check-list" />

        <p class="text-[#A0AEC0] text-sm mt-1 font-bold">30 done this month</p>
      </div>

      <!-- tables -->
      <MiscTable :header="header" :data="data" />
    </div>

    <!-- content 2 -->
    <div class="col-span-2 container-card">
      <h2 class="title">Projects</h2>
      <div class="flex-items-center gap-1">
        <p class="text-[#A0AEC0] text-sm mt-1 font-bold">
          <span class="text-[#48BB78]">+30%</span> this month
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: ["COMPANIES", "MEMBERS", "BUDGET", "COMPLETION"],
      data: [
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
      ],
    };
  },
};
</script>
