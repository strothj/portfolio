<template>
  <article class="avatar">
    <div class="avatar__img">
      <img src="~assets/images/avatar.png" alt="My profile picture">
    </div>
    <div class="avatar__social-buttons">
      <social-buttons></social-buttons>
    </div>
  </article>
</template>

<script>
import SocialButtons from './SocialButtons.vue';

export default {
  components: {
    SocialButtons,
  },
};
</script>

<style lang="scss">
@import '~assets/css/colors';

.avatar {
  display: flex;
  flex-direction: column;
}
</style>
