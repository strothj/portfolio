<template>
  <div class="brand">
    <router-link :to="{ name: 'index' }">
      <div><h1>Jason Strothmann</h1></div>
      <div><h2>Full Stack Web Developer</h2></div>
    </router-link>
  </div>
</template>

<style scoped>
h1, h2 {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: .1rem;
}

h1 {
  padding-bottom: 2px;
  font-size: 1rem;
}

h2 {
  font-size: .65rem;
  font-weight: 100;
}

a {
  text-decoration: none;
  color: inherit;
}

.brand {
  display: flex;
  height: 64px;
  flex-direction: column;
  justify-content: center;
}
</style>
