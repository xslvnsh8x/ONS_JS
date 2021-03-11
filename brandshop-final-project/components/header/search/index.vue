<template>
  <form class="search" @submit.stop.prevent>
    <label for="search" />
    <div class="search__item">
      <Categories />
      <input
        id="search"
        class="search__input"
        type="search"
        name="search"
        placeholder="Search for Item..."
      >
      <button class="search__btn" @click.stop.prevent>
        <font-awesome-icon :icon="['fas', 'search']" class="search__icon" />
      </button>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import Categories from '@/components/header/search/categories'

export default Vue.extend({
  name: 'Search',
  components: { Categories }
})
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid #ececec;
  border-radius: 3px;
  margin-left: 36px;
  &__item {
    display: inline-flex;
    align-items: center;
    width: 100%;
    position: relative;
    height: 36px;
  }
  &__input {
    width: 279px;
    line-height: 32px;
    padding-left: 16px;
    padding-right: 16px;
  }
  &__btn {
    display: inline-flex;
    align-items: center;
    height: 100%;
    border-left: 1px solid #ececec;
    padding: 0 11px;
    background: none;
    font-size: 14px;
    color: #a4a4a4;
    &:hover .search__icon {
      transform: scale(1.3);
      color: #575757;
    }
  }
  &__icon {
    transition: transform .2s ease;
  }
}
</style>
