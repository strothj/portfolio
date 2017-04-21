<template>
  <nav :class="landingPage ? 'nav-links--landing-page' : ''">
    <navbar-links></navbar-links>
  </nav>
</template>

<script>
import NavbarLinks from './NavbarLinks.vue';
import indexRouteMixin from './indexRouteMixin';

export default {
  mixins: [indexRouteMixin],

  components: {
    NavbarLinks,
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints';

nav {
  &.nav-links--landing-page {
    padding-top: 80px;
  }

  @include tablet {
    display: none;
  }
}
</style>
