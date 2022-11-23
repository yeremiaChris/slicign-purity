<template>
  <div class="flex flex-col lg:grid lg:grid-cols-5 items-start gap-5">
    <!-- content 1 -->
    <div class="col-span-3 container-card w-full">
      <!-- title -->
      <h2 class="title">Projects</h2>

      <!-- description -->
      <div class="flex-items-center gap-1">
        <img src="/main/checklist.png" alt="check-list" />

        <p class="text-[#A0AEC0] text-sm mt-1 font-bold">30 done this month</p>
      </div>

      <!-- tables -->
      <MiscTable :header="header" :data="data" class="mt-8" />
    </div>

    <!-- content 2 -->
    <div class="col-span-2 container-card w-full">
      <!-- title -->
      <h2 class="title">Orders overview</h2>

      <!-- description -->
      <div class="flex-items-center gap-1">
        <p class="text-[#A0AEC0] text-sm mt-1 font-bold">
          <span class="text-[#48BB78]">+30%</span> this month
        </p>
      </div>

      <!-- orders view -->
      <div class="mt-10 flex flex-col gap-2">
        <div class="flex gap-3" v-for="item in 3" :key="item">
          <!-- icon with line -->
          <div class="flex flex-col">
            <img src="/main/bell.png" alt="bell" />
            <div class="bg-[#E2E8F0] ml-2 mt-2 w-[2px] h-12" />
          </div>

          <!-- title and description -->
          <div>
            <h2 class="text-sm">$2400, Design changes</h2>
            <h3 class="text-[#A0AEC0] text-xs mt-[4.5px] font-bold">
              22 DEC 7:20 PM
            </h3>
          </div>
        </div>
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
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
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
