<template>
  <div class="col-span-2 container-card">
    <div class="flex-items-center gap-4 justify-between mb-[22.5px]">
      <h2 class="title font-bold">Invoices</h2>
      <button
        class="uppercase text-[10px] font-bold text-[#4FD1C5] border-[#4FD1C5] border rounded-xl px-[31.5px] py-[10px]"
      >
        View All
      </button>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex gap-4 justify-between" v-for="item in 5" :key="item">
        <div>
          <h2 class="text-sm font-bold">March, 01, 2020</h2>
          <h3 class="text-xs font-bold text-[#A0AEC0] mt-[4.5px]">
            #MS-415646
          </h3>
        </div>
        <div class="gap-5 flex-items-center">
          <h2 class="text-xs text-[#A0AEC0] font-bold">$180</h2>
          <div class="text-[10px] text-[#2D3748] flex-items-center font-bold">
            <img src="/main/pdf.png" alt="pdf" />
            <span class="mt-1">PDF</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
