<template>
  <article>
    <section-heading>My Work</section-heading>
    <container>
      <work-card-wrapper :work="work"></work-card-wrapper>
    </container>
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
