<template>
  <div>
    <p>{{ $route.params.slug }}</p>
  </div>
</template>

<script>
import work from '~assets/work.json';

export default {
  validate({ params }) {
    const slugList = work.map(w => w.slug);
    // return slugList.includes(params.slug.toLowerCase());
    return slugList.indexOf(params.slug.toLowerCase()) !== -1;
  },
};
</script>
