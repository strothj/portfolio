<template>
  <div class="work-wrapper">
    <work-card
      v-for="item in work"
      :key="item.id"
      :meta="item">
    </work-card>
  </div>
</template>

<script>
import WorkCard from './WorkCard.vue';

export default {
  props: ['work'],

  components: {
    WorkCard,
  },
};
</script>

<style lang="scss">
.work-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
