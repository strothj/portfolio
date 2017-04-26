<template>
  <article class="work-page">
    <header class="work-page__header">
      <section-heading>My Work</section-heading>
    </header>
    <main>
      <container>
        <work-card-wrapper :work="work"></work-card-wrapper>
      </container>
    </main>
  </article>
</template>

<script>
import Container from '~components/Container.vue';
import SectionHeading from '~components/SectionHeading.vue';
import WorkCardWrapper from '~components/WorkCardWrapper.vue';
import work from '~assets/work.json';

export default {
  data() {
    return { work };
  },

  components: {
    Container,
    SectionHeading,
    WorkCardWrapper,
  },
};
</script>

<style lang="scss">
.work-page {
  &__header {
    text-align: center;
  }
}
</style>
