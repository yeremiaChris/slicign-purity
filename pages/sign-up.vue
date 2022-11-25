<template>
  <div class="text-center mb-6">
    <h2 class="text-[32px] font-bold">Welcome</h2>
    <p class="text-sm mt-[9.5px]">
      Use these awesome forms to login or create new <br />
      account in your project for free.
    </p>

    <!-- input -->
    <div
      class="w-full sm:w-[452px] mt-[66.5px] shadow-soft p-4 bg-white rounded-[15px] text-left m-auto"
    >
      <div class="grid gap-6 px-6 py-6">
        <h2 class="text-center text-lg font-bold text-[#2D3748]">
          Register With
        </h2>
        <div class="flex gap-4 justify-center">
          <div
            v-for="item in socialMedia"
            :key="item"
            class="box-center w-[75px] h-[75px] rounded-[15px] border border-[#E2E8F0]"
          >
            <img :src="`/auth/${item}.png`" :alt="item" />
          </div>
        </div>
        <h2 class="text-lg font-bold text-[#A0AEC0] text-center">or</h2>
        <MiscInput label="Name" placeholder="Your full name" />
        <MiscInput label="Email" placeholder="Your email address" />
        <MiscInput label="Password" placeholder="Your password" />
        <MiscToggle
          v-model="isRemember"
          title="Remember me"
          color="text-[#2D3748]"
        />
        <button
          class="bg-[#4FD1C5] py-[15px] rounded-xl text-white text-[10px] uppercase font-bold"
        >
          Sign Up
        </button>
        <div class="text-center box-center gap-2 text-sm text-[#A0AEC0]">
          <p>Dont have an account ?</p>
          <NuxtLink to="#" class="text-[#4FD1C5]">Sign In</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "sign-up",
  data() {
    return {
      isRemember: true,
      socialMedia: ["facebook", "apple", "google"],
    };
  },
};
</script>

<style></style>
