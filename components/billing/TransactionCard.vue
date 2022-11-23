<template>
  <div>
    <div class="box-card">
      <div class="box-card" v-for="item in data" :key="item.title">
        <h2 class="text-[#A0AEC0] text-[10px]">{{ item.title }}</h2>
        <div
          class="flex-items-center justify-between"
          v-for="child in item.child"
          :key="child.title"
        >
          <div class="flex-items-center gap-4">
            <div
              :class="`w-[35px] h-[35px] border ${
                !child.value
                  ? 'border-[#A0AEC0]'
                  : child.value <= 0
                  ? 'border-[#E53E3E]'
                  : 'border-[#48BB78]'
              } box-center rounded-full`"
            >
              <img
                v-if="child.value"
                :src="`/main/arrow-${child.value <= 0 ? 'red' : 'green'}.svg`"
                :class="{ 'rotate-180': child.value > 0 }"
                alt="arrow"
              />
              <p v-else class="text-[#A0AEC0]">!</p>
            </div>
            <div>
              <h2 class="text-sm text-[#2D3748] font-bold">
                {{ child.title }}
              </h2>
              <h3 class="text-[#A0AEC0] text-xs">
                {{ $dayjs(child.date).format("DD MMMM YYYY, at HH:mm A") }}
              </h3>
            </div>
          </div>
          <p
            :class="`${
              !child.value
                ? 'text-black'
                : child.value <= 0
                ? 'text-[#E53E3E]'
                : 'text-[#48BB78]'
            } text-sm font-bold`"
          >
            {{ numToTitle(child.value) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Newest",
          child: [
            {
              title: "Netflix",
              date: new Date(),
              value: -2500,
            },
            {
              title: "Apple",
              date: new Date(),
              value: 2500,
            },
          ],
        },
        {
          title: "Yesterday",
          child: [
            {
              title: "Stripe",
              date: new Date(),
              value: 800,
            },
            {
              title: "HubSpot",
              date: new Date(),
              value: 1700,
            },
            {
              title: "WebFlow",
              date: new Date(),
              value: null,
            },
            {
              title: "Microsoft",
              date: new Date(),
              value: -987,
            },
            {
              title: "Facebook",
              date: new Date(),
              value: 200,
            },
          ],
        },
      ],
    };
  },

  methods: {
    numToTitle(num) {
      return !num
        ? "Pending"
        : num < 0
        ? "-$" + num.toLocaleString().replace("-", "")
        : "+$" + num.toLocaleString();
    },

    isNegative(value) {
      return value <= 0;
    },
  },
};
</script>

<style scoped>
.box-card {
  @apply flex flex-col gap-[17.5px];
}
</style>
