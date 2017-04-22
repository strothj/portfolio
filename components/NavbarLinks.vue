<template>
  <ul>
    <li v-for="link in links">
      <router-link :to="link.name">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'work', title: 'Work' },
        { name: 'about', title: 'About' },
        { name: 'contact', title: 'Contact' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/breakpoints';
@import '~assets/css/colors';

ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  padding: 10px 15px;
  text-transform: uppercase;

  @include tablet {
    padding: 20px 30px;
  }
}

a {
  color: inherit;
  text-decoration: none;
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: .2rem;

  @include tablet {
    font-size: .9rem;
  }
}

a:hover {
  color: $accent;
}
</style>
