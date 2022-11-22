<template>
  <div>
    <p class="text-xs">
      <span class="text-gray-500">Pages</span> / {{ title }}
    </p>
    <p class="text-sm mt-[5px] font-bold">{{ title }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const path = this.$route.path;
      return path === "/"
        ? "Dashboard"
        : path.charAt(0).toUpperCase() + path.slice(1);
    },
  },
};
</script>

<style></style>
