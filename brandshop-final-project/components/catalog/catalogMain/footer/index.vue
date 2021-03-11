<template>
  <footer class="catalogMainFooter">
    <div class="pagination">
      <ul class="pagination__list">
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            <font-awesome-icon class="pagination__list-icon" :icon="['fas', 'chevron-left']" />
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            1
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            2
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            3
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            4
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            5
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            6
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            20
          </a>
        </li>
        <li class="pagination__list-item">
          <a href="#" class="pagination__list-link" @click.stop.prevent>
            <font-awesome-icon class="pagination__list-icon" :icon="['fas', 'chevron-right']" />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <button class="catalogMainFooter-button" @click.stop.prevent>
        View All
      </button>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogMainFooter'
})
</script>

<style lang="scss" scoped>
.catalogMainFooter {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  &-button {
    display: inline-block;
    background: none;
    line-height: 42px;
    border: 1px solid $brandColor;
    border-radius: 3px;
    padding: 0 45px;
    font-size: 16px;
    color: $brandColor;
    transition: all .3s;
    &:hover {
      background-color: $brandColor;
      color: #ffffff;
    }
  }
}
.pagination {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 0 16px;
  &__list {
    display: flex;
    &-item {
      line-height: 42px;
      margin-right: 17px;
      display: flex;
      &:last-child {
        margin: 0;
      }
    }
    &-link {
      font-size: 16px;
      color: #c4c4c4;
      transition: all .3s;
      &:hover {
        color: #f16d7f;
      }
    }
    &-icon {
      font-size: 13px;
    }
    .pagination__list-item:nth-child(7) {
      margin: 0;
    }
    .pagination__list-item:nth-child(7)::after {
      margin-right: -3px;
      font-size: 16px;
      font-weight: 300;
      color: #c4c4c4;
      content: ".....\00a0";
    }
  }
}
</style>
