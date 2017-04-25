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
    await this.mapsApiLoaded;

    this.map = new google.maps.Map(this.$refs.map, {
      center: { lat: 26.2445, lng: -80.2064 },
      zoom: 9,
      styles,
      scrollwheel: false,
    });
    new google.maps.Marker({ // eslint-disable-line no-new
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
