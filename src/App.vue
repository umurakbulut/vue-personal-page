<template>
  <div class="container">
    <TheHeader title="John Doe" />
    <TheGreeting />
    <TheExperience title="experience" />
    <TheSkills title="skills & tools" />
    <TheSocial backgroundColor="#000" />
    <TheFooter madeWithName="Umur Akbulut" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheGreeting from "./components/TheGreeting.vue";
import TheExperience from "./components/TheExperience.vue";
import TheSkills from "./components/TheSkills.vue";
import TheSocial from "./components/TheSocial.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheGreeting,
    TheExperience,
    TheSkills,
    TheSocial,
    TheFooter
  },
};
</script>

<style lang="scss">
@import "normalize-scss";
@include normalize();
@import url("assets/css/app.scss");
</style>
