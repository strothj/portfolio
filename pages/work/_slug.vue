<template>
  <article class="work-item-page">
    <header class="work-item-page__header">
      <section-heading>{{ work.title }}</section-heading>
      <h2>{{ work.job }}</h2>
    </header>
    <main>
      <work-content :slug="work.slug"></work-content>
    </main>
  </article>
</template>

<script>
import SectionHeading from '~components/SectionHeading.vue';
import WorkContent from '~components/WorkContent.vue';
import workMeta from '~assets/work.json';

export default {
  // Ensure the slug provided in the route param corresponds to an existing work
  // entry. Return a 404 otherwise.
  validate({ params }) {
    const slugList = workMeta.map(w => w.slug);
    return slugList.indexOf(params.slug.toLowerCase()) !== -1;
  },

  data() {
    const work = workMeta.find(
      w => w.slug === this.$route.params.slug.toLowerCase(),
    );

    return {
      work,
    };
  },

  components: {
    SectionHeading,
    WorkContent,
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';
@import '~assets/css/colors';

.work-item-page {
  &__header {
    text-align: center;

    h1 { margin-bottom: 10px; }

    h2 {
      margin: 0;
      font-size: .7rem;
      color: lighten($black, 30%);
      text-transform: uppercase;
      @include tablet { font-size: .8rem; }
    }
  }
}
</style>
