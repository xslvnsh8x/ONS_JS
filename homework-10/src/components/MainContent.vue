<template>
  <main class="main center">
    <Article
      title="Article component"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, corporis."
      views="42"
    />
  </main>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: 'MainContent',
  components: { Article },
};
</script>

<style lang="scss" scoped>
.main {
  grid-area: main;
}
</style>
