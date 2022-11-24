<template>
  <div class="lg:w-1/2 pr-4 mb-10">
    <h2 class="text-[32px] text-[#4FD1C5] font-bold">Welcome Back</h2>
    <h2 class="text-sm text-[#A0AEC0] font-bold mb-9">
      Enter your email and password to sign in
    </h2>
    <div class="grid gap-6">
      <MiscInput label="Email" />
      <MiscInput label="Password" />
      <MiscToggle
        v-model="isRemember"
        title="Remember me"
        color="text-[#2D3748]"
      />
      <button
        class="bg-[#4FD1C5] py-[15px] rounded-xl text-white text-[10px] uppercase font-bold"
      >
        Sign In
      </button>
      <div class="text-center box-center gap-2 text-sm text-[#A0AEC0]">
        <p>Dont have an account ?</p>
        <NuxtLink to="#" class="text-[#4FD1C5]">Sign up</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "sign-in",
  data() {
    return {
      isRemember: true,
    };
  },
};
</script>

<style></style>
