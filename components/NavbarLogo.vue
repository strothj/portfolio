<template>
  <header class="navbar-logo">
    <router-link to="/">
      <h1>Jason<strong>Strothmann</strong></h1>
    </router-link>
  </header>
</template>

<style lang="scss">
@import '~assets/css/colors';
@import '~assets/css/breakpoints';

.navbar-logo {
  width: 100%;
  color: $accent;
  text-align: center;

  @include tablet {
    width: inherit;
    text-align: inherit;
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-weight: 100;
  }
}
</style>
