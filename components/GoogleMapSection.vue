<template>
  <section class="google-map-section" ref="map">
  </section>
</template>

<script>
import styles from '~assets/google-map-style.json';

/* global google */
export default {
  data() {
    return {
      map: null,
    };
  },

  async mounted() {
    // Delay map creation until Google Maps API is loaded and for a few seconds
    // so page animations do not stutter.
    const delayMapCreation = new Promise(resolve => setTimeout(resolve, 2000));
    await Promise.all([this.mapApiLoaded, delayMapCreation]);

    this.map = new google.maps.Map(this.$refs.map, {
      center: { lat: 26.2445, lng: -80.2064 },
      zoom: 9,
      styles,
      scrollwheel: false,
    });
    // eslint-disable-next-line no-new
    new google.maps.Marker({
      position: { lat: 26.2445, lng: -80.2064 },
      map: this.map,
      title: 'Margate, FL',
    });
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';

.google-map-section {
  height: 200px;

  @include tablet {
    height: 400px;
  }
}
</style>
