<template>
  <div class="py-11 px-[33px] flex items-start gap-10">
    <Sidebar class="hidden md:block" />
    <div class="container">
      <div class="flex justify-between items-start">
        <Breadcrumb class="mb-5" />

        <NavbarMenu />

        <!-- humburger menu -->
        <MiscBurgerButton />
      </div>
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>
