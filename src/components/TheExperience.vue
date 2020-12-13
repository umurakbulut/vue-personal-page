<template>
  <section class="experience">
    <span class="h1 text-center">{{ title }}</span>
    <div
      class="experience__box"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <span class="h3"
        >{{ experience.companyName }} - {{ experience.title }}</span
      >
      <span
        >{{ experience.startDate }} -
        {{ experience.endDate !== null ? experience.endDate : "Now" }}</span
      >
    </div>
  </section>
</template>
<script>
export default {
  name: "TheExperience",
  props: {
    title: String,
  },
  data() {
    return {
      experiences: [
        {
          companyName: "Your Company Name",
          title: "Frontend Developer",
          startDate: "August 2018",
          endDate: null,
        },
        {
          companyName: "Your Company Name",
          title: "Web Developer",
          startDate: "March 2017",
          endDate: "August 2018",
        },
        {
          companyName: "Your Company Name",
          title: "Intern Web Developer",
          startDate: "December 2016",
          endDate: "March 2017",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.experience {
  .experience__box {
    background-color: #fbf7f7;
    padding: 15px;
    margin-bottom: 5px;
    .h3 {
      margin-top: 0;
    }
  }
}
</style>