<template>
  <div>
    <hero-section></hero-section>
    <recent-work-section></recent-work-section>
    <google-map-section></google-map-section>
  </div>
</template>

<script>
import HeroSection from '~components/HeroSection.vue';
import RecentWorkSection from '~components/RecentWorkSection.vue';
import GoogleMapSection from '~components/GoogleMapSection.vue';

export default {
  components: {
    HeroSection,
    RecentWorkSection,
    GoogleMapSection,
  },
};
</script>
