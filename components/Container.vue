<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['thin'],

  computed: {
    classes() {
      return this.thin ? 'container container--thin' : 'container';
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  &--thin {
    max-width: 960px;
  }
}
</style>
