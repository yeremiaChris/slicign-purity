<template>
  <div class="grid gap-4">
    <!-- profile information -->
    <ProfileElement />

    <!-- 3 boxes -->
    <BillingBoxes />

    <!-- projects -->
    <BillingProject />
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
