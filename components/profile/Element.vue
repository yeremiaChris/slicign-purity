<template>
  <div class="relative -mt-[60px] mx-5 z-0 p-4">
    <!-- profile info -->
    <div
      class="z-10 w-full relative grid gap-5 lg:flex items-center justify-between"
    >
      <div class="flex-items-center gap-3">
        <img
          src="https://picsum.photos/80/80"
          class="h-[80px] w-[80px] rounded-xl"
          alt="profile"
        />
        <div>
          <h2 class="title font-bold text-[#2D3748]">Esthera Jackson</h2>
          <h3 class="text-sm text-[#718096]">esthera@simmmple.com</h3>
        </div>
      </div>

      <!-- button -->
      <div class="flex flex-col sm:flex-row gap-2 text-[10px]">
        <button
          v-for="(item, index) in actions"
          :key="item"
          :class="`shadow-smooth ${
            index <= 0 && 'bg-gray-100 lg:bg-white'
          } py-[10px] px-7 rounded-xl hover:bg-white flex-items-center gap-2 uppercase`"
        >
          <img src="/main/overview.png" :alt="item" />
          {{ item }}
        </button>
      </div>
    </div>

    <!-- bg-white opacity -->
    <div class="absolute inset-0 container-card opacity-70" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: ["overview", "teams", "projects"],
    };
  },
};
</script>

<style></style>
