<template>
  <div class="relative">
    <label v-if="label" :for="id" class="text-sm text-[#2D3748] mb-[5.5px]">{{
      label
    }}</label>
    <div v-if="icon" class="container-icon left-0 pl-5 mb-[3px]">
      <img v-if="icon !== 'paypal'" :src="`/main/${icon}.png`" alt="icon" />
      <div
        v-else
        v-for="item in 2"
        :key="item"
        :class="`${
          item === 1 ? 'bg-[#EB001B]' : 'bg-[#F79E1B] -ml-1.5'
        } w-3.5 h-3.5 rounded-full`"
      />
    </div>
    <input
      type="text"
      :name="id"
      :id="id"
      class="focus:outline-none border block w-full rounded-[15px] border-[#E2E8F0] shadow-sm py-[22.75px] pr-5 focus:ring-0 sm:text-sm"
      :class="{ 'pl-14': icon, 'pl-5': !icon }"
      :placeholder="placeholder"
    />
    <div class="container-icon right-0 pr-5" v-if="icon">
      <img src="/main/edit.png" alt="edit" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: () => Math.random().toString(),
    },
    icon: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "7812 2139 0823 XXXX",
    },
    label: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
.container-icon {
  @apply pointer-events-none absolute inset-y-0 flex items-center;
}
</style>
