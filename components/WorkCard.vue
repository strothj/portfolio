<template>
  <article class="work-card">
    <img
      :src="`/images/work/${meta.slug}-thumbnail.png`"
      :alt="meta.title">
  </article>
</template>

<script>
export default {
  props: ['meta'],
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';

.work-card {
  width: 100%;
  padding: 20px;

  @include tablet {
    width: 33%;
  }

  img {
    width: 100%;
  }
}
</style>
