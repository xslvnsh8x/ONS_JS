<template>
  <div class="sorting">
    <div class="sorting-wrapper">
      <div class="sorting__item">
        <label for="sortBy" class="sorting__item-title">
          Sort By
        </label>
        <select id="sortBy" class="sorting__item-select">
          <option value="0">
            Name
          </option>
          <option value="1">
            Price
          </option>
          <option value="2">
            Size
          </option>
        </select>
      </div>
      <div class="sorting__item">
        <label for="show" class="sorting__item-title">
          Show
        </label>
        <select id="show" class="sorting__item-select sorting__item-selectShow">
          <option value="0">
            09
          </option>
          <option value="1">
            08
          </option>
          <option value="2">
            07
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogMainHeaderSorting'
})
</script>

<style lang="scss" scoped>
.sorting {
  height: 50px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  &-wrapper {
    display: flex;
  }
  &__item {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    margin-left: 10px;
    color: #6f6e6e;
    &::before {
      content: "\2bc6";
      position: absolute;
      top: 0;
      right: 6px;
      height: 100%;
      text-align: center;
      font-size: 12px;
      line-height: 27px;
      pointer-events: none;
    }
    &:hover::before {
      color: $brandColor;
    }
    &-title {
      padding: 0 6px 0 12px;
    }
    &-select {
      color: #6f6e6e;
      font-family: inherit;
      width: 86px;
      padding: 6px;
      border-left: 1px solid #ebebeb;
      -webkit-appearance: none;
      appearance: none;
      outline: none;
      cursor: pointer;
      option {
        padding: 16px;
      }
    }
    &-selectShow {
      width: 62px;
      padding: 6px 6px 6px 10px;
    }
  }
  &__link {
    font-size: 14px;
    color: #6f6e6e;
    border-left: 1px solid #ebebeb;
    display: inline-block;
    transition: all .3s;
    &:hover {
      color: $brandColor;
    }
  }

  &__btnSortBy {
    padding: 0 9px 0 11px;
    .sorting-wrapper__icon {
      margin-left: 20px;
    }
  }
  &__btnNumber {
    padding: 0 8px 0 12px;
    .sorting-wrapper__icon {
      margin-left: 17px;
    }
  }
}
</style>
