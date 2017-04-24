<template>
  <section class="recent-work-section" id="recent-work">
    <container>
      <header>
        <section-heading>Recent Work</section-heading>
      </header>
      <main>
        <work-card-wrapper :work="recentWork"></work-card-wrapper>
      </main>
    </container>
  </section>
</template>

<script>
import work from '~assets/work.json';
import recentWork from '~assets/recent-work.json';
import Container from './Container.vue';
import SectionHeading from './SectionHeading.vue';
import WorkCardWrapper from './WorkCardWrapper.vue';

export default {
  computed: {
    recentWork() {
      return work.filter(w => recentWork.indexOf(w.id) > -1);
    },
  },

  components: {
    Container,
    SectionHeading,
    WorkCardWrapper,
  },
};
</script>

<style scoped>
.recent-work-section {
  padding-top: 50px;
  text-align: center;
}
</style>
