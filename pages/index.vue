<template>
  <div>
    <hero-section></hero-section>
    <recent-work-section></recent-work-section>
    <google-map-section></google-map-section>
    <contact-section></contact-section>
  </div>
</template>

<script>
import HeroSection from '~components/HeroSection.vue';
import RecentWorkSection from '~components/RecentWorkSection.vue';
import GoogleMapSection from '~components/GoogleMapSection.vue';
import ContactSection from '~components/ContactSection.vue';

export default {
  components: {
    HeroSection,
    RecentWorkSection,
    GoogleMapSection,
    ContactSection,
  },
};
</script>
