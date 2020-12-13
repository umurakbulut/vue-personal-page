<template>
  <span
    v-html="require(`@/assets/icons/icon-${name}.svg`)"
    class="inline-block fill-current"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>