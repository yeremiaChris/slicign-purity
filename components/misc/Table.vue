<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  v-for="item in header"
                  :key="item"
                  scope="col"
                  class="py-3.5 uppercase text-left text-[10px] font-bold text-[#A0AEC0]"
                >
                  {{ item }}
                </th>
                <th
                  v-if="isEdit"
                  scope="col"
                  class="py-3.5 uppercase text-left text-[10px] font-bold text-[#A0AEC0]"
                />
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in data" :key="index">
                <td
                  v-for="(value, key) in item"
                  :key="key"
                  class="whitespace-nowrap text-sm text-[#2D3748] font-bold py-4"
                >
                  <!-- companies -->
                  <div
                    v-if="key === 'companies'"
                    class="flex-items-center gap-3"
                  >
                    <img class="rounded" src="/main/adobe.png" :alt="key" />
                    <p class="mt-1">
                      {{ value }}
                    </p>
                  </div>

                  <!-- members -->
                  <div v-else-if="key === 'members'" class="flex">
                    <img
                      v-for="num in value"
                      :key="num"
                      :src="`https://picsum.photos/id/${num}/20/20`"
                      class="w-5 h-5 rounded-full bg-white p-[2px]"
                      :class="{ '-ml-2': num > 1 }"
                    />
                  </div>

                  <!-- budget -->
                  <div v-else-if="key === 'budget'">
                    ${{ value.toLocaleString() }}
                  </div>

                  <!-- completion -->
                  <div v-else-if="key === 'completion'" class="text-[#4FD1C5]">
                    <p>{{ value }}%</p>
                    <div class="bg-[#E2E8F0] h-[3px] w-1/2">
                      <div
                        class="bg-[#4FD1C5] h-[3px]"
                        :style="{ width: value + '%' }"
                      />
                    </div>
                  </div>

                  <!-- authors -->
                  <div
                    v-else-if="key === 'author'"
                    class="flex-items-center gap-[15px]"
                  >
                    <img
                      class="rounded-xl"
                      :src="`https://picsum.photos/id/${index}/40/40`"
                      :alt="key"
                    />
                    <div class="mt-1">
                      <h2 class="font-bold">{{ value.name }}</h2>
                      <h3 class="text-[#718096]">{{ value.email }}</h3>
                    </div>
                  </div>

                  <!-- function -->
                  <div v-else-if="key === 'function'">
                    <h2 class="font-bold">{{ value.job }}</h2>
                    <h3 class="text-[#718096]">{{ value.jobType }}</h3>
                  </div>

                  <button
                    v-else-if="key === 'status'"
                    :class="` ${
                      value ? 'bg-[#48BB78]' : 'bg-[#CBD5E0]'
                    }  rounded-lg px-4 py-2 text-white font-bold`"
                  >
                    {{ value ? "Online" : "Offline" }}
                  </button>

                  <p v-else-if="key === 'employed'">
                    {{ $dayjs(value).format("DD/MM/YYYY") }}
                  </p>

                  <!-- default -->
                  <p v-else>
                    {{ value }}
                  </p>
                </td>

                <td
                  v-if="isEdit"
                  class="whitespace-nowrap text-xs text-[#718096] font-bold py-4"
                >
                  Edit
                </td>
                <td
                  v-if="isMore"
                  class="whitespace-nowrap text-xs text-[#718096] font-bold py-4"
                >
                  <button class="mr-1">
                    <img src="/main/more.png" alt="more" />
                  </button>
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
    isEdit: {
      type: Boolean,
      default: () => false,
    },
    isMore: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style></style>
