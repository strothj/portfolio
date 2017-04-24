<template>
  <section class="recent-work-section" id="recent-work">
    <container>
      <header>
        <section-heading>Recent Work</section-heading>
      </header>
      <main>
        <div class="recent-work">

        </div>
      </main>
    </container>
  </section>
</template>

<script>
import Container from './Container.vue';
import SectionHeading from './SectionHeading.vue';

export default {
  components: {
    Container,
    SectionHeading,
  },
};
</script>

<style scoped>
.recent-work-section {
  text-align: center;
}
</style>
