<template>
  <main class="main center">
    <section class="articles">
      <ArticleItem
        v-for="item of articles"
        :article="item"
        :buttonText="item.buttonText"
        :key="item.id"
      />
    </section>
  </main>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue';

export default {
  name: 'MainContent',
  components: { ArticleItem },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Супер важная статья!',
          text: 'В подмосковье кто-то погладил котика!',
          img: 'https://loremflickr.com/300/200',
          views: 452,
          buttonText: 'Прочитать статью полностью',
          isButtonVisible: false,
        },
        {
          id: 2,
          title: 'Котики не глажены уже двое суток в подмосковье!',
          text: 'Ужасные новости: наши друзья меньшие остались без ласки на долгое время, всё из-за...',
          img: 'https://loremflickr.com/300/200',
          views: 361,
          buttonText: 'Далее',
          isButtonVisible: true,
        },
        {
          id: 3,
          title: 'Еще одна новость про котиков',
          text: 'Отличные новости: все котики поглажены!',
          img: 'https://loremflickr.com/300/200',
          views: 898,
          buttonText: 'Показать полностью',
          isButtonVisible: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  grid-area: main;
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  justify-content: space-between;
  align-items: start;
}
</style>
