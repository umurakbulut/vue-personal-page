<template>
  <header class="header">
    <h1 class="header__name">{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 15px 0;
  width: 100%;
  .header__name {
    margin: 0;
  }
}
</style>