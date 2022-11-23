<template>
  <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <div
      class="container-card justify-between flex"
      v-for="(card, index) in cards"
      :key="card.title + index"
    >
      <div>
        <h2 class="text-xs text-[#A0AEC0] mb-px">{{ card.title }}</h2>
        <h2 class="title">
          ${{ card.value.toLocaleString() }}
          <span
            :class="`text-sm ${
              card.persentage < 0 ? 'text-red-400' : 'text-[#48BB78]'
            } font-bold`"
            >{{
              card.persentage > 0 ? "+" + card.persentage : card.persentage
            }}%</span
          >
        </h2>
      </div>
      <div class="w-[45px] h-[45px] bg-[#4FD1C5] box-center rounded-xl">
        <img src="/main/file.svg" alt="file" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Today's Money",
          iconName: "file",
          value: 53000,
          persentage: 55,
        },
        {
          title: "Today's User",
          iconName: "file",
          value: 2300,
          persentage: 5,
        },
        {
          title: "New Clients",
          iconName: "file",
          value: 3052,
          persentage: -14,
        },
        {
          title: "Total Sales",
          iconName: "file",
          value: 173000,
          persentage: 8,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .container-card {
  @apply py-4 px-[17px] bg-white rounded-[15px] shadow-smooth;
} */
</style>
