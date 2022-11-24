<template>
  <div class="container-card">
    <!-- title and description -->
    <h2 class="title font-bold mb-2">Projects</h2>
    <p class="text-sm text-[#A0AEC0] mb-[25.5px]">Architects design houses</p>

    <!-- card -->
    <div class="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <!-- carddddd -->
      <div v-for="item in 3" :key="item">
        <div
          class="h-[191px] relative rounded-xl"
          :style="`background-image: url(https://picsum.photos/id/${item}/370/191)`"
        >
          <div class="absolute opacity-black inset-0 rounded-xl" />
        </div>
        <p class="text-[#A0AEC0] text-[10px] mt-5">Project #1</p>
        <MiscTitle title="Modern" />
        <p class="text-[#A0AEC0] text-xs">
          As Uber works through a huge amount of internal management turmoil.
        </p>
        <button
          class="mt-5 uppercase text-[10px] font-bold text-[#4FD1C5] border-[#4FD1C5] border rounded-xl px-[31.5px] py-[10px]"
        >
          View All
        </button>
      </div>
      <!-- card add -->
      <div
        class="h-[300px] lg:h-full border border-[#E0E1E2] rounded-[15px] box-center"
      >
        <div
          class="text-center flex flex-col justify-center items-center cursor-pointer"
        >
          <img src="/main/add.png" alt="add" />
          <p class="title text-[#718096] font-bold">Create a New Project</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.opacity-black {
  background: linear-gradient(
    360deg,
    rgba(49, 56, 96, 0.16) 0%,
    rgba(21, 25, 40, 0.88) 100%
  );
}
</style>
