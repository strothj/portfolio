<template>
  <section class="hero-section">
    <container class="hero-section__upper-spacing"></container>

    <container class="hero-section__container" :thin="true">
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
      </main>
    </container>

    <container class="hero-section__contact-form" :thin="true">
      <contact-form></contact-form>
    </container>

    <container class="hero-section__scroll-down-arrow">
      <scroll-down-arrow class="scroll-down-arrow"></scroll-down-arrow>
    </container>
  </section>
</template>

<script>
import Container from './Container.vue';
import ContactForm from './ContactForm.vue';
import ScrollDownArrow from './ScrollDownArrow.vue';

export default {
  components: {
    Container,
    ContactForm,
    ScrollDownArrow,
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints.scss';
@import '~assets/css/colors.scss';

.hero-section {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;

  @include tablet {
    height: 100vh;
    color: $white;
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.9)
      ),
      url(/images/hero-image.jpg);
    background-size: cover;
    background-attachment: fixed;
  }

  h1 {
    font-size: 1.5rem;

    @include tablet {
      font-size: 3rem;
    }
  }

  div {
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1;}
    }

    animation-name: fadeIn;
    animation-duration: 1s;
  }
}

.hero-section__container {
  flex: 1;
}

.hero-section__upper-spacing {
  @extend .hero-section__container;
  display: none;

  @include tablet {
    display: inherit;
  }
}

.hero-section__contact-form {
  display: none;
  justify-content: flex-end;
  max-width: 600px;
  padding-top: 50px !important;

  @include tablet {
    display: flex;
  }
}

.hero-section__scroll-down-arrow {
  @extend .hero-section__container;
  display: none;
  justify-content: flex-end;
  align-items: center;

  @include tablet {
    display: flex;
  }
}

.scroll-down-arrow {
  width: 64px;
}
</style>
