<template>
  <div :class="animationClasses">
    <h1 class="section-heading">
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

.section-heading {
  font-size: 1.5rem;
  font-weight: 100;

  @include tablet {
    font-size: 3rem;
  }
}
</style>
