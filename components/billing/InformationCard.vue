<template>
  <div class="bg-[#F8F9FA] flex justify-between rounded-xl py-[26px] px-[27px]">
    <!-- information -->
    <div class="text-sm">
      <h2 class="text-[#718096] font-bold">Oliver Liam</h2>
      <ul class="mt-[7.5px] text-[#A0AEC0]">
        <li v-for="item in 3" :key="item">
          Company Name:
          <span class="font-bold text-[#718096]">Viking Burrito</span>
        </li>
      </ul>
    </div>

    <!-- button -->
    <div class="flex gap-7 -mt-14">
      <button class="flex-items-center gap-2 text-[10px] text-[#E53E3E]">
        <img src="/main/delete.png" alt="delete" />
        <span class="mt-1">Delete</span>
      </button>
      <button class="flex-items-center gap-2 text-[10px] text-[#2D3748]">
        <img src="/main/edit.png" alt="delete" />
        <span class="mt-1">Edit</span>
      </button>
    </div>
  </div>
</template>
