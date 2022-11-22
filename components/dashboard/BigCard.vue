<template>
  <div class="flex flex-col lg:grid lg:grid-cols-5 gap-5 h-full w-full">
    <!-- card 1 -->
    <div
      class="shadow-smooth grid grid-cols-2 gap-8 col-span-3 bg-white py-4 px-4 rounded-[15px]"
    >
      <div class="flex flex-col justify-between">
        <div>
          <p class="text-[#A0AEC0] text-xs">Built by developers</p>
          <h2 class="text-[#'2D3748'] text-lg font-bold">
            Purity UI Dashboard
          </h2>
          <h3 class="text-[#A0AEC0] text-sm">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </h3>
        </div>
        <NuxtLink to="#" class="text-[10px] text-[#2D3748]"
          >Read More -></NuxtLink
        >
      </div>
      <div
        class="w-full font-bold text-3xl gap-4 bg-[#4FD1C5] rounded-lg h-[255px] lg:h-full box-center text-xl text-white"
      >
        <img
          class="w-10"
          src="/main/chakra-ui.png"
          alt="chakra-ui-logo"
        />chakra
      </div>
    </div>
    <!-- card 2 -->
    <div class="flex-1 col-span-2 w-full h-full block">
      <div class="grid lg:mt-0 rounded-[15px] px-3 py-3 bg-white">
        <div
          class="relative min-h-[300px] rounded-[15px] bg-center bg-cover text-white"
          style="background-image: url(/main/undsplash.jpg)"
        >
          <div
            class="absolute inset-0 flex flex-col gap-4 justify-between shadow-black w-full px-5 py-5 rounded-[15px]"
          >
            <div>
              <h2 class="text-lg font-bold">Work with the Rockets</h2>
              <p class="text-sm mt-2">
                Wealth creation is an evolutionarily recent positive-sum game.
                <br />
                It is all about who take the opportunity first.
              </p>
            </div>
            <NuxtLink to="#" class="text-[10px]">Read more -></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shadow-black {
  background: linear-gradient(
    360deg,
    rgba(49, 56, 96, 0.16) 0%,
    rgba(21, 25, 40, 0.88) 100%
  );
}
</style>
