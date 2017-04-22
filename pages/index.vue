<template>
  <div>
    <hero-section></hero-section>
    <recent-work-section></recent-work-section>
  </div>
</template>

<script>
import HeroSection from '~components/HeroSection.vue';
import RecentWorkSection from '~components/RecentWorkSection.vue';

export default {
  components: {
    HeroSection,
    RecentWorkSection,
  },
};
</script>
