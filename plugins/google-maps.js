import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies

const mapsApiLoaded = new Promise(resolve => {
  if (typeof window === 'object') {
    window.initMap = () => {
      resolve();
    };
  }
});

Vue.mixin({
  method: {
    mapsApiLoaded() {
      return mapsApiLoaded;
    },
  },
});
