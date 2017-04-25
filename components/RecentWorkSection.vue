<template>
  <section class="recent-work-section" id="recent-work">
    <container>
      <header>
        <section-heading>Recent Work</section-heading>
      </header>
      <main>
        <work-card-wrapper :work="recentWork"></work-card-wrapper>
      </main>
      <nav class="recent-work-section__view-more">
        <circle-button to="/work">View More</circle-button>
      </nav>
    </container>
  </section>
</template>

<script>
import work from '~assets/work.json';
import recentWork from '~assets/recent-work.json';
import Container from './Container.vue';
import SectionHeading from './SectionHeading.vue';
import WorkCardWrapper from './WorkCardWrapper.vue';
import CircleButton from './CircleButton.vue';

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
    CircleButton,
  },
};
</script>

<style lang="scss">
.recent-work-section {
  padding-top: 50px;
  padding-bottom: 100px;
  text-align: center;

  &__view-more {
    padding-top: 50px;
  }
}
</style>
