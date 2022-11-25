<template>
  <div
    class="navbar-bg py-6 px-[23px] rounded-[15px] shadow-soft flex flex-col gap-5 md:flex-row justify-between"
  >
    <div class="flex-items-center gap-8">
      <img src="logo.png" alt="logo" />
      <h2 class="font-bold text-sm mt-1">PURITY UI DASHBOARD</h2>
    </div>
    <ul
      class="hidden md:flex items-center uppercase gap-9 text-[10px] text-[#2D3748] font-bold"
    >
      <NuxtLink v-for="item in data" :key="item.title" :to="item.link">
        <li class="flex items-center gap-1.5">
          <img
            :src="`/auth/${item.title.toLowerCase()}.png`"
            :alt="item.title"
          />
          <p class="mt-1.5">
            {{ item.title.replace("-", " ") }}
          </p>
        </li>
      </NuxtLink>
    </ul>

    <button
      class="bar-chart-bg text-[10px] text-white rounded-[34.5px] py-[10px] px-[30.25px] font-bold"
    >
      Free Download
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Dashboard",
          link: "/",
        },
        {
          title: "Profile",
          link: "/profile",
        },
        {
          title: "Sign-Up",
          link: "/sign-up",
        },
        {
          title: "Sign-In",
          link: "/sign-in",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar-bg {
  background: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 110.84%
  );
  backdrop-filter: blur(10.5px);
}
</style>
