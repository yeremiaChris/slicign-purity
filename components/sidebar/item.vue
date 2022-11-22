<template>
  <div>
    <NuxtLink
      v-for="(item, index) in data"
      :key="item.title + index"
      :to="item.path"
      class="flex items-center gap-3 px-3 py-3 rounded-[15px] mb-2 hover:bg-white hover:shadow-[0_3.5px_5.5px_rgba(0, 0, 0, 0.02)]"
      :class="{ 'bg-white shadow-link': isActiveRoute(item.path) }"
    >
      <div
        :class="`w-[30px] box-center px-2 py-2 h-[30px] ${
          isActiveRoute(item.path) ? 'bg-[#4FD1C5]' : 'bg-white shadow-link'
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
      <p :class="{ 'text-[#A0AEC0]': !isActiveRoute(item.path) }">
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

<style></style>
