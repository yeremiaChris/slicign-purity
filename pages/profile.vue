<template>
  <div class="grid gap-4">
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
      <div>fds</div>
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
