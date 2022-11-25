<template>
  <div>
    <NuxtLink
      v-for="(item, index) in data"
      :key="item.title + index"
      :to="item.path"
      class="flex-items-center gap-3 p-3 rounded-[15px] mb-2 hover:bg-white hover:shadow-smooth"
      :class="{ 'bg-white shadow-smooth': isActiveRoute(item.path) }"
    >
      <div
        :class="`w-[30px] box-center p-2 h-[30px] ${
          isActiveRoute(item.path) ? 'bg-[#4FD1C5]' : 'bg-white shadow-smooth'
        } rounded-full`"
      >
        <img
          class="w-full"
          :src="`/sidebar/${
            isActiveRoute(item.path)
              ? toIconTitle(item.title) + '-white'
              : toIconTitle(item.title)
          }.svg`"
          :alt="item.title"
        />
      </div>
      <p :class="{ 'text-[#A0AEC0]': !isActiveRoute(item.path) && !isMobile }">
        {{ item.title }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    isMobile: {
      type: Boolean,
      default: () => false,
    },
  },

  methods: {
    isActiveRoute(path) {
      return this.$route.path === path;
    },

    toIconTitle(title) {
      return title.split(" ").join("-").toLowerCase();
    },
  },
};
</script>
