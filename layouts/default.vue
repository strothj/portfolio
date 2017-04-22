<template>
  <div>
    <header>
      <navbar></navbar>
      <navbar-mobile-links></navbar-mobile-links>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from '~components/Navbar.vue';
import NavbarMobileLinks from '~components/NavbarMobileLinks.vue';

export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
    ],
  },

  components: {
    Navbar,
    NavbarMobileLinks,
  },
};
</script>

<style lang="scss">
@import '~assets/css/main';
</style>
