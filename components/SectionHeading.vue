<template>
  <div :class="animationClasses">
    <h1 class="heading">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
import animationMixin from './animationMixin';

export default {
  mixins: [animationMixin],
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';

.heading {
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;

  @include tablet {
    font-size: 3rem;
  }
}
</style>
