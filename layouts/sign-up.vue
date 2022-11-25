<template>
  <div class="pb-11 pt-5 px-[33px]">
    <div class="relative z-10 h-full sticky top-0">
      <!-- green bg -->
      <div class="relative">
        <div
          class="absolute overflow-hidden top-0 right-0 left-0 bg-[#4FD1C5] h-[520px] rounded-[15px]"
        >
          <img class="absolute inset-0" src="/auth/wave-1.png" alt="wave-1" />
          <img class="absolute right-0" src="/auth/wave-2.png" alt="wave-2" />
        </div>
      </div>

      <!-- content -->
      <div
        class="max-w-[987px] relative m-auto flex flex-col justify-between text-white h-full"
      >
        <AuthNavbar bgShadowAndColor="bg-transparant" />
        <Nuxt class="self-center" />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
