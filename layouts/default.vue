<template>
  <div class="layout">
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
// IE Flexbox Fix
html { min-height: 100vh; }
body { min-height: 100vh; }
#__nuxt {
  display: flex;
  width: 100%;
  height: 100%;

  .layout {
    flex: 1;
  }
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;

  > main {
    display: block;
    // flex-basis set to auto for IE
    flex: 1 1 auto;
  }
}
</style>
