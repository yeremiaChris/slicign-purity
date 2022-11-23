<template>
  <div class="flex flex-col gap-6">
    <div class="container-card">
      <h2 class="title">Authors Table</h2>
      <MiscTable :header="header" :data="data" />
    </div>
    <div class="container-card">
      <h2 class="title">Authors Table</h2>
      <MiscTable :header="header" :data="data" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: ["COMPANIES", "MEMBERS", "BUDGET", "COMPLETION"],
      data: [
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
        {
          companies: "Chakra",
          members: 5,
          budget: 14000,
          completion: 60,
        },
      ],
    };
  },
};
</script>

<style></style>
