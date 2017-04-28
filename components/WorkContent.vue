<template>
  <container :thin="true">
    <div class="work-content" v-html="compiledMarkdown"></div>
  </container>
</template>

<script>
import marked from 'marked';
import * as workMarkdown from './work-markdown';
import Container from './Container.vue';

export default {
  props: ['slug'],

  computed: {
    compiledMarkdown() {
      const markdown = workMarkdown[this.slug] || '## Placeholder';

      return marked(markdown);
    },
  },

  components: {
    Container,
  },
};
</script>

<style lang="scss">
@import '~assets/css/breakpoints';

.work-content {
  margin-top: 50px;
  font-weight: 200;
  p {
    line-height: 1.5em;
  }

  @include tablet {
    p { font-size: 1.2rem; }
  }

  img {
    display: block;
    width: 100%;
    max-width: 800px;
    margin: 50px auto 100px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
    @include tablet { font-size: 1.5rem; }
    font-weight: 100;
    margin-bottom: 40px;
  }
}
</style>
