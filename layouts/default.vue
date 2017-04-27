<template>
  <div class="layout-flex-fix">
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
// Internet Explorer compatibility fix. For flex-column, it needs to be wrapped
// in a flex-row container to properly calculate height.
.layout-flex-fix {
  display: flex;
  width: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
