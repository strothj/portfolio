<template>
  <nav :class="classes">
    <navbar-links></navbar-links>
  </nav>
</template>

<script>
import NavbarLinks from './NavbarLinks.vue';
import indexRouteMixin from './indexRouteMixin';

export default {
  mixins: [indexRouteMixin],

  computed: {
    classes() {
      const classes = ['navbar-mobile-links'];

      if (this.landingPage) classes.push('navbar-mobile-links--landing-page');

      return classes;
    },
  },

  components: {
    NavbarLinks,
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';
@import '~assets/css/colors';

.navbar-mobile-links {
  color: $white;
  background-color: $black;
  padding-bottom: 25px;

  @include tablet {
    display: none;
  }
}
</style>
