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
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: 1.125rem;
  cursor: pointer;
  color: $white;
  border: solid 2px $accent;
  background-color: $accent;
  border-radius: 8px;
}
</style>
