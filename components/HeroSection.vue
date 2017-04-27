<template>
  <section class="hero-section">

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

  </section>
</template>

<script>
import Container from './Container.vue';
import ContactForm from './ContactForm.vue';
import SectionHeading from './SectionHeading.vue';

export default {
  components: {
    Container,
    ContactForm,
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
    height: 75vh;
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

  &__container {
    flex: 1;
  }
}
</style>
