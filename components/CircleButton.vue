<template>
  <router-link :to="to">
    <button class="circle-button">
      <slot></slot> →
    </button>
  </router-link>
</template>

<script>
export default {
  props: ['to'],
};
</script>

<style lang="scss">
@import '~assets/css/colors';

.circle-button {
  background-color: transparent;
  border: solid 2px $black;
  border-radius: 50px;
  font-size: 1.125rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: .2s color, .2s border-color;

  &:hover {
    color: $accent;
    border-color: $accent;
  }
}
</style>
