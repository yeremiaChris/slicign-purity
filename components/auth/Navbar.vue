<template>
  <div
    :class="`${bgShadowAndColor} py-6 px-[23px] rounded-[15px] flex flex-col gap-5 md:flex-row justify-between`"
  >
    <div class="flex-items-center gap-8">
      <img
        :src="`${$route.path === '/sign-in' ? 'logo' : 'logo-white'}.png`"
        alt="logo"
      />
      <h2 class="font-bold text-sm mt-1">PURITY UI DASHBOARD</h2>
    </div>
    <ul
      :class="`hidden md:flex items-center uppercase gap-9 text-[10px] ${
        $route.path === '/sign-in' ? `text-[#2D3748]` : 'text-white'
      } font-bold`"
    >
      <NuxtLink v-for="item in data" :key="item.title" :to="item.link">
        <li class="flex items-center gap-1.5">
          <img
            :src="`/auth/${
              $route.path === '/sign-up'
                ? item.title.toLowerCase() + '-white'
                : item.title.toLowerCase()
            }.png`"
            :alt="item.title"
          />
          <p class="mt-1.5">
            {{ item.title.replace("-", " ") }}
          </p>
        </li>
      </NuxtLink>
    </ul>

    <button
      :class="`${
        $route.path === '/sign-up'
          ? 'bg-white text-[#2D3748]'
          : 'bar-chart-bg text-white'
      } text-[10px]  rounded-[34.5px] py-[10px] px-[30.25px] font-bold`"
    >
      Free Download
    </button>
  </div>
</template>

<script>
export default {
  props: {
    bgShadowAndColor: {
      type: String,
      default: () => "navbar-bg shadow-soft",
    },
  },
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
