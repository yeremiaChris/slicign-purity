<template>
  <div class="w-[246px]">
    <!-- logo -->
    <div class="box-center gap-4">
      <img src="logo.png" alt="logo" />
      <h2 class="font-bold text-sm">PURITY UI DASHBOARD</h2>
    </div>
    <div
      class="hr mt-[27.5px] w-full bg-gradient-to-r from-[#E0E1E2] via-[#E0E1E2] to-[#E0E1E2] h-px mb-[22.5px]"
    />
    <!-- sidebar -->
    <div class="text-xs font-bold">
      <SidebarItem :data="sidebarItem" />

      <!-- account page -->
      <h2 class="font-bold my-5">ACCOUNT PAGES</h2>

      <SidebarItem :data="accountPages" />
    </div>

    <!-- kotak -->
    <div
      class="w-[218px] relative bg-[#4FD1C5] mt-[60px] rounded-[15px] px-4 py-4 text-white"
    >
      <img src="/sidebar/question-mark.png" alt="question-mark" />
      <h2 class="text-sm font-bold mt-[21.5px]">Need Help ?</h2>
      <h3 class="text-xs font-bold">Please check our docs</h3>

      <button
        class="bg-white rounded-[15px] text-black text-[10px] w-full py-[10px] mt-[18.5px] font-bold"
      >
        Documentation
      </button>

      <!-- circle -->
      <img
        class="absolute inset-0"
        src="/sidebar/circle.png"
        alt="circle-white"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarItem: [
        {
          title: "Dashboard",
          path: "/",
        },
        {
          title: "Tables",
          path: "/tables",
        },
        {
          title: "Billing",
          path: "/billing",
        },
        {
          title: "RTL",
          path: "/rtl",
        },
      ],
      accountPages: [
        {
          title: "Profile",
          path: "/profile",
        },
        {
          title: "Sign In",
          path: "/sign-in",
        },
        {
          title: "Sign Up",
          path: "/sign-up",
        },
      ],
    };
  },
  methods: {
    isActiveRoute(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.shadow-link {
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
}
</style>
