<template>
  <section>
    <container>
      <!--<h1>My name is Jason Strothmann and I'm a full stack web developer in South Florida.</h1>-->
    </container>
  </section>
</template>

<script>
import Container from './Container.vue';

export default {
  components: {
    Container,
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints.scss';
@import '~assets/css/colors.scss';

section {
  display: flex;
  align-items: center;
  height: 75vh;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(/images/hero-image.jpg);
  background-size: cover;
  background-attachment: fixed;
  color: $white;

  @include tablet {
    height: 100vh;
  }
}

h1 {
}
</style>
