<template>
  <article class="work-card">
    <router-link :to="`/work/${meta.slug}`">
      <img
        :src="`/images/work/${meta.slug}-thumbnail.png`"
        :alt="meta.title">
      <div class="work-card__overlay">
        <p class="work-card__title">{{ meta.title }}</p>
        <p class="work-card__job">{{ meta.job }}</p>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  props: ['meta'],
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';
@import '~assets/css/colors';

.work-card {
  width: 100%;
  margin: 15px;
  text-align: center;

  &__title {
    font-size: .8rem;
    font-weight: 600;
  }

  &__job {
    font-size: .7rem;
    color: #757575;
  }

  @include tablet {
    width: 28%;
  }

  @include desktop {
    position: relative;

    &__overlay, &__title, &__job {
      position: absolute;
    }

    &__title, &__job {
      color: $white;
    }

    &__overlay {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: .0;
      transition: opacity .5s;


      &:hover {
        opacity: .9;
      }
    }

    &__title {
      width: 100%;
      top: 58px;
      font-size: 1.3rem;
    }

    &__job {
      width: 100%;
      top: 110px;
      font-size: .8rem;
    }
  }

  img {
    display: block;
    width: 100%;
  }

  p {
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
