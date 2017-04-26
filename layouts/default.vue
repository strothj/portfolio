<template>
  <div>
    <header>
      <navbar></navbar>
      <navbar-mobile-links></navbar-mobile-links>
    </header>
    <main>
      <nuxt/>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Navbar from '~components/Navbar.vue';
import NavbarMobileLinks from '~components/NavbarMobileLinks.vue';
import PageFooter from '~components/PageFooter.vue';

export default {
  components: {
    Navbar,
    NavbarMobileLinks,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import '~assets/css/main';
</style>
