<template>
  <nav :class="landingPage ? 'nav--landing-page' : ''">
    <container>
      <div class="navbar-contents">
        <navbar-logo></navbar-logo>
        <div class="navbar-spacing"></div>
        <navbar-links class="navbar-links"></navbar-links>
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
  z-index: 100;

  @include tablet {
    border-bottom: solid 1px $border;
  }

  &.nav--landing-page {
    position: absolute;
    color: $white;
    border-bottom: none;

    @include tablet {
      margin: 16px 0;
    }
  }
}

.navbar-links {
  display: none;

  @include tablet {
    display: inherit;
  }
}

.navbar-contents {
  display: flex;
  flex-wrap: wrap;
  height: $navbar-height;
  align-items: center;

  @include tablet {
    flex-wrap: nowrap;
  }
}

.navbar-spacing {
  flex-grow: 1;
}
</style>
