const { join } = require('path');
const work = require('./assets/work.json');

module.exports = {
  css: [{ src: join(__dirname, 'assets/css/main.scss'), lang: 'scss' }],
  plugins: [{ src: '~plugins/google-maps', ssr: false }],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jason Strothmann // Full Stack Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio website of Jason Strothmann. Full Stack Web Developer.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand',
      },
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7VFSbagzmFhD-kBYxA710qw3LouIyU9s&callback=initMap',
        async: true,
        defer: true,
      },
      { src: 'https://use.fontawesome.com/b75bd924b5.js' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F7941E' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  // Generate static pages for work pages
  generate: {
    routes: work.map(w => `/work/${w.slug}`),
  },
  // Set scroll position to page top
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { x: 0, y: 0 };
    },
  },
};
