<template>
  <div>
    <div class="relative inline-block w-9 mr-1 align-middle select-none">
      <input
        :id="id"
        :ref="id"
        type="checkbox"
        :name="id"
        v-model="swicthState"
        :class="{
          'right-0 !border-[#4FD1C5]': swicthState,
          'left-0': !swicthState,
        }"
        class="absolute block w-[18.5px] h-[18.5px] rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
      />
      <label
        :class="{
          '!bg-[#4FD1C5]': swicthState,
        }"
        @click="clickLabel"
        class="block overflow-hidden h-[18.5px] rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
    <label
      v-if="title"
      :for="id"
      :class="`text-xs ${!color ? 'text-[#A0AEC0]' : color} font-bold`"
      >{{ title }}</label
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default() {
        return "toggle-" + Math.random().toString(36).slice(2, 7);
      },
    },
    value: {
      type: [Boolean, String],
      default() {
        return false;
      },
    },
    title: {
      type: String,
      default: () => "",
    },
    color: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      swicthState: false,
    };
  },
  watch: {
    value(newval) {
      this.swicthState = newval;
    },
    swicthState(val) {
      this.$emit("input", val);
    },
  },
  mounted() {
    this.swicthState = this.value === "" ? false : this.value;
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    clickLabel() {
      this.$refs[this.id].click();
    },
  },
};
</script>

<style></style>
