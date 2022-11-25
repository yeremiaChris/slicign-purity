<template>
  <div class="py-11 px-[33px] flex items-start gap-10">
    <Sidebar class="hidden md:block" />
    <div class="container">
      <div
        class="relative flex justify-between items-start bg-[#4FD1C5] rounded-[15px] p-4 text-white h-[200px]"
      >
        <Breadcrumb class="mb-5" />
        <NavbarMenu />

        <!-- humburger menu -->
        <MiscBurgerButton />

        <!-- bg-wave -->
        <img class="absolute inset-0" src="/main/bg-wave.png" alt="bg-wave" />
      </div>
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
