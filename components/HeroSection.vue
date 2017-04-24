<template>
  <section class="hero-section">
    <container class="hero-section__upper-spacing"></container>

    <container class="hero-section__hero-text" :thin="true">
      <article>
        <main>
          <section-heading animation="slide-down">
            My name is Jason Strothmann and I'm a web developer in
            South Florida.
          </section-heading>
        </main>
      </article>
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
import SectionHeading from './SectionHeading.vue';

export default {
  components: {
    Container,
    ContactForm,
    ScrollDownArrow,
    SectionHeading,
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints.scss';
@import '~assets/css/colors.scss';

.hero-section {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;

  @include tablet {
    height: 100vh;
    min-height: 650px;
    color: $white;
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url(/images/hero-image.jpg);
    background-size: cover;
    background-attachment: fixed;
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

.hero-section__scroll-down-arrow {
  @extend .hero-section__container;
  display: none;
  justify-content: flex-end;
  align-items: flex-end;

  @include tablet {
    display: flex;
  }
}

.scroll-down-arrow {
  position: absolute;
  width: 64px;
  height: 64px;
}
</style>
