export default {
  data() {
    return {
      landingPage: this.$route.name === 'index',
    };
  },

  watch: {
    $route(newRoute) {
      this.landingPage = newRoute.name === 'index';
    },
  },
};
