<template>
  <nav :class="classes">
    <container>
      <div class="navbar__contents">
        <navbar-logo></navbar-logo>
        <div class="navbar__spacing"></div>
        <div class="navbar__links">
          <navbar-links></navbar-links>
        </div>
      </div>
    </container>
  </nav>
</template>

<script>
import Container from './Container.vue';
import NavbarLogo from './NavbarLogo.vue';
import NavbarLinks from './NavbarLinks.vue';
import indexRouteMixin from './indexRouteMixin';

export default {
  mixins: [indexRouteMixin],

  computed: {
    classes() {
      const classes = ['navbar'];

      if (this.landingPage) classes.push('navbar--landing-page', 'animation-slow-fade-in');

      return classes;
    },
  },

  components: {
    Container,
    NavbarLogo,
    NavbarLinks,
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints.scss';
@import '~assets/css/colors.scss';
$navbar-height: 80px;

.navbar {
  width: 100%;
  height: $navbar-height - 10px;
  background-color: $black;
  z-index: 100;

  @include tablet {
    height: $navbar-height;
  }

  &--landing-page {
    @include tablet {
      position: absolute;
      margin: 16px 0;
      background-color: transparent;
    }
  }

  &__links {
    display: none;
    color: $white;

    @include tablet {
      display: inherit;
    }
  }

  &__contents {
    display: flex;
    flex-wrap: wrap;
    height: $navbar-height;
    align-items: center;

    @include tablet {
      flex-wrap: nowrap;
    }
  }

  &__spacing {
    flex-grow: 1;
  }
}
</style>
