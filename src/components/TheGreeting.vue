<template>
  <section class="greeting">
    <div class="greeting__text">
      <p>
        <strong>Lorem Ipsum</strong> is simply dummy<br />
        text of the printing <br />
        and typesetting industry. ✌
      </p>
      <p>
        <small>🎓 from Lorem Ipsum, Computer Engineering in 2018.</small>
      </p>
    </div>
    <div
      class="greeting__profile-picture"
      :style="{
        backgroundImage:
          hover === false
            ? 'url(' + require('@/assets/img/profile-picture.jpg') + ')'
            : 'url(' + require('@/assets/img/profile-picture-hover.jpg') + ')',
      }"
      @mouseover="hover = true"
      @mouseout="hover = false"
    ></div>
  </section>
</template>
<script>
export default {
  name: "TheGreeting",
  props: {
    title: String,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  .greeting__text {
    font-size: 38px;
    margin-right: 30px;
    line-height: 1.5em;
    font-weight: 100;
    flex-basis: 75%;
    flex-grow: 0;
    letter-spacing: 1px;
  }
  .greeting__profile-picture {
    flex-basis: 40%;
    height: 400px;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: all 0.5s ease-in-out;

    &:hover {
      border-radius: unset;
    }
  }
}

@media (max-width: 992px) {
  .greeting {
    .greeting__text {
      flex-basis: auto;
      margin: 0;
      font-size: 32px;
    }
    .greeting__profile-picture {
      display: none;
    }
  }
}
</style>