<template>
  <div class="container-card">
    <div class="flex-items-center mb-[39.5px] justify-between">
      <h2 class="font-bold text-sm">Payment Method</h2>
      <button
        class="bar-chart-bg text-white text-[10px] font-bold py-[10px] px-[22.75px] rounded-xl uppercase"
      >
        Add new card
      </button>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <MiscInput />
      <MiscInput icon="visa" />
    </div>
  </div>
</template>
