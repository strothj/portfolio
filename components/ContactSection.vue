<template>
  <section class="contact-section">
    <container :thin="true">
      <div class="contact-section__columns">
        <div class="contact-section__avatar">
          <avatar></avatar>
        </div>
        <div class="contact-section__spacer"></div>
        <div class="contact-section__contact-form">
          <contact-form></contact-form>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Container from './Container.vue';
import Avatar from './Avatar.vue';
import ContactForm from './ContactForm.vue';

export default {
  components: {
    Container,
    Avatar,
    ContactForm,
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';

.contact-section {
  margin: 30px 0;

  &__columns {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-end;

    @include tablet {
      flex-wrap: nowrap;
    }
  }

  &__avatar {
    position: absolute;
    left: 50%;
    top: -100px;
    transform: translateX(-50%);

    @include tablet {
      left: 180px;
    }
  }

  &__spacer {
    flex-shrink: 0;
    width: 320px;
  }

  &__contact-form {
    width: 100%;
    margin-top: 80px;

    @include tablet {
      margin-top: 0;
      max-width: 600px;
    }
  }
}
</style>
