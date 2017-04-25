<template>
  <footer class="footer">
    <nav class="footer__social-buttons">
      <social-buttons></social-buttons>
    </nav>
    <nav class="footer__nav-links">
      <navbar-links :showHome="true"></navbar-links>
    </nav>
    <aside class="footer__copyright">
      <span>© Copyright 2017 Jason Strothmann</span>
    </aside>
  </footer>
</template>

<script>
import Container from './Container.vue';
import NavbarLinks from './NavbarLinks.vue';
import SocialButtons from './SocialButtons.vue';

export default {
  components: {
    Container,
    NavbarLinks,
    SocialButtons,
  },
};
</script>

<style lang="scss">
@import '~assets/css/colors';

.footer {
  margin-top: 100px;
  padding: 50px 0 25px 0;
  color: $white;
  background-color: $black;

  &__social-buttons, &__nav-links, &__copyright {
    margin: 0 auto;
    padding-bottom: 20px;
  }

  &__social-buttons {
    max-width: 200px;
  }

  &__nav-links {
    max-width: 500px;
  }

  &__copyright {
    text-align: center;
    font-size: .8rem;
    letter-spacing: .1rem;
    opacity: .6;
  }
}
</style>
