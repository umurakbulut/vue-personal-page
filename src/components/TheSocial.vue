<template>
  <div class="social-links" :style="{ backgroundColor: backgroundColor }">
    <a
      v-for="(account, index) in accounts"
      :key="index"
      :href="account.link"
      :title="account.name"
      rel="nofollow"
      target="_blank"
    >
      <BaseIcon :name="account.name" />
    </a>
  </div>
</template>
<script>
import BaseIcon from "@/components/BaseIcon.vue";
export default {
  name: "TheSocial",
  components: {
    BaseIcon,
  },
  props: {
    backgroundColor: String,
  },
  data() {
    return {
      accounts: [
        {
          name: "facebook",
          link: "https://facebook.com",
        },
        {
          name: "twitter",
          link: "https://twitter.com",
        },
        {
          name: "instagram",
          link: "https://instagram.com",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com",
        },
        {
          name: "github",
          link: "https://github.com",
        },
        {
          name: "gmail",
          link: "mailto:yourmailaddress@yourdomain.com",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  background: #000;
  font-size: .5em;
  width: 100%;
  position: fixed;
  left: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 1.5em;
  .inline-block {
    width: 1em;
    height: 1em;
    display: inline-block;
    padding: 10px 15px;
    transition: all .3s;
    &:hover {
      font-size: 1.75em;
    }
  }
  svg {
    fill: #fff;
  }
}
</style>