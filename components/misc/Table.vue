<template>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  v-for="item in header"
                  :key="item"
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-[10px] font-bold text-[#A0AEC0] sm:pl-6"
                >
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in data" :key="index">
                <td
                  v-for="(value, key) in item"
                  :key="key"
                  class="whitespace-nowrap text-sm text-[#2D3748] font-bold py-4 pl-4 pr-3 sm:pl-6"
                >
                  <div
                    v-if="key === 'companies'"
                    class="flex items-center gap-3"
                  >
                    <img
                      class="rounded-lg"
                      src="https://picsum.photos/id/237/20/20"
                      alt=""
                    />
                    {{ value }}
                  </div>
                  <div v-else-if="key === 'members'" class="flex">
                    <img
                      v-for="num in value"
                      :key="num"
                      :src="`https://picsum.photos/id/${num}/20/20`"
                      class="w-5 h-5 rounded-full bg-white px-[2px] py-[2px]"
                      :class="{ '-ml-2': num > 1 }"
                    />
                  </div>
                  <div v-else-if="key === 'budget'">
                    ${{ value.toLocaleString() }}
                  </div>
                  <div
                    v-else-if="key === 'completion'"
                    class="text-[#4FD1C5] pr-8"
                  >
                    <p>{{ value }}%</p>
                    <div class="bg-[#E2E8F0] h-[3px] w-full">
                      <div
                        class="bg-[#4FD1C5] h-[3px]"
                        :style="{ width: value + '%' }"
                      />
                    </div>
                  </div>
                  <p v-else>
                    {{ value }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
