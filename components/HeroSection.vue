<template>
  <section>
    <container :thin="true">
      <header>
        <h1>Web applications done right.</h1>
      </header>
      <main>
        <p>
          I am a full stack web developer from the United States living in South Florida.
          I enjoy transforming ideas into reality.
          If you are a business or developer, let me get in touch
          with you about your project.
        </p>
        <div class="hero-section__contact-form">
          <contact-form></contact-form>
        </div>
      </main>
    </container>
  </section>
</template>

<script>
import Container from './Container.vue';
import ContactForm from './ContactForm.vue';

export default {
  components: {
    Container,
    ContactForm,
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints.scss';
@import '~assets/css/colors.scss';

section {
  display: flex;
  height: 75vh;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.9)
    ),
    url(/images/hero-image.jpg);
  background-size: cover;
  background-attachment: fixed;
  color: $white;

  @include tablet {
    align-items: center;
    height: 100vh;
  }
}

h1 {
  font-size: 1.5rem;

  @include tablet {
    font-size: 3rem;
  }
}

// Contact form wrapper
.hero-section__contact-form {
  display: none;

  @include tablet {
    display: inherit;
    float: right;
    max-width: 600px;
    margin-top: 50px;
    margin-right: 50px;

    &::after {
      clear: right;
    }
  }
}
</style>
