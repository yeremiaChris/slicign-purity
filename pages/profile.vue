<template>
  <div class="grid gap-4">
    <!-- profile information -->
    <ProfileElement />

    <!-- 3 boxes -->
    <div class="grid grid-cols-3 gap-4">
      <!-- first box -->
      <div class="container-card">
        <MiscTitle title="Platform Settings" />

        <!-- list switch -->

        <div
          v-for="(item, index) in platformSettingsItem"
          :key="item.title"
          class="flex flex-col gap-5"
          :class="{ 'mb-5': index === 0 }"
        >
          <h2 class="text-[#A0AEC0] text-[10px] font-bold uppercase">
            {{ item.title }}
          </h2>
          <MiscToggle
            v-model="child.value"
            v-for="child in item.child"
            :key="child.title"
            :title="child.title"
          />
        </div>
      </div>

      <!-- second box -->
      <div class="container-card">
        <MiscTitle title="Profile Information" />
        <p class="text-[#A0AEC0] text-xs">
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </p>
        <MiscLine class="my-[35px]" />
        <div class="grid gap-[18px]">
          <div
            v-for="(value, key) in profileInformation"
            :key="key"
            class="text-[#718096] font-bold text-xs flex-items-center gap-2"
          >
            {{ toTitle(key) }}:
            <span v-if="key !== 'socialMedia'">
              <span class="text-[#A0AEC0]">{{ value }}</span></span
            >
            <img
              v-else
              v-for="item in value"
              :key="item"
              :src="`/main/${item}.png`"
              :alt="item"
            />
          </div>
        </div>
      </div>

      <!-- third box -->
      <div class="container-card">
        <MiscTitle title="Conversations" />
        <div class="grid gap-[21px]">
          <div
            class="flex-items-center gap-3 justify-between"
            v-for="item in 4"
            :key="item"
          >
            <div class="flex-items-center gap-3">
              <img
                class="shadow-smooth rounded-xl w-[50px] h-[50px]"
                :src="`https://picsum.photos/id/${item}/50/50`"
                alt=""
              />
              <div class="text-sm">
                <h2 class="text-[#2D3748] font-bold">Esthera Jackson</h2>
                <h3 class="text-[#718096]">Hi! need more informations...</h3>
              </div>
            </div>
            <button class="uppercase text-[#4FD1C5] text-[10px] font-bold">
              reply
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- projects -->
    <div class="container-card">
      <!-- title and description -->
      <h2 class="title font-bold mb-2">Projects</h2>
      <p class="text-sm text-[#A0AEC0] mb-[25.5px]">Architects design houses</p>

      <!-- card -->
      <div class="grid grid-cols-4 gap-4">
        <!-- carddddd -->
        <div v-for="item in 3" :key="item">
          <div
            class="h-[191px] relative rounded-xl"
            :style="`background-image: url(https://picsum.photos/id/${item}/370/191)`"
          >
            <div class="absolute opacity-black inset-0 rounded-xl" />
          </div>
          <p class="text-[#A0AEC0] text-[10px] mt-5">Project #1</p>
          <MiscTitle title="Modern" />
          <p class="text-[#A0AEC0] text-xs">
            As Uber works through a huge amount of internal management turmoil.
          </p>
          <button
            class="mt-5 uppercase text-[10px] font-bold text-[#4FD1C5] border-[#4FD1C5] border rounded-xl px-[31.5px] py-[10px]"
          >
            View All
          </button>
        </div>
        <!-- card add -->
        <div class="border border-[#E0E1E2] rounded-[15px] box-center">
          <div class="text-center flex flex-col justify-center items-center">
            <img src="/main/add.png" alt="add" />
            <p class="title text-[#718096] font-bold">Create a New Project</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "profile",
  data() {
    return {
      profileInformation: {
        fullName: "Alec M. Thompson",
        mobile: "(44) 123 1234 123",
        email: "alecthompson@mail.com",
        location: "United States",
        socialMedia: ["facebook", "twitter", "instagram"],
      },
      platformSettingsItem: [
        {
          title: "Account",
          child: [
            {
              title: "Email me when someone follows me",
              value: true,
            },
            {
              title: "Email me when someone answers on my post",
              value: false,
            },
            {
              title: "Email me when someone mentions me",
              value: true,
            },
          ],
        },
        {
          title: "Application",
          child: [
            {
              title: "New launches and projects",
              value: false,
            },
            {
              title: "Monthly product updates",
              value: false,
            },
            {
              title: "Subscribe to newsletter",
              value: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    toTitle(text) {
      return text
        .split(/(?=[A-Z])/)
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
    },
  },
};
</script>

<style scoped>
.opacity-black {
  background: linear-gradient(
    360deg,
    rgba(49, 56, 96, 0.16) 0%,
    rgba(21, 25, 40, 0.88) 100%
  );
}
</style>
