<template>
  <div
    class="relative overflow-hidden sm:col-span-2 bar-chart-bg rounded-[15px] py-[22px] px-[31px] text-white"
  >
    <div class="flex-items-center justify-between gap-3">
      <h2 class="title">Purity UI</h2>

      <!-- circle logo card  -->
      <div class="flex">
        <div
          class="bg-white w-[32px] h-[32px] rounded-full rounded-full -mr-[20px] opacity-40"
        />
        <div
          class="bg-white w-[32px] h-[32px] rounded-full rounded-full opacity-50"
        />
      </div>
    </div>

    <!-- card number -->
    <h2 class="text-2xl font-bold mt-12">7812 2139 0823 XXXX</h2>
    <div class="mt-[13px] flex gap-[33.5px]">
      <div>
        <p class="text-[10px]">VALID THRU</p>
        <p class="text-sm font-bold">05/24</p>
      </div>
      <div>
        <p class="text-[10px]">CCV</p>
        <p class="text-sm font-bold">09X</p>
      </div>
    </div>

    <!-- circle bg -->
    <div
      class="absolute rounded-full border opacity-20"
      :style="`width: ${item * 200}px; height: ${item * 200}px; left: -${
        (item * 200) / 2
      }px; top: -${(item * 200) / 2}px`"
      v-for="item in 4"
      :key="item"
    />
  </div>
</template>
