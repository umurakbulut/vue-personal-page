<template>
  <footer class="footer">
    <p class="footer__text text-center">
      Made with &#9829; by <a href="https://umurakbulut.net" target="_blank" :title="madeWithName">{{ madeWithName }}</a>.
    </p>
  </footer>
</template>
<script>
export default {
  name: "TheFooter",
  props: {
    madeWithName: String,
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 30px;
  .footer__text {
    a {
      color: #333;
      text-decoration: none;
    }
  }
}
</style>