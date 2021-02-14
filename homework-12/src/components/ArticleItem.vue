<template>
  <div class="article">
    <div class="article__body">
      <h3>{{ article.title }}</h3>
      <div class="article__image">
        <img :src="article.img" alt="">
      </div>
      <p>{{ article.text }}</p>
      <span>Просмотров: {{ article.views }}</span>
      <ButtonElement
        :text="buttonText"
        v-if="article.isButtonVisible"
      />
    </div>
  </div>
</template>

<script>
import ButtonElement from '@/components/elements/ButtonElement.vue';

export default {
  name: 'ArticleItem',
  components: { ButtonElement },
  props: ['article', 'buttonText'],
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";

.article {
  padding: 16px 28px;
  border: 1px solid lightgray;
  border-radius: 7px;

  &__body {
    display: grid;
    grid-template-rows: 70px 200px 90px 36px 80px;
    align-items: center;
    justify-items: center;
  }
  &__image {
    height: 200px;
    width: 300px;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
