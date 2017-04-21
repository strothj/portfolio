<template>
  <div>
    <header>
      <navbar></navbar>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from '~components/Navbar.vue';

export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
    ],
  },

  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import '~assets/css/colors';

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
</style>
