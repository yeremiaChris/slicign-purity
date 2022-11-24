<template>
  <div class="py-11 px-[33px] flex items-start gap-10 h-[100vh]">
    <div
      class="w-[987px] m-auto relative z-10 h-full flex flex-col justify-between"
    >
      <AuthNavbar />
      <Nuxt />
      <Footer class="sticky bottom-10" />
    </div>
    <!-- bg-green -->
    <div class="absolute right-0 bottom-32 left-[60%] top-0 hidden lg:block">
      <div class="bg-[#4FD1C5] rounded-bl-[25px] w-full h-full box-center">
        <img src="/main/bg-wave-l.png" alt="wave" class="absolute inset-0" />
        <img
          src="/main/bg-wave-r.png"
          alt="wave"
          class="absolute right-0 bottom-0"
        />
        <img src="/main/logo-chakra.png" alt="logo-chakra" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
