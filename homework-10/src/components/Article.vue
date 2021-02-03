<template>
  <article class="blog">
    <h3>{{ title }}</h3>
    <div class="blog__image"></div>
    <p>{{ text }}</p>
    <span>Views: {{ views }}</span>
    <Button class="button" text="This is button"/>
  </article>
</template>

<script>
import Button from '@/components/elements/ButtonElement.vue';

export default {
  name: 'Article',
  components: { Button },
  props: {
    title: String,
    text: String,
    views: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__image {
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: url(https://cdn.pixabay.com/photo/2020/07/04/14/27/woman-5369752_960_720.jpg)
    center / cover no-repeat;
  }
}
</style>
