<template>
  <nav :class="landingPage ? 'nav--landing-page' : ''">
    <container>
      <div class="navbar-contents">
        <navbar-logo></navbar-logo>
        <div class="navbar-spacing"></div>
        <navbar-links></navbar-links>
      </div>
    </container>
  </nav>
</template>

<script>
import Container from './Container.vue';
import NavbarLogo from './NavbarLogo.vue';
import NavbarLinks from './NavbarLinks.vue';

export default {
  data() {
    return {
      landingPage: this.$route.name === 'index',
    };
  },

  watch: {
    $route(newRoute) {
      this.landingPage = newRoute.name === 'index';
    },
  },

  components: {
    Container,
    NavbarLogo,
    NavbarLinks,
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints.scss';
@import '~assets/css/colors.scss';
$navbar-height: 80px;

nav {
  width: 100%;
  height: $navbar-height;
  border-bottom: solid 1px $border;
  z-index: 100;

  &.nav--landing-page {
    position: absolute;
    color: $white;
    border-bottom: none;
    margin: 16px 0;
  }
}

.navbar-contents {
  display: flex;
  height: $navbar-height;
  align-items: center;
}

.navbar-spacing {
  flex-grow: 1;
}
</style>
