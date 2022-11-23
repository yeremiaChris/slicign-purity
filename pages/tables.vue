<template>
  <div class="flex flex-col gap-6">
    <div class="container-card">
      <h2 class="title">Authors Table</h2>
      <MiscTable :header="header" :data="data" isEdit />
    </div>
    <div class="container-card">
      <h2 class="title">Projects</h2>
      <div class="flex-items-center gap-1">
        <img src="/main/checklist.png" alt="check-list" />

        <p class="text-[#A0AEC0] text-sm mt-1 font-bold">30 done this month</p>
      </div>
      <MiscTable :header="header2" :data="data2" isMore />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: ["Author", "Function", "Status", "Employed"],
      header2: ["Companies", "Budget", "Status", "Completion"],
      data: [
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: true,
          employed: new Date(),
        },
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: false,
          employed: new Date(),
        },
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: true,
          employed: new Date(),
        },
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: false,
          employed: new Date(),
        },
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: true,
          employed: new Date(),
        },
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: false,
          employed: new Date(),
        },
        {
          author: {
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
          },
          function: {
            job: "Manager",
            jobType: "Organization",
          },
          status: true,
          employed: new Date(),
        },
      ],
      data2: [
        {
          companies: "Chakra",
          budget: 5000,
          statusText: "Working",
          completion: 60,
        },
        {
          companies: "Chakra",
          budget: 5000,
          statusText: "Working",
          completion: 30,
        },
        {
          companies: "Chakra",
          budget: 5000,
          statusText: "Working",
          completion: 60,
        },
        {
          companies: "Chakra",
          budget: 5000,
          statusText: "Working",
          completion: 50,
        },
        {
          companies: "Chakra",
          budget: 5000,
          statusText: "Working",
          completion: 30,
        },
      ],
    };
  },
};
</script>

<style></style>
