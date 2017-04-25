<template>
  <div class="social-buttons">
    <a href="https://github.com/strothj" target="_blank" rel="noopener">
      <i class="fa fa-github-square" aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/in/jason-strothmann-185b0b12b/" target="_blank" rel="noopener">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    <a href="mailto:contactform@jasons.io">
      <i class="fa fa-envelope" aria-hidden="true"></i>
    </a>
  </div>
</template>

<style lang="scss">
@import '~assets/css/colors';

.social-buttons {
  display: flex;
  justify-content: space-around;
  font-size: 1.7rem;

  i {
    color: $accent;
  }

  a:hover {
    opacity: .5;
  }
}
</style>
