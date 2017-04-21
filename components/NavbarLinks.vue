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
        { name: 'index', title: 'Home' },
        { name: 'work', title: 'Work' },
        { name: 'about', title: 'About' },
        { name: 'contact', title: 'Contact' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/colors';

ul {
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  padding: 20px 30px;
  text-transform: uppercase;
}

a {
  color: inherit;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: .2rem;
}

a:hover {
  color: $accent;
}
</style>
