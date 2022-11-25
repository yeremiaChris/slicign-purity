<template>
  <div
    class="md:hidden fixed inset-0 bg-[#4FD1C5] px-6 py-6 duration-500"
    :class="{
      'mb-[400%] -mt-[400%] fixed': !isMobile,
    }"
  >
    <div class="flex justify-end">
      <button
        class="border px-1 py-1 shadow-soft rounded-full mb-2"
        @click="handleClick"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- logo -->
    <div class="box-center gap-4 text-white font-bold mb-7">
      <img src="logo-white.png" alt="logo" />
      <h2 class="font-bold text-sm">PURITY UI DASHBOARD</h2>
    </div>
    <div class="text-xs font-bold">
      <SidebarItem :data="sidebarItem" isMobile />

      <!-- account page -->

      <h2 class="font-bold my-5">ACCOUNT PAGES</h2>

      <SidebarItem :data="accountPages" isMobile />
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
        // {
        //   title: "RTL",
        //   path: "/rtl",
        // },
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
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
  methods: {
    isActiveRoute(path) {
      return this.$route.path === path;
    },
    handleClick() {
      const payload = {
        props: "isMobile",
        value: false,
      };
      this.$store.commit("setProps", payload);
    },
  },
};
</script>
