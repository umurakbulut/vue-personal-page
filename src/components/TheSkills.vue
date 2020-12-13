<template>
  <section class="skills">
    <span class="h1 text-center">{{ title }}</span>
    <div class="row-flex">
      <span
        class="skills__skill-label"
        v-for="(skill, index) in skills"
        :key="index"
        >{{ skill }}</span
      >
    </div>
  </section>
</template>
<script>
export default {
  name: "TheSkills",
  props: {
    title: String,
  },
  data() {
    return {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "jQuery",
        "Vue.js",
        "React.js",
        "React Native",
        "Sass / Scss",
        "Webpack",
        "Gulp / Grunt",
        "npm / yarn",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.skills {
  .skills__skill-label {
    padding: 5px 15px;
    letter-spacing: 2px;
    color: #fff;
    background-color: #000 !important;
    font-size: 0.8em;
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
</style>