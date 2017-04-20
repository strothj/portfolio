<template>
  <nav :class="navClass">
    <container>
      <navbar-logo></navbar-logo>
    </container>
  </nav>
</template>

<script>
import Container from './Container.vue';
import NavbarLogo from './NavbarLogo.vue';

export default {
  data() {
    return { hero: this.$route.name === 'index' };
  },

  computed: {
    navClass() {
      return this.hero ? 'navbar--hero' : null;
    },
  },

  components: {
    Container,
    NavbarLogo,
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints.scss';

nav {
  width: 100%;
  height: 64px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.25);
  z-index: 100;
}

.navbar--hero {
  position: absolute;
  color: white;
  box-shadow: none;

  @include tablet {
    margin: 16px 0;
  }
}
</style>
